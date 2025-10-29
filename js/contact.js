document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Clear previous messages
    formMessage.className = 'form-message';
    formMessage.textContent = '';

    // Get form data
    const formData = new FormData(form);
    
    // Get Turnstile token
    const turnstileToken = document.querySelector('[name="cf-turnstile-response"]')?.value;
    
    if (!turnstileToken) {
      showMessage('Please complete the captcha verification.', 'error');
      return;
    }

    // Disable button and show loader
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    // Prepare data
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      'cf-turnstile-response': turnstileToken
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        showMessage(result.message, 'success');
        form.reset();
        // Reset Turnstile widget
        if (window.turnstile) {
          window.turnstile.reset();
        }
      } else {
        showMessage(result.message || 'Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showMessage('Network error. Please check your connection and try again.', 'error');
    } finally {
      // Re-enable button and hide loader
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
    }
  });

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    }
  }
});

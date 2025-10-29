// Cloudflare Pages Function for Contact Form
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    
    const data = await request.json();
    const { name, email, message, 'cf-turnstile-response': turnstileToken } = data;

    // Validate
    if (!name || !email || !message || !turnstileToken) {
      return new Response(JSON.stringify({
        success: false,
        message: 'All fields are required'
      }), { status: 400, headers: { 'Content-Type': 'application/json' }});
    }

    // Verify Turnstile
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });

    const turnstileResult = await turnstileResponse.json();
    if (!turnstileResult.success) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Captcha failed'
      }), { status: 400, headers: { 'Content-Type': 'application/json' }});
    }

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [env.GMAIL_USER],
        reply_to: email,
        subject: `[Tucker Cyber Security] Contact from ${name}`,
        html: `<h2>Contact Form - Tucker Cyber Security</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
      })
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error('Resend error:', emailResult);
      return new Response(JSON.stringify({
        success: false,
        message: `Email failed: ${emailResult.message || JSON.stringify(emailResult)}`
      }), { status: 500, headers: { 'Content-Type': 'application/json' }});
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully!'
    }), { status: 200, headers: { 'Content-Type': 'application/json' }});

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: `Error: ${error.message}`
    }), { status: 500, headers: { 'Content-Type': 'application/json' }});
  }
}

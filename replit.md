# Tucker Cybersecurity Website

## Overview
This is a clean, modern website for Tucker Cybersecurity, a company offering AI-powered cybersecurity solutions and managed security services. The site has been completely rebuilt with clean, semantic HTML and CSS, removing all Webflow overhead while maintaining identical visual styling.

## Project Structure
```
.
├── index.html           # Main homepage
├── team.html           # Team page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Clean, component-based CSS (~800 lines)
├── js/                 # JavaScript files (minimal)
├── images/             # Image assets
└── replit.md          # This file
```

## Technology Stack
- **Pure HTML/CSS/JavaScript** (no build system required)
- **Clean, semantic HTML5** markup
- **Component-based CSS** with design tokens
- **Python HTTP server** for local development
- **Google Analytics** for tracking (minimal third-party scripts)

## Key Features
- ✅ Clean codebase - removed 15,000+ lines of Webflow bloat
- ✅ Semantic HTML5 structure
- ✅ Responsive design with mobile menu
- ✅ All contact links point to stevenstucker@gmail.com
- ✅ No HubSpot chat widget or unnecessary tracking scripts
- ✅ Fast loading times with minimal dependencies
- ✅ Identical visual appearance to original Webflow design

## Setup
The site runs on port 5000 using Python's built-in HTTP server:
```
python -m http.server 5000
```

## Recent Changes
- **2025-11-01**: Updates and deployment preparation
  - Removed Clara Del Villar from team page
  - Added auto-updating copyright year to footer (updates automatically on Jan 1st each year)
  - Prepared site for deployment to Cloudflare Pages or Replit

- **2025-10-29**: Contact form implementation
  - Created standalone contact form (contact.html) with Cloudflare Turnstile captcha
  - Added contact form section to bottom of index.html and team.html
  - Linked "Contact" and "Contact Us" buttons to scroll to contact form (#contact-form)
  - Removed all mailto: links from buttons and forms
  - Created contact.css with modern blue gradient styling
  - Created contact.js with form validation and submission handling
  - Created functions/api/contact.js for Cloudflare Pages serverless function
  - Integrated Resend API for email delivery when deployed
  - Added form success/error message styling
  - Contact form ready for deployment to Cloudflare Pages

- **2025-10-28**: Complete website rebuild and refinements
  - Created clean CSS file (styles.css) replacing 15,612 lines of Webflow CSS
  - Rebuilt all HTML pages with semantic markup
  - Removed all Webflow data attributes and overhead
  - Removed HubSpot chat widget
  - Removed Facebook Pixel, Google Tag Manager, and Google Ads tracking
  - Kept only essential Google Analytics
  - Added mobile menu functionality
  - Removed "Schedule your Free Consultation" button from homepage hero
  - Replaced FORTINET and SANS Institute logos with Stanford University logo
  - Applied color correction to all team photos (reduced overexposure)
  - Resized all logos to 64px height for consistency
  - Reorganized logo strip: Row 1 (Deloitte, AT&T, Apple, Atari, Sony, Honeywell), Row 2 (Stanford, Berkeley Law, Harvard, Georgia Tech, Clemson, Charlotte)
  - Removed ™ trademark symbols from headings
  - Made myths/misconceptions section more compact with black text
  - Fixed responsive layout on team page - Steve Tucker photo now stacks below text on mobile
  - Tested and verified all pages working correctly across desktop and mobile

## Contact Information
All contact links and forms now point to: **stevenstucker@gmail.com**

## Deployment
This static site can be deployed to any static hosting service, CDN, or web server. The deployment configuration uses Python's HTTP server to serve the files in development.

## Design System
The site uses a clean design system with:
- **Colors**: Primary blue (#4a3aff), dark blue (#281ca5), and semantic color tokens
- **Typography**: Merriweather for headings, Open Sans for body text
- **Spacing**: Consistent spacing scale (0.5rem to 6rem)
- **Components**: Reusable button, card, and layout components
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes
- One font file (Futura-Bold.otf) is missing from the original Webflow export (see MISSING.txt)
- The site is production-ready with all necessary SEO metadata
- No external dependencies or frameworks required
- All images are optimized and served locally

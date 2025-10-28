# Tucker Cybersecurity Website

## Overview
This is a static HTML website for Tucker Cybersecurity, a company offering AI-powered cybersecurity solutions and managed security services. The site was exported from Webflow and is served as a static site using Python's built-in HTTP server.

## Project Structure
```
.
├── index.html           # Main homepage
├── team.html           # Team page
├── contact.html        # Contact page
├── css/                # Stylesheets
│   ├── normalize.css
│   ├── webflow.css
│   └── tucker-cybersecurity.webflow.css
├── js/                 # JavaScript files
│   └── webflow.js
└── images/             # Image assets
```

## Technology Stack
- Pure HTML/CSS/JavaScript (no build system required)
- Webflow-generated static site
- Python HTTP server for local development

## Setup
The site is configured to run on port 5000 using Python's built-in HTTP server:
```
python -m http.server 5000
```

## Recent Changes
- **2025-10-28**: Initial import from GitHub and Replit environment setup
  - Installed Python 3.11
  - Configured workflow to serve static files on port 5000
  - Added project documentation

## Deployment
This is a static site that can be deployed to any static hosting service or CDN. The deployment configuration uses Python's HTTP server to serve the files.

## Notes
- One font file (Futura-Bold.otf) failed to download during the Webflow export (see MISSING.txt)
- The site includes integrations with Google Analytics, Google Tag Manager, Facebook Pixel, HubSpot, and Google Ads
- The site is production-ready and includes all necessary SEO metadata

# The Canvas Hotel — Static Website

This is a simple, responsive, accessible static website scaffold for The Canvas Hotel.

Files included:
- `index.html` — Home with hero, featured rooms and booking form
- `rooms.html`, `amenities.html`, `gallery.html`, `dining.html`, `about.html`, `contact.html` — core pages
- `assets/css/main.css` — main stylesheet
- `assets/js/main.js` — small JS for nav, booking form stub, and gallery lightbox

How to run:
- Open `index.html` in a browser, or serve with a static server.

Example static server (PowerShell):

```powershell
# From project root
python -m http.server 8000
# or using PowerShell's built-in
Start-Process "http://localhost:8000/index.html"
```

Notes & next steps:
- Replace placeholder images with optimized JPEG/WebP assets and use `loading="lazy"`.
- Replace `https://example.com/api/book` with your booking provider's API endpoint and secure server-side integration.
- Add analytics, sitemap.xml and robots.txt for SEO.
- Expand privacy and terms pages with legal text.

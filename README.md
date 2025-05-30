# README.md

Cyberia React Portfolio
======================

A minimal, accessible, retro-cybercore portfolio site built with React + Vite.

## Features
- **Dark mode only**: Retro cybercore/Lain-inspired theme
- **Accessible**: All images have alt text, all links have aria-labels, keyboard navigation supported
- **Sticky footer**: Footer always at the bottom, even on short pages
- **Custom angel wings cursor**: Pixel-art cursor enforced globally
- **Glitch/static effects**: Subtle CSS and GIF overlays
- **No unused code**: All styles and components are documented and cleaned up

## Pages
- `/` — Terminal-inspired landing (ASCII intro, name, tagline)
- `/bio` — "whoami" page (brief intro, glitch text)
- `/projects` — Projects list (title, description, GitHub links)
- `/resume` — PDF link (minimal, no in-page render)
- Hidden `/lain` — Easter egg (optional)

## Accessibility
- All interactive elements have aria-labels
- All images have descriptive alt text
- Keyboard navigation supported
- Color contrast meets WCAG AA
- **Warning:** Some pages use flicker/static effects (photosensitivity warning)

## Development
- Vite + React
- SCSS for styling
- All assets in `public/assets/`
- See `App.scss` and `App.jsx` for layout/grid details

## Anti-Scraper
- `robots.txt` disallows all
- `<meta name="robots" content="noindex, nofollow">` in `index.html`
- Email is obfuscated in footer

## License
MIT

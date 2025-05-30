<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a React + Vite project for the Cyberia site. Use functional components, SCSS for styling, and integrate react-mouse-particles for mouse effects. Use the color scheme and layout from the original styles.scss and HTML. The header, grid cell, and footer should match the previous design. The angel wings cursor should be enforced globally. All assets should be placed in the public/assets folder.

# copilot.md

## 🖥️ Project Setup

- **React App**: Lightweight setup using:
  - **Vite** (fast dev, modern build tool, preferred for minimalism)
  - Or **Create React App** (easier for beginners, larger footprint)
  - **TypeScript** for type safety (optional)
- **Deployment Targets**:
  - **GitHub Pages**: Static site via `gh-pages` branch or GitHub Actions workflow
  - **Docker**: Multi-stage build with `nginx` (or **`http-server`** as a simpler fallback)
- **Lazy loading**:
  - Images (`<img loading="lazy">`)
  - Fonts via `font-display: swap`
  - Dynamic `import()` for non-critical components

---

## 🕸️ Theme & Style: "Lain-core Minimalism"

- **Core Aesthetic**:
  - Inspired by: [https://fauux.neocities.org/](https://fauux.neocities.org/)
  - Themes: **Retro Cybercore** / **Serial Experiments Lain** / **Gothic Minimalism**
  - **Dark Mode only** (`#000` background, no toggle)
  - **Typography**: `'Courier New'`, `'IBM Plex Mono'`, `'Pixel Operator'`, or **bitmap pixel fonts** for extra retro
- **Color Palette**:
  - Phosphor green (`#00FF00`)
  - Muted red (`#FF5555`)
  - Grays (`#999`, `#ccc`)
- **Effects (subtle but effective)**:
  - Glitchy text animations (`CSS keyframes`, `clip-path`)
  - Flickering hover states
  - Static noise overlay (CSS + `blend-mode`)
  - Cursor:
    - Custom pixel-art (`.png` or `.svg`)
    - Glitching effect on hover (CSS or JavaScript)
- **Media**:
  - Minimal **GIFs** (loading sparingly, lazy-loaded)
  - Occasional **ASCII art**
  - **No carousels**, **no heavy layouts** (simplicity = speed)

---

## 📄 Content Structure

- **Pages**:
  - `/` → Terminal-inspired landing (ASCII intro, name, tagline)
  - `/bio` → "whoami" page (brief intro, optional glitch animations)
  - `/projects` → Projects list (title, description, GitHub links)
  - `/resume` → PDF link (minimal, no in-page render)
  - Hidden `/lain` → Easter egg (e.g., Lain quotes, creepy visuals, console warnings)
- **Minimal Layout**:
  - Avoid grids, complex UI frameworks
  - Rely on **semantic HTML** + **CSS Modules/SCSS** (or `tailwind` if preferred)

---

## ⚙️ Functionality & Security

- **Anti-Scraper Techniques**:
  - `robots.txt` (disallow all):
    ```
    User-agent: *
    Disallow: /
    ```
  - `<meta name="robots" content="noindex, nofollow">` in `index.html`
  - Obfuscate contact info:
    - Email as an image or JavaScript snippet
    - Avoid plaintext emails in source
- **Lazy Loading**:
  - Dynamic imports for non-critical components (e.g., `/lain`, glitch effects)
  - `loading="lazy"` for images
- **Console Deterrents**:
  ```javascript
  console.log("👁️ You are not supposed to be here...");

---

## 🐳 Docker Requirements

- Multi-stage Dockerfile:
  - Stage 1: Build React app (`npm run build`)
  - Stage 2: Serve with nginx or `http-server`

Example `Dockerfile`:

```dockerfile
# Stage 1: Build React app
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve static files
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

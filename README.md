# Zoey Vo Portfolio

A minimal, accessible, retro-cybercore portfolio site built with React + Vite, featuring a Serial Experiments Lain-inspired aesthetic.

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CursorTrail.jsx      # Mouse trail effect
│   ├── CustomCursor.jsx     # Custom cursor with animations
│   ├── PageLayout.jsx       # Common layout wrapper
│   └── index.js            # Component exports
├── pages/               # Application pages/routes
│   ├── Bio.jsx             # About/bio page
│   ├── Projects.jsx        # Projects showcase
│   ├── Resume.jsx          # Resume viewer
│   ├── Archive.jsx         # Archive main page
│   ├── Archive*.jsx        # Archive subpages
│   └── index.js           # Page exports
├── hooks/              # Custom React hooks
│   ├── useCursorEnlargeOnClick.js
│   └── index.js
├── utils/              # Utility functions and constants
│   ├── constants.js        # App constants
│   ├── assets.js          # Asset utilities
│   └── index.js
├── styles/             # Global styles
│   └── App.scss           # Main stylesheet
├── assets/             # Static assets (organized)
│   ├── images/            # Images and GIFs
│   ├── audio/             # Sound effects and music
│   ├── fonts/             # Custom fonts
│   └── cursors/           # Cursor files
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🎨 Theme & Aesthetic

- **Lain-core Minimalism**: Dark, terminal-inspired UI
- **Color Palette**: Phosphor green, muted red, grays
- **Typography**: Typewriter/monospace fonts
- **Effects**: Glitch animations, cursor trails, terminal interface

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Asset Organization

Assets are organized in both `public/assets/` (for Vite serving) and `src/assets/` (for organized imports):

- **Images**: PNG, GIF files for UI elements
- **Audio**: MP3 files for sound effects and background music
- **Fonts**: TTF files for custom typography
- **Cursors**: CUR files for custom cursor effects

## 🛠️ Development Guidelines

### Component Structure
- Use functional components with hooks
- Extract reusable logic into custom hooks
- Keep components focused and single-purpose

### Asset Management
- Use the `getAssetUrl()` utility for consistent asset paths
- Reference assets through `ASSET_PATHS` constants
- Preload critical assets for better performance

### Styling
- Use SCSS for styling with organized imports
- Follow the established color palette and typography
- Maintain the retro-cyber aesthetic

## 🔧 Build & Deployment

Built with Vite for fast development and optimized production builds. Supports:
- GitHub Pages deployment
- Docker containerization
- Static hosting services

## License

MIT

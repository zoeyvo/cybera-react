import React, { useEffect } from 'react';
import CursorTrail from './CursorTrail';
import { getAssetUrl } from '../utils/constants';

/**
 * PageLayout is a minimal wrapper for all non-landing pages.
 * - Renders the Navi header, cursor trail, header, children, and footer.
 * - Preloads all major assets (images, fonts, audio, PDF) for instant navigation.
 * - Passes playSwap to children for consistent sound effects.
 * - All layout and sizing is handled by SCSS for consistency.
 */
function PageLayout({ children, playSwap }) {  // Preload all major assets for instant navigation
  useEffect(() => {
    const assets = [
      'assets/navi.png',
      'assets/lain.gif',
      'assets/static.gif',
      'assets/typewriter.ttf',
      'assets/swap.mp3',
      'assets/within.mp3',
      'assets/Zoey-Vo-Resume-2025.png',
      'assets/cursor.cur'
    ];
    
    assets.forEach(asset => {
      const ext = asset.split('.').pop();
      if (["png", "gif", "jpg", "jpeg", "cur"].includes(ext)) {
        const img = new window.Image();
        img.src = getAssetUrl(asset);
      } else if (["mp3", "wav", "ogg"].includes(ext)) {
        const audio = new window.Audio();
        audio.src = getAssetUrl(asset);
      } else if (["ttf", "woff", "woff2", "otf"].includes(ext)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.href = getAssetUrl(asset);
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }, []);
  // Preload Navi image for instant display
  useEffect(() => {
    const naviImg = new window.Image();
    naviImg.src = getAssetUrl('assets/navi.png');
  }, []);

  return (
    <div className="cyberia-root">
      {/* Navi header bar with pixel-art icon */}
      <div className="header-navi">
        <div className="navi-img-wrapper">          <img
            className="navi-img"
            src={getAssetUrl('assets/navi.png')}
            alt="Navi icon"
          />
        </div>
      </div>
      <CursorTrail />
      <header className="header"></header>
      {children}
      <footer className="footer">
        <span>
          <a href="https://github.com/zoeyvo" target="_blank" rel="noopener noreferrer" onClick={playSwap}>github.com/zoeyvo</a>
          {" | "}
          <a href="https://www.linkedin.com/in/zoeyvo" target="_blank" rel="noopener noreferrer" onClick={playSwap}>linkedin.com/in/zoeyvo</a>
          {" | "}
          <span className="footer-email" title="Email (obfuscated)">zoeyvo256<span className="at-symbol">@</span>gmail.com</span>
        </span>
      </footer>
    </div>
  );
}

export default PageLayout;

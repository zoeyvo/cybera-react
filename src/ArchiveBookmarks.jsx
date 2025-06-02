// ArchiveBookmarks.jsx
import React from "react";

function ArchiveBookmarks() {
  const bookmarkCategory = {
    category: "Cyberpunk Aesthetics",
    links: [
      { name: "fauux.neocities.org", url: "https://fauux.neocities.org/", description: "Lain-inspired minimalist web design" },
      { name: "Neocities", url: "https://neocities.org/", description: "Indie web revival movement" },
      { name: "ASCII Art Collection", url: "#", description: "Terminal-friendly art resources" }
    ]
  };

  return (
    <div className="grid-cell cell1">
      <div className="bio-content">
        <span className="bio-title">~/archive/bookmarks</span>
        <span className="gothic-text bio-desc">
          Curated links from the digital underground
        </span>

        <div className="archive-item">
          <div className="bookmark-category">
            <h3 className="category-title">
              <span className="terminal-prompt">&gt;</span>
              {bookmarkCategory.category}
            </h3>            
            <div className="bookmark-links">
              {bookmarkCategory.links.map((link, linkIndex) => (
                <div key={linkIndex} className="bookmark-link">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-name">
                    {link.name}
                  </a>
                  <span className="link-description">{link.description}</span>
                </div>
              ))}
            </div>          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveBookmarks;

// ArchivePhotos.jsx
import React from "react";

function ArchivePhotos() {
  const photoCollection = {
    name: "Terminal Aesthetics",
    description: "Screenshots of beautiful terminal setups and code",
    count: "12 images",
    tags: ["terminal", "code", "aesthetics"]
  };

  return (
    <div className="grid-cell cell1">
      <div className="bio-content">
        <span className="bio-title">~/archive/photos</span>
        <span className="gothic-text bio-desc">
          Visual memories and inspiration collections
        </span>

        <div className="archive-item">
          <div className="collection-header">
            <h3 className="collection-name">{photoCollection.name}</h3>
            <span className="collection-count">{photoCollection.count}</span>
          </div>
          
          <div className="collection-description">
            {photoCollection.description}
          </div>
          
          <div className="collection-tags">
            {photoCollection.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tag">#{tag}</span>
            ))}
          </div>
          
          <div className="collection-placeholder">
            <div className="placeholder-image">
              <span className="cmd">[image_gallery]</span>
            </div>
          </div>        </div>
      </div>
    </div>
  );
}

export default ArchivePhotos;

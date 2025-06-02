// ArchiveMedia.jsx
import React from "react";

function ArchiveMedia() {
  const mediaItems = [
    {
      type: "video",
      src: "https://www.youtube.com/embed/RiwEzF3DsGk",
      caption: "JRJRJR"
    }
    // Add more media items here as needed
  ];

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/media</span>
        <div className="archive-media-list">
          {mediaItems.map((item, idx) => (
            <div className="media-entry" key={idx}>
              {item.type === "video" ? (
                <div className="media-video terminal-glow-border">
                  <iframe
                    width="100%"
                    height="315"
                    src={item.src}
                    title={item.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="media-image terminal-glow-border">
                  <img src={item.src} alt={item.caption} style={{ maxWidth: '100%' }} />
                </div>
              )}
              <div className="media-caption mono">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArchiveMedia;

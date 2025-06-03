// Root.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Root({ playSwap }) {
  const navigate = useNavigate();

  // Ensure font is loaded to reduce browser warnings
  useEffect(() => {
    if (document.fonts && document.fonts.load) {
      document.fonts.load('1rem Typewriter').catch(() => {
        // Font loading failed, fallback will be used
      });
    }
  }, []);

  const rootItems = [
    { name: "bio", description: "About me and my background" },
    { name: "projects", description: "My coding projects and work" },
    { name: "resume", description: "Professional experience and skills" },
    { name: "archive", description: "Collection of various content" }
  ];

  const handleItemClick = (item) => {
    if (playSwap) playSwap();
    navigate(`/${item}`);
  };

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~./</span>
        <div className="archive-grid">
          {rootItems.map((item) => (
            <div 
              key={item.name}
              className="archive-item archive-section-item"
              onClick={() => handleItemClick(item.name)}
              onMouseDown={playSwap}
            >
              <div className="archive-item-header">
                <span className="cmd">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Root;

// Archive.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Archive({ playSwap }) {
  const navigate = useNavigate();

  const archiveItems = [
    { name: "bookmarks", description: "Interesting links and resources" },
    { name: "cardgames", description: "Card games I've learned to play" },
    { name: "recipes", description: "Cooking recipes and experiments" },
    { name: "media", description: "Photo collection and memories" },
    { name: "notes", description: "Random thoughts and observations" }
  ];

  const handleItemClick = (item) => {
    if (playSwap) playSwap();
    navigate(`/archive/${item}`);
  };

  return (
    <div className="grid-cell cell1">
      <div className="bio-content">
        <span className="bio-title">~/archive</span>
        <span className="gothic-text bio-desc">
          Personal collection of knowledge, memories, and discoveries
        </span>
        
        <div className="archive-grid">
          {archiveItems.map((item, index) => (
            <div 
              key={item.name}
              className="archive-item archive-section-item"
              onClick={() => handleItemClick(item.name)}
              onMouseDown={playSwap}
            >
              <div className="archive-item-header">
                <span className="terminal-prompt">&gt;</span>
                <span className="cmd">{item.name}</span>
              </div>
              <div className="archive-item-desc">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Archive;

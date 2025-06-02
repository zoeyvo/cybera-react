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
      <div className="archive-content">
        <span className="archive-title">~/archive</span>

        <div className="archive-grid">
          {archiveItems.map((item, index) => (
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

export default Archive;

// ArchiveBookmarks.jsx
import React from "react";

function ArchiveBookmarks() {
  const bookmarks = [
    "https://learngitbranching.js.org/",
    "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
    "https://huggingface.co/learn/agents-course/unit0/introduction",
    "https://acousticgender.space/",
    "https://mydoctor.kaiserpermanente.org/ncal/structured-content/hormone-therapy-with-estrogen-and-androgen-blockers-1123088"
  ];

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/bookmarks</span>
        <div className="archive-item">
          <div className="bookmark-links">
            {bookmarks.map((url, linkIndex) => (
              <div key={linkIndex} className="bookmark-link">
                <a href={url} target="_blank" rel="noopener noreferrer" className="link-name mono">
                  {url}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveBookmarks;

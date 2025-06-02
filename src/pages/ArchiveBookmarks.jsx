// ArchiveBookmarks.jsx
import React from "react";

function ArchiveBookmarks() {
  const bookmarks = [
    {
      url: "https://learngitbranching.js.org/",
      title: "Learn Git Branching"
    },
    {
      url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
      title: "Algorithm Visualizations"
    },
    {
      url: "https://huggingface.co/learn/agents-course/unit0/introduction",
      title: "Hugging Face Agents Course"
    },
    {
      url: "https://acousticgender.space/",
      title: "Voice Training Tool"
    },
    {
      url: "https://mydoctor.kaiserpermanente.org/ncal/structured-content/hormone-therapy-with-estrogen-and-androgen-blockers-1123088",
      title: "Hormone Therapy Guide"
    }
  ];

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/bookmarks</span>
        <div className="archive-item">
          <div className="bookmark-links">
            {bookmarks.map((bookmark, linkIndex) => (
              <div key={linkIndex} className="bookmark-link">
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="link-name mono">
                  {bookmark.title}
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

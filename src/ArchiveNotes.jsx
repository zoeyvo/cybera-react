// ArchiveNotes.jsx
import React from "react";

function ArchiveNotes() {
  const note = {
    date: "2025.06.01",
    title: "Terminal Philosophy",
    content: "There's something beautiful about the simplicity of a terminal. No distractions, just you and the machine having a conversation through text.",
    tags: ["philosophy", "terminal", "minimalism"]
  };

  return (
    <div className="grid-cell cell1">
      <div className="bio-content">
        <span className="bio-title">~/archive/notes</span>
        <span className="gothic-text bio-desc">
          Random thoughts, observations, and digital musings
        </span>

        <div className="archive-item">
          <div className="note-header">
            <span className="note-date">[{note.date}]</span>
            <h3 className="note-title">{note.title}</h3>
          </div>
          
          <div className="note-content">
            {note.content}
          </div>
            <div className="note-tags">
            {note.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveNotes;

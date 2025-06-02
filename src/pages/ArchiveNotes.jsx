// ArchiveNotes.jsx
import React from "react";

function ArchiveNotes() {
  const note = {
    date: "2025.06.01",
    title: "first note",
    content: "hello <3",
    tags: [],
  };

  return (
    <div className="grid-cell cell1">
      <div className="archive-content">
        <span className="archive-title">~/archive/notes</span>
        <div className="archive-item" style={{ textAlign: 'center' }}>
          <div className="note-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <span className="note-content">{note.content}</span>
            <span className="note-date">[{note.date}]</span>
          </div>
          {/* No tags for this note */}
        </div>
      </div>
    </div>
  );
}

export default ArchiveNotes;

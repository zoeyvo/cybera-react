import React from "react";

/**
 * Resume.jsx
 * Renders the Resume page.
 * - Provides a link to the PDF resume (no in-page render).
 * - Uses .page-cell for layout, always grid row 2.
 * - Accessibility: link has aria-label, keyboard accessible.
 * - No unused code or styles.
 */

const Resume = ({ playSwap }) => (
  <div className="grid-cell cell1" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="resume-content">
      <img
        className="resume-img"
        src={import.meta.env.BASE_URL + 'assets/Zoey-Vo-Resume-2025.png'}
        alt="Resume screenshot"
      />
      <a
        href={import.meta.env.BASE_URL + 'assets/Zoey-Vo-Resume-2025.pdf'}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open PDF resume in new tab"
        onClick={playSwap}
        style={{ marginTop: '1.2em' }}
      >
        Download PDF
      </a>
    </div>
  </div>
);

export default Resume;

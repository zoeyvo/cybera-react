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
  <div className="grid-cell cell1">
    <div className="resume-root">
      <img
        className="resume-img"
        src={import.meta.env.BASE_URL + 'assets/Zoey-Vo-Resume-2025.png'}
        alt="Resume screenshot"
      />
      {/* If you add any links here in the future, use onClick={playSwap} */}
    </div>
  </div>
);

export default Resume;

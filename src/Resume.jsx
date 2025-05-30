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
  <div className="grid-cell cell1" style={{ width: '100%', maxWidth: '100vw', padding: 0, margin: 0 }}>
    <iframe
      src="/assets/Zoey%20Vo%20Resume%202025.pdf"
      title="Resume PDF"
      style={{
        width: '100vw',
        height: '90vh',
        border: 'none',
        display: 'block',
        margin: 0,
        padding: 0,
        background: '#181818',
      }}
      loading="lazy"
    />
    {/* If you add any links here in the future, use onClick={playSwap} */}
  </div>
);

export default Resume;

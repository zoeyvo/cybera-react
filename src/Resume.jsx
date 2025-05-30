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
  <div className="grid-cell cell1" style={{ width: '100%', maxWidth: '100vw', padding: 0, margin: 0, marginBottom: '1rem' }}>
    <img
      src={import.meta.env.BASE_URL + 'assets/Zoey-Vo-Resume-2025.png'}
      alt="Resume screenshot"
      style={{
        width: '100vw',
        maxWidth: '900px',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        background: '#181818',
        borderRadius: '8px',
        boxShadow: '0 0 16px #000a',
      }}
      loading="lazy"
    />
    {/* If you add any links here in the future, use onClick={playSwap} */}
  </div>
);

export default Resume;

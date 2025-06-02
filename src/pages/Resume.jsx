import React from "react";
import { getAssetUrl } from '../utils/constants';

/**
 * Resume.jsx
 * Renders the Resume page.
 * - Provides a link to the PDF resume (no in-page render).
 * - Uses .page-cell for layout, always grid row 2.
 * - Accessibility: link has aria-label, keyboard accessible.
 * - No unused code or styles.
 */

const Resume = ({ playSwap }) => (
  <div className="grid-cell cell1" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>    <div className="resume-content">      <img
        className="resume-img"
        src={getAssetUrl('assets/Zoey-Vo-Resume-2025.png')}
        alt="Resume screenshot - Zoey Vo 2025"
      />
    </div>
  </div>
);

export default Resume;

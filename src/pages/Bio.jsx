import React from "react";

/**
 * Bio.jsx
 * Renders the Bio ("whoami") page.
 * - Shows name and a short description.
 * - Uses .page-cell for layout, which is always grid row 2.
 * - Accessibility: all text is readable, semantic, and keyboard accessible.
 */

const Bio = () => (
  <div className="grid-cell cell1">
    <div className="bio-content">
      <span className="bio-title">zoey vo · 🏳️‍⚧️ · she/her</span>
      <span className="gothic-text bio-desc">
        Developer exploring systems design and scalable web applications to build
        meaningful tools that empower communities and challenge injustice.
        Rooted in the belief that code, like connection, should dismantle
        barriers and amplify voices.
      </span>
    </div>
  </div>
);

export default Bio;

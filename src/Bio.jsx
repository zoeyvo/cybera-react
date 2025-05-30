import React from "react";

/**
 * Bio.jsx
 * Renders the Bio ("whoami") page.
 * - Shows name and a short description.
 * - Uses .page-cell for layout, which is always grid row 2.
 * - Accessibility: all text is readable, semantic, and keyboard accessible.
 * - No unused code or styles.
 */

const Bio = ({ playSwap }) => (
  <div className="grid-cell cell1">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        fontSize: "1.25rem",
        fontFamily: "Typewriter, monospace",
        letterSpacing: "0.04em",
        lineHeight: 1.6,
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "0.5em",
          letterSpacing: "0.08em",
          color: "#fff",
          textShadow: "0 0 6px #B6B8A0",
        }}
      >
        zoey vo · she/they
      </span>
      <span
        className="gothic-text"
        style={{
          fontSize: "1.15rem",
          marginTop: "1.2em",
          lineHeight: 1.5,
          color: "#fff",
          textShadow: "0 0 4px #B6B8A0",
        }}
      >
        Developer exploring systems design and scalable web applications to build
        meaningful tools that empower communities and challenge injustice.
        Rooted in the belief that code, like connection, should dismantle
        barriers and amplify voices.
      </span>
      {/* If you add any links here in the future, use onClick={playSwap} */}
    </div>
  </div>
);

export default Bio;

import React from "react";

const Bio = () => (
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
        color: "#fff",
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
        }}
      >
        Developer weaving systems design and scalable web applications to build
        quiet, resilient tools that empower communities and challenge injustice.
        Rooted in the belief that code, like connection, should dismantle
        barriers and amplify voices.
      </span>
    </div>
  </div>
);

export default Bio;

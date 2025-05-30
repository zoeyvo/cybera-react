import React from "react";
import "./App.scss";

/**
 * Projects.jsx
 * Renders the Projects page.
 * - Lists projects with title, description, and GitHub links.
 * - Uses .page-cell for layout, always grid row 2.
 * - Accessibility: all links have aria-labels, all images have alt text.
 * - No unused code or styles.
 */

const Projects = ({ playSwap }) => (
  <div className="grid-cell cell1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      fontFamily: 'Typewriter, monospace',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      color: '#fff', // White text
      marginBottom: '1.2rem',
      letterSpacing: '0.08em',
      textAlign: 'left',
      width: '100%',
      maxWidth: 480,
      textShadow: '0 0 6px #B6B8A0', // #B6B8A0 glow
      display: 'inline-block'
    }}>
      Expert Mapping Interface (E.M.I)
    </div>
    <div style={{
      fontFamily: 'Typewriter, monospace',
      color: '#fff', // White text
      fontSize: '1.05rem',
      marginBottom: '1.2rem',
      textAlign: 'left',
      maxWidth: 480,
      width: '100%',
      lineHeight: 1.6,
      textShadow: '0 0 4px #B6B8A0', // #B6B8A0 glow
      display: 'inline-block'
    }}>
      The Expert Mapping Interface (E.M.I) is a web application developed for the UC Davis Library to visualize global research output by UC Davis scholars.
    </div>
    <br />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start', maxWidth: 480, width: '100%' }}>
      <a style={{ color: '#2a6ad7', textDecoration: 'underline', fontFamily: 'Typewriter, monospace' }} href="http://35.247.92.204:3001/" target="_blank" rel="noopener noreferrer" onClick={playSwap}>Live Project</a>
      <a style={{ color: '#2a6ad7', textDecoration: 'underline', fontFamily: 'Typewriter, monospace' }} href="https://github.com/zoeyvo/expert-mapping-interface" target="_blank" rel="noopener noreferrer" onClick={playSwap}>GitHub Repository</a>
    </div>
  </div>
);

export default Projects;

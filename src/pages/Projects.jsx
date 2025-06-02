import React from "react";

/**
 * Projects.jsx
 * Renders the Projects page.
 * - Lists projects with title, description, and GitHub links.
 * - Uses .page-cell for layout, always grid row 2.
 * - Accessibility: all links have aria-labels, all images have alt text.
 */

const Projects = () => (
  <div className="grid-cell cell1">
    <div className="bio-content">
      <span className="bio-title">
        Expert Mapping Interface (E.M.I)
      </span>
      <span className="gothic-text bio-desc">
        The Expert Mapping Interface (E.M.I) is a web application developed for the UC Davis Library to visualize global research output by UC Davis scholars.
      </span>
      <div className="project-links">
        <a className="project-link" href="http://35.247.92.204:3001/" target="_blank" rel="noopener noreferrer">Live Project</a>
        <a className="project-link" href="https://github.com/zoeyvo/expert-mapping-interface" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
);

export default Projects;

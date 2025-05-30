import React from "react";
import "./App.scss";

const Projects = () => (
  <div className="xp-window">
    <div className="xp-content">
      <div className="project-info">
        <div className="project-title">Expert Mapping Interface (E.M.I)</div>
        <div className="project-desc">
          The Expert Mapping Interface (E.M.I) is a web application developed for the UC Davis Library to visualize global research output by UC Davis scholars.
        </div>
        <a className="project-link" href="http://35.247.92.204:3001/" target="_blank" rel="noopener noreferrer">Live Project</a>
        <a className="project-link" href="https://github.com/zoeyvo/expert-mapping-interface" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
);

export default Projects;

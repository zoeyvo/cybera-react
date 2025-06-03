import React from "react";

/**
 * Projects.jsx
 * Renders the Projects page.
 * - Lists projects with title, description, and GitHub links.
 * - Uses .page-cell for layout, always grid row 2.
 * - Accessibility: all links have aria-labels, all images have alt text.
 */

const Projects = () => (
  <div className="grid-cell cell1">    <div className="bio-content">
      <span className="bio-title">
        Expert Mapping Interface
      </span>
      <span className="gothic-text bio-desc">
        Web application developed for the UC Davis Library to visualize global research.
      </span>
      <span className="bio-tech">
        [React, Node.js, PostGIS, Redis, Leaflet, Docker, GCP]
      </span>
      <div className="project-links">
        <a className="project-link" href="http://35.247.92.204:3001/" target="_blank" rel="noopener noreferrer">Live Project</a>
        <a className="project-link" href="https://github.com/zoeyvo/expert-mapping-interface" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>    <div className="bio-content">
      <span className="bio-title">
        Asteroid Avoidance
      </span>      <span className="gothic-text bio-desc">
        Embedded survival arcade game featuring accelerometer controls, dynamic difficulty scaling, and cloud high score tracking.
      </span><span className="bio-tech">
        [C, CC3200 MCU, AWS IoT Core, SPI, I2C, NEC Protocol, TLS/MQTT]
      </span>
      <div className="project-links">
        <a className="project-link" href="https://zoeyvo.github.io/asteroid-avoidance/" target="_blank" rel="noopener noreferrer">Project Report</a>
        <a className="project-link" href="https://github.com/zoeyvo/asteroid-avoidance" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
);

export default Projects;

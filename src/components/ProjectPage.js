import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Financial Intelligence Platform</p>
          <p>Mubasher.Info</p>
          <p>
            <span>Web</span>
            <a href="https://www.mubasher.info/countries/sa">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Financial Intelligence Platform</p>
          <p>Mubasher.Info iOS & Android</p>
          <p>
            <span>Mobile</span>
            <a href="https://apps.apple.com/us/app/mubasher-info/id6472443851">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Charitable Healthcare Platform</p>
          <p>Shefa.sa</p>
          <p>
            <span>Web</span>
            <a href="https://shefa.sa/home">
              Tap to view
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

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
          <p>E-commerce Application</p>
          <p>Shopping App</p>
          <p>
            <span>2023</span>
            <a href="https://github.com/Imran-Khalil1/Portfolio/tree/main/Shopping%20App">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Dice game</p>
          <p>Tenzies</p>
          <p>
            <span>2022</span>
            <a href="https://github.com/Imran-Khalil1/Portfolio/tree/main/Tenzies%20Game">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Workspace Management Application</p>
          <p>Cowork</p>
          <p>
            <span>2023</span>
            <a href="https://github.com/Imran-Khalil1/Portfolio/tree/main/Cowork%20Frontend">
              Tap to view
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

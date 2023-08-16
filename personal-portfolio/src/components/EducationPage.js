import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Web Development Intern</p>
          <p>Graana</p>
          <p>
            <span>Aug 2022 - Sept 2022</span>
            <a href="/">
              <LocationOnIcon />
              Islamabad, Pakistan
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelors Degree in Software Engineering</p>
          <p>Bahria University</p>
          <p>
            <span>Aug 2019 - Aug 2023</span>
            <a href="/">
              <LocationOnIcon />
              Islambad, Pakistan
            </a>
          </p>
        </div>
        <div className="education">
          <p>Higher Secondary School Certificate</p>
          <p>Army Public School & College</p>
          <p>
            <span>July 2017 - June 2019</span>
            <a href="/">
              <LocationOnIcon />
              Rawalpindi, Pakistan
            </a>
          </p>
        </div>
        <div className="education">
          <p> Secondary School Certificate</p>
          <p>Army Public School & College</p>
          <p>
            <span>May 2015 - May 2017</span>
            <a href="/">
              <LocationOnIcon />
              Rawalpindi, Pakistan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;

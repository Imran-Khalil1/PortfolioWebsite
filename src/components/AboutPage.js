import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
          A Software Engineer turned Business Analyst with a passion for Agile!
        </div>
        <div className="about-right">
          <p>
            I’m Imran Khalil, a <span>Software Engineer</span> turned{" "}
            <span>Business Analyst</span> with a passion for <span>Agile</span>.
            As a true Agilist, I thrive on driving product success and making a
            meaningful impact. I’m dedicated to motivating teams, fostering
            self-organization, and creating an environment where innovation can
            flourish. In addition to being a Business Analyst, I also take on{" "}
            <span>Delivery Management</span> roles, ensuring projects are
            delivered on time, within scope, and exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

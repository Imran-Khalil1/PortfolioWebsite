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
        A software engineer, a web developer, a tester, and an agile enthusiast!
        </div>
        <div className="about-right">
          <p>
            I'm Imran Khalil. I am a <span>Software Developer</span>. I have
            done my Bachelors Degree in Software Engineering from{" "}
            <span>Bahria University</span>, Islamabad.
          </p>
          <p>
            I specialize in efficient <span>React</span> apps using
            <span> Material UI</span> & <span>Bootstrap</span> that just work across all
            platforms and browsers. I care deeply about building interfaces that
            are usable and pleasant for the most number of people possible.
          </p>
          <p>
            Right now, I’m excited about improving skills on writing good
            <span> test cases</span> and becoming a <span>Agile practitioner</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

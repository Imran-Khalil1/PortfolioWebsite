import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <span>hey,</span>
          <p>
            this is<span> Imran</span>,
          </p>
        </div>
        <span>a Tech savvy Agile Enthusiast .</span>
      </div>
      <div className="home-page-footer">
        <a
          href="https://github.com/Imran-Khalil1/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/imran-khalil7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default HomePage;

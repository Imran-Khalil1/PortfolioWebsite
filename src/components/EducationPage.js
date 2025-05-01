import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      {/* Experience Section */}
      <div className="education-header">
        <span style={{ color: "var(--section-color)" }}>exp</span>erience
      </div>

      <div className="experience-list">
        {/* Azm Development */}
        <div className="experience">
          <p>Business Analyst</p>
          <p>Azm Development</p>
          <p>
            <span>Oct 2024 - Present</span>
            <a href="/">
              <LocationOnIcon />
              Islamabad, Pakistan
            </a>
          </p>
          <ul>
            <li>Being the point of contact between business and development teams.</li>
            <li>Eliciting requirements and translating them into actionable work items in the form of user stories.</li>
            <li>Conducting grooming sessions and estimating user stories with the team.</li>
            <li>Working with PM to better prioritize and plan items. Making tradeoffs when necessary.</li>
            <li>Leading Scrum events and running sprints.</li>
            <li>Documenting business processes & creating workflow diagrams.</li>
            <li>Handling client expectations.</li>
            <li>Managing change requirements proactively to mitigate risk to the running system.</li>
            <li>Resolving team blockers and aligning them constantly towards business goals.</li>
            <li>Conducting data analysis through Metabase to generate metrics.</li>
          </ul>
        </div>

        {/* Global Financial Media */}
        <div className="experience">
          <p>Business Analyst – Product Development</p>
          <p>Global Financial Media Mubasher</p>
          <p>
            <span>Sept 2023 – Sept 2024</span>
            <a href="/">
              <LocationOnIcon />
              Islamabad, Pakistan
            </a>
          </p>
          <ul>
            <li>Acting as the PM & BA lead on multiple projects concurrently.</li>
            <li>Serving as the point of contact between business and development teams.</li>
            <li>Leading Scrum rituals including daily scrum, sprint plannings & retrospectives.</li>
            <li>Managing Jira boards & backlog of two products.</li>
            <li>Efficiently leveraging resources and forecasting completion dates.</li>
            <li>Engaging with and managing stakeholder communications.</li>
            <li>Overseeing release processes of two mobile applications, website & a dashboard.</li>
            <li>Actively gathering requirements, defining workflows, conducting feasibility, usability & viability analysis.</li>
            <li>Converting requirements into actionable items in the form of User stories & Epics.</li>
            <li>Conducting user acceptance tests & handling signoffs.</li>
            <li>Facilitating team members and coaching them on best practices encouraging Agility techniques.</li>
            <li>Defining product roadmaps and prioritizing feature delivery based on business needs.</li>
            <li>Conducting market research to incorporate best practices into business processes.</li>
            <li>Actively conducting impact analysis to better handle change requests.</li>
            <li>Keeping the team aligned towards business goals constantly.</li>
          </ul>
        </div>

        {/* Graana */}
        <div className="experience">
          <p>Web Development Intern</p>
          <p>Graana</p>
          <p>
            <span>Aug 2022 – Sept 2022</span>
            <a href="/">
              <LocationOnIcon />
              Islamabad, Pakistan
            </a>
          </p>
          <ul>
            <li>Creating responsive web designs</li>
            <li>Integrating REST and third-party APIs</li>
            <li>Implementing React Hooks</li>
            <li>Creating reusable Components</li>
            <li>Completed assigned tasks with dedication, gaining hands-on experience and valuable technical skills</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-header">
      <span style={{ color: "var(--section-color)" }}>edu</span>cation      </div>

      <div className="education-list">
        <div className="education">
          <p>Bachelor's Degree in Software Engineering</p>
          <p>Bahria University</p>
          <p>
            <span>Aug 2019 – Aug 2023</span>
            <a href="/">
              <LocationOnIcon />
              Islamabad, Pakistan
            </a>
          </p>
        </div>

        <div className="education">
          <p>Higher Secondary School Certificate</p>
          <p>Army Public School & College</p>
          <p>
            <span>July 2017 – June 2019</span>
            <a href="/">
              <LocationOnIcon />
              Rawalpindi, Pakistan
            </a>
          </p>
        </div>

        <div className="education">
          <p>Secondary School Certificate</p>
          <p>Army Public School & College</p>
          <p>
            <span>May 2015 – May 2017</span>
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

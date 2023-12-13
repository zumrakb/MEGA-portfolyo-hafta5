// ProjectsSection.js
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h1 className="titles">Projects</h1>
      <div className="project-box-container">
        <div className="project-box info-box">
          <h1>Simon Game</h1>
          <p>Test your memory!</p>
          <p>HTML, CSS, JQUERY</p>
          <div className="project-links">
            <a
              href="https://zumrakb.github.io/simon-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link🔗
            </a>
          </div>
          <img src="src\Components\simon.png" alt="imgsimon" />
        </div>
        <div className="project-box info-box">
          <h1>Weather App</h1>
          <p>So easy to access weather info around the world!</p>
          <p>HTML, CSS, REACT.JS</p>
          <div className="project-links">
            <a
              href="https://main--classy-naiad-768b97.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 🔗
            </a>
          </div>
        </div>
        <div className="project-box info-box">
          <h1>TravelBliss</h1>
          <p>For the ones passionate with travelling!</p>
          <p>HTML, CSS, TAILWIND</p>
          <div className="project-links">
            <a
              href="https://zumrakb.github.io/TravelBliss-tailwind/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 🔗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

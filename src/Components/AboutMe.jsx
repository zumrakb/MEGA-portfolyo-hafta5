// AboutMe.js
import React from "react";

const AboutMe = () => {
  const openResume = () => {
    // Replace 'your_resume_url.pdf' with the actual URL of your resume
    window.open(
      "https://www.linkedin.com/in/zumrakb/overlay/1635537123406/single-media-viewer/?profileId=ACoAADgHygcBI31z3RVk4z4GlFN2SmEGqnszNjI",
      "_blank"
    );
  };

  const openGitHub = () => {
    // Replace 'https://github.com/your_username' with your GitHub profile URL
    window.open("https://github.com/zumrakb", "_blank");
  };

  const openLinkedIn = () => {
    // Replace 'https://www.linkedin.com/in/your_username' with your LinkedIn profile URL
    window.open("https://www.linkedin.com/in/zumrakb/", "_blank");
  };
  return (
    <section className="aboutme">
      <h1 className="biggest">Hi, I am Zümra!</h1>
      <h2 className="biggest2">A Front-End Developer</h2>
      <p className="aboutme-text">
        Hello, I am Zumra. I'm a Full-Stack development student with an interest
        in almost everything. This is my 5th week assignment using the React
        component structure within the scope of the React course I attended at
        MEGA Software Academy.
      </p>
      <div className="buttons">
        <button className="resume-button" onClick={openResume}>
          Resume
        </button>
        <button className="github-button" onClick={openGitHub}>
          GitHub Link
        </button>
        <button className="linkedin-button" onClick={openLinkedIn}>
          LinkedIn Link
        </button>
      </div>
    </section>
  );
};

export default AboutMe;

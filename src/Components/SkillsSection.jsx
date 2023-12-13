// SkillsSection.js
import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <section className="skills-section">
      <h1 className="titles">Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

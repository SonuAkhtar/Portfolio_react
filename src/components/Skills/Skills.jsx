import React, { useState } from "react";
import { skillsData } from "../../../appData";
import "./skills.css";

const Skills = () => {
  const [skillsList, setSkillsList] = useState(0);

  return (
    <>
      <section className="skills" id="skills">
        <div className="skills_container">
          <h2 className="section_title">Skills</h2>
          <span className="section_subtitle">My technical level</span>

          <div className="skills_main">
            {skillsData.map((skill, index) => (
              <div key={skill.id} className="skills_content">
                <div className="skills_header">
                  <i className="fas fa-code skills_icon" />
                  <div>
                    <h1 className="skills_title">{skill.title}</h1>
                    <span className="skills_subtitle">{skill.subtitle}</span>
                  </div>
                  <i
                    className={`fas fa-chevron-down skills_arrow ${
                      skillsList === index ? "rotate" : ""
                    }`}
                    onClick={() =>
                      setSkillsList((prev) =>
                        skillsList === index ? (prev = null) : (prev = index)
                      )
                    }
                  />
                </div>
                <div
                  className={`skills_list ${
                    skillsList === index ? "show" : ""
                  }`}
                >
                  {skill.data.map((item) => (
                    <div key={item.id} className="skills_data">
                      <div className="skills_titles">
                        <h3 className="skills_name">{item.name}</h3>
                        <span className="skills_number">{item.number}</span>
                      </div>
                      <div className="skills_bar">
                        <span className="skills_percentage skills_html"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

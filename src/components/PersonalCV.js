import React from "react";
import Experience from "./CV Components/Experience";
import CVHeader from "./CV Components/CVHeader";
import EduInfo from "./CV Components/EduInfo";
import CVFooter from "./CV Components/CVFooter";

const PersonalCV = React.forwardRef(
  ({ infos, exps, onDelete, edus }, cvRef) => {
    return (
      <div ref={cvRef} className="cv-container flex card">
        <div className="name-header flex">
          <CVHeader key={infos.id} infos={infos} />
        </div>
        <div className="cv-body">
          <div className="grid">
            <div className="experience my-1">
              <h2>Experience</h2>
              {exps.map((exp) => (
                <Experience key={exp.id} exp={exp} onDelete={onDelete} />
              ))}
            </div>
            <div className="personal-description">
              <h2>Personal Brief</h2>
              <p>{infos.description}</p>
            </div>
            <div className="education my-1-2">
              <h2>Education</h2>
              {edus.map((edu) => (
                <EduInfo key={edu.id} edu={edu} onDelete={onDelete} />
              ))}
            </div>
          </div>
        </div>
        <div className="name-header flex">
          <CVFooter infos={infos} />
        </div>
      </div>
    );
  }
);

export default PersonalCV;

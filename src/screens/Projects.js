import React from "react";
import Project from "../components/Project";
import projects from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project_section">
      <h2 className="project_section_title py-3">Some Projects I’ve Built</h2>
      {projects.map((proj) => (
        <Project key={proj.id} project={proj} />
      ))}
    </div>
  );
};

export default Projects;

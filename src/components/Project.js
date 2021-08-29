import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="py-3 my-3">
      <Row>
        <Col md={6}>
          <Image
            className="project_image"
            src={"../assets/" + project.image}
            rounded
          />
        </Col>
        <Col md={6} className="py-4">
          <h2 className="project_title">{project.title}</h2>
          <p className="project_description">{project.description}</p>
          <ul className="project_tools">
            {project?.tools?.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <a href={project.github}>
            <i className="fab fa-github fa-lg links"></i>
          </a>
          {project?.demo && (
            <a href={project.demo}>
              <i className="fas fa-link fa-lg links"></i>
            </a>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Project;

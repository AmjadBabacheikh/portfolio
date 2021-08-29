import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Experience.css";
import works from "../data/works";
const Experience = () => {
  const [workObject, setWorkObject] = useState({});
  const filterWork = (id) => {
    let result = works.find((work) => work.id === id);
    return result;
  };
  useEffect(() => {
    setWorkObject(filterWork(1));
  }, [setWorkObject]);
  return (
    <div className="experience_section">
      <h2 className="experience_section_title py-3">Where I’ve Worked</h2>
      <Row>
        <Col md={2} className="company_name">
          {works.map((work) => (
            <li
              key={work.id}
              onClick={() => setWorkObject(filterWork(work.id))}
            >
              <h3>{work.company}</h3>
            </li>
          ))}
        </Col>
        <Col md={8} className="detail">
          <ul>
            <div className="my-2">
              <h3>
                {workObject.title} <span>@ {workObject.company}</span>
              </h3>
              <h4>
                {workObject.start} - {workObject.end}
              </h4>
              {workObject?.tasks?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </div>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
export default Experience;

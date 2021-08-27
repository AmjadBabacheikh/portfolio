import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Experience.css";
const works = [
  {
    id: 1,
    company: "Slokware",
    tasks: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
    start: "Juillet 2021",
    end: "Present",
  },
  {
    id: 2,
    company: "Grafimage",
    tasks: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
    start: "Mars 2021",
    end: "Juin 2021",
  },
  {
    id: 3,
    company: "Big4Com",
    tasks: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
    start: "Juillet 2021",
    end: "Aout 2021",
  },
];
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
                Full stack java developer <span>@ {workObject.company}</span>
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
/*onClick={setWorkObject(filterWork(work.id))}*/
export default Experience;

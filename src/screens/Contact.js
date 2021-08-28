import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_section">
      <h2 className="contact_section_title py-2">Get In Touch</h2>
      <p className="contact_section_paragraphe py-2">
        My inbox is always open,whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <a href="https://github.com/AmjadBabacheikh">
        <i className="fab fa-github fa-lg contact_links"></i>
      </a>
      <a href="https://www.instagram.com/a7_coding/">
        <i className="fab fa-instagram fa-lg contact_links"></i>
      </a>
      <a href="https://www.linkedin.com/in/amjad-babacheikh-9a3473176/">
        <i className="fab fa-linkedin-in fa-lg contact_links"></i>
      </a>
    </div>
  );
};

export default Contact;

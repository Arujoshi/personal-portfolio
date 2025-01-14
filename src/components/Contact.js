import React from "react";
import "./Contact.css";
import Background from "./Background"; // Make sure this is the correct path
import { FaEnvelope, FaLinkedin, FaDownload } from "react-icons/fa"; // Importing the relevant icons from react-icons

const Contact = () => {
  return (
    <div className="contact-page">
      <Background />
      <div className="contact-content">
        <h1>Contact Me</h1>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope size={30} />
            <span>Email: aradhanajoshi498@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaLinkedin size={30} />
            <span>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/joshiaradhana"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aradhana Joshi
              </a>
            </span>
          </div>
          <div>
            <a
              style={{color:"whitesmoke"}}
              href={`${process.env.PUBLIC_URL}/files/AradhanaResume.pdf`}
              download="AradhanaResume.pdf"
              className="download-resume"
            >
              Download My Resume &nbsp;
              <FaDownload size={30} style={{ marginRight: "10px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

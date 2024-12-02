import React from "react";
import "./Contact.css";
import Background from "./Background"; // Make sure this is the correct path
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa"; // Importing the relevant icons from react-icons

const Contact = () => {
  return (
    <div className="contact-page">
      <Background />
      <div className="contact-content">
        <h1>Contact Me</h1>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope size={30} />
            <span>Email: joshiaradhana76@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt size={30} />
            <span>Phone: +1234567890</span>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from "react";
import "./About.css"; 
import TechStackCarousel from "./TechStackCarousel";
import Background from "./Background"; 

const About = () => {
  return (
    <div className="about-page">
      <Background />
      <div className="about-container">
        {/* Avatar and Introduction Section */}
        <div className="about-header">
          <div className="avatar-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/avatar.png`}
              alt="My Avatar"
              className="avatar-image"
            />
          </div>

          {/* Introduction */}
          <section className="about-intro">
            <h1>About Me</h1>
            <p>
              I am a passionate and dedicated full-stack developer with over 
              2 years of professional experience in building scalable web applications and innovative solutions. 
              My expertise lies in Java, Spring Boot, and React.js, 
              which I use to create seamless user experiences and efficient backend systems. 
              I thrive on solving complex problems and enjoy diving into the intricacies of 
              cloud-based deployments and RESTful APIs.
            </p>
            <p>
              Beyond coding, I’m an avid learner who believes in the power of collaboration and continuous improvement. 
              In my free time, I explore creative outlets like photography and music, 
              and I enjoy tinkering with tech puzzles. 
              My goal is to merge technical excellence with creativity to craft solutions that make a meaningful impact in the tech world.
            </p>
          </section>
        </div>

        {/* Tech Stack Carousel */}
        <TechStackCarousel /> 
      </div>
    </div>
  );
};
export default About;

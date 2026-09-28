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
            <p className="about-lead">
              I build fast, reliable web applications for businesses and teams,
              and I turn messy problems into simple, well-built solutions.
            </p>

            <p>
              With 4+ years of experience in{" "}
              <strong>
                Java, Spring Boot, React.js, JavaScript, HTML and CSS
              </strong>
              , I take projects from database design and REST APIs to polished
              interfaces and cloud deployment. Whether I'm working inside a team
              or owning a project end to end, I focus on clean code, clear
              communication, and delivering what I promised.
            </p>

            <div className="about-values">
              <div>
                <h3>Ownership</h3>
                <p>
                  I take responsibility for the outcome, not just my part of the
                  task.
                </p>
              </div>
              <div>
                <h3>Communication</h3>
                <p>
                  Clear updates, honest timelines, and no jargon when it isn't
                  needed.
                </p>
              </div>
              <div>
                <h3>Quality</h3>
                <p>
                  Maintainable, scalable code that's easy for others to build
                  on.
                </p>
              </div>
            </div>

            <p>
              Beyond coding, I’m an avid learner who believes in the power of
              collaboration and continuous improvement. In my free time, I
              explore creative outlets like photography and music, and I enjoy
              tinkering with tech puzzles. My goal is to merge technical
              excellence with creativity to craft solutions that make a
              meaningful impact in the tech world.
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

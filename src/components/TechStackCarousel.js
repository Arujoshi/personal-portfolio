import React from "react";
import Slider from "react-slick";

import './TechStackCarousel.css';  // Import the CSS for animation

const techStack = [
    { src: "/images/java.png", alt: "Java", name:"Java" },
    { src: "/images/library.png", alt: "React.js", name:"React.js" },
    { src: "/images/springboot.png", alt: "Spring Boot", name:"Spring Boot" },
    { src: "/images/mysql.png", alt: "MySQL", name:"MySQL" },
    { src: "/images/github.png", alt: "GitHub", name:"Git Hub" },
];

const TechStackCarousel = () => {
    
    return (
        <div className="tech-carousel-container">
        <h2 className="carousel-heading">Tech Stack</h2>
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {techStack.map((tech, index) => (
              <div key={index} className="carousel-item">
                <img src={tech.src} alt={tech.alt} className="tech-icon" />
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
    
export default TechStackCarousel;
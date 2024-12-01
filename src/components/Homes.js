import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Background from "./Background";
import Navbar from "./Navbar";
import "./Homes.css"; // Ensure CSS for styling

const Homes = () => {

  const facts = [
    "I love solving puzzles!",
    "I’m a passionate full-stack developer.",
    "Nature, beaches, and parks inspire me.",
    "I’m learning Korean in my free time.",
    "I turn coffee into code. Debugging is my cardio.",
    "I'm not a magician, but I can make bugs disappear with just a few lines of code.",
    "Passionate about creating software that makes people’s lives easier and more efficient.",
    "From a curious beginner to a full-stack developer, I’ve learned to turn ideas into reality.",
    "I once thought a ‘bug’ was a bug. Now, it’s just a challenge waiting to be fixed.",
    "Tech is my toolbox. I’m the problem solver, and code is my solution",
    "I look at a problem, break it down, and rebuild it with technology.",
  ];

  const [currentFact, setCurrentFact] = useState("");
  const [greeting, setGreeting] = useState("");

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good Morning! Let’s code and make today awesome!";
    } else if (hours < 16) {
        return "Good Afternoon! Keep the momentum going!";
    } else if(hours<20) {
        return "Good Evening! Time to unwind and reflect!";
    }else{
        return "Late Night Coding? Let’s conquer the world with code!";
    }
};

useEffect(() => {
    setGreeting(getGreeting());
}, []); // Empty dependency array ensures this runs only once when the component is mounted

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setCurrentFact(facts[randomIndex]);
  };

  return (

  <div className="home-page" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
    <Navbar />
            <Background />
            <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          zIndex: 1,
        }}
      >

        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        {greeting}
        </h1>
        <ReactTyped
          strings={[
            "Hi, I'm Aradhana!",
            "A Passionate Full Stack Developer.",
            "A Creative Problem Solver.",
            "Let's Build Something Amazing Together!",
          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
        />

        <div style={{ marginTop: "2rem" }}>
        <motion.button
        className="whoami"
        whileHover={{ scale: 1.3 }}
            onClick={getRandomFact}
            style={{
                background: "linear-gradient(90deg, #3498db, #81c784)",
                color: "white",
                border: "none",
                marginTop:"12px",
                padding: "12px 24px",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Who Am I?
          </motion.button>
          
          {currentFact && (
            <p
              style={{
                marginTop: "1rem",
                fontSize: "1.5rem",
                fontFamily: "'Merienda', sans-serif",
                fontWeight: "bold",
                color: "#987887",
                animation: "fadeIn 0.5s",
              }}
            >
              {currentFact}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homes;

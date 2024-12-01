import React from "react";
import Navbar from "./Navbar";
import Background from "./Background";
import Homes from "./Homes";
import About from "./About";
import Contact from "./Contact";

const Layout = () => {
  return (
    <div className="layout">
      <Background />
      <Navbar />
      <div className="pages-container">
        <section className="page" id="home">
          <Homes />
        </section>
        <section className="page" id="about">
          <About />
        </section>
        <section className="page" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Layout;

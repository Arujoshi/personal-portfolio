import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaStar } from "react-icons/fa";
import "./Projects.css";

/* ============================================================
   YOUR PROJECTS LIVE HERE — replace the dummy data below.
   For each project:
     github : paste your GitHub repo link
     demo   : paste your live website link (optional)
     video  : paste a video URL (mp4 / webm) OR put the file in
              public/videos/ and use `${process.env.PUBLIC_URL}/videos/demo.mp4`
              While `video` is empty, a stylish placeholder is shown.
   ============================================================ */
const projects = [
  {
    id: 1,
    title: "ShopSphere",
    tagline: "Full-stack e-commerce platform [Demo Project]",
    description:
      "A scalable shopping platform with product search, cart, secure checkout and an admin dashboard for inventory management.",
    tech: ["Spring Boot", "React", "MySQL"],
    category: "Full Stack",
    accent: "#f39c12",
    url: "",
    monogram: "SS",
    featured: true,
    github: "https://github.com/Arujoshi/ecommerce", // TODO: add your GitHub link
    demo: "", // TODO: add your live site link
    video: "https://drive.google.com/file/d/1pmN-gu0WdZKgTShwBlEU8CaN0amDERht/view?usp=sharing", // TODO: add your website demo video
  },
  {
    id: 2,
    title: "Saffron Table",
    tagline: "Full-stack web app for Restaurants [Demo Project]",
    description:
      "A full-stack restaurant platform where guests browse the menu, place online orders and book tables in seconds, with an admin panel to manage dishes, orders and reservations.",
    tech: ["React", "Spring Boot", "MySQL"],
    category: "Full Stack",
    accent: "#4c9aff",
    url: "",
    monogram: "TF",
    github: "https://github.com/Arujoshi/Saffron-table",
    demo: "",
    video: "https://drive.google.com/file/d/1YX-edg4sEPmbwTshvTzpc95J__tYUQbG/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Zenflow Yoga",
    tagline: "Static yoga studio website [Demo Project]",
    description:
      "A calm, fully responsive landing page for a yoga studio featuring class schedules, instructor profiles and a pricing section. Built to showcase clean layout, smooth animations and pixel-precise front-end work.",
    tech: ["HTML","CSS","JavaScript"],
    category: "Frontend",
    accent: "#81c784",
    url: "https://arujoshi.github.io/yoga-website/",
    monogram: "DC",
    github: "https://github.com/Arujoshi/yoga-website",
    demo: "https://arujoshi.github.io/yoga-website/",
    video: "",
  },
  {
    id: 4,
    title: "Nicee Burger",
    tagline: "Website for a local burger shop [Demo Project]",
    description:
      "A bold, mouth-watering website for a burger shop with a visual menu, combo offers, location details and a one-tap call-to-order button, designed to turn hungry visitors into customers.",
    tech: ["HTML","CSS","JavaScript"],
    category: "Frontend",
    accent: "#e57cd8",
    url: "https://arujoshi.github.io/burger/",
    monogram: "BW",
    github: "https://github.com/Arujoshi/burger",
    demo: "https://arujoshi.github.io/burger/",
    video: "",
  },
  {
    id: 5,
    title: "Zevar",
    tagline: "Elegant jewellery brand website [Demo Project]",
    description:
      "A refined, icon-led website for a jewellery brand with collection galleries, product detail views and an enquiry form. Designed with a premium look and smooth transitions to reflect the brand's luxury feel.",
    tech: ["HTML","CSS","JavaScript"],
    category: "Frontend",
    accent: "#ff5733",
    url: "https://arujoshi.github.io/zevar/",
    monogram: "UZ",
    github: "https://github.com/Arujoshi/zevar",
    demo: "https://arujoshi.github.io/zevar/",
    video: "",
  },
  {
    id: 6,
    title: "Aldridge & Throne",
    tagline: "Website for a local tailoring business [Demo Project]",
    description:
      "A simple, trustworthy website that helps a local tailor showcase their work, list services and prices, and let customers request appointments or alterations directly from their phone.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    accent: "#4dd0e1",
    url: "https://arujoshi.github.io/aldridge-thorne-landing/",
    monogram: "RR",
    github: "https://github.com/Arujoshi/aldridge-thorne-landing",
    demo: "https://arujoshi.github.io/aldridge-thorne-landing/",
    video: "",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

/* ---- one project tile, framed as a mini browser window ---- */
const ProjectCard = ({ project }) => {
  const style = { "--accent": project.accent };

  return (
    <motion.article
      layout
      className={`project-card ${project.featured ? "featured" : ""}`}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      {project.featured && (
        <span className="featured-badge">
          <FaStar /> Featured
        </span>
      )}

      {/* Browser-window media area — your demo video plays here */}
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="browser-url">https://{project.url}</span>
        </div>

        <div className="browser-screen">
          {project.video ? (
            <video src={project.video} controls playsInline preload="metadata" />
          ) : (
            <div className="video-placeholder">
              <span className="monogram">{project.monogram}</span>
              <span className="play-hint">
                <FaPlay /> demo video coming soon
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="card-body">
        <p className="card-tagline">{project.tagline}</p>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>

        <ul className="tech-tags">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="card-links">
          <a
            className="card-btn"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Code
          </a>
          {project.demo ? (
            <a
              className="card-btn ghost"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live site
            </a>
          ) : (
            <span className="card-btn ghost disabled" title="Live link coming soon">
              <FaExternalLinkAlt /> Live site
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <p className="projects-eyebrow">&#47;&#47; what I've built</p>
          <h1 className="projects-heading">Projects</h1>
          <p className="projects-sub">
            A selection of things I have designed and built - from
            full-stack platforms to focused backend services.
          </p>
        </header>

        {/* category filter chips */}
        <div className="filter-bar" role="tablist" aria-label="Filter projects">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`filter-chip ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {active === cat && (
                <motion.span
                  layoutId="chip-pill"
                  className="chip-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="chip-label">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

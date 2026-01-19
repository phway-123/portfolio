import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import "./App.css";

import {
  SiPhp,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiSap,
} from "react-icons/si";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Delivery Order Automation",
      desc: "Automated DO processing system using PHP, OCR, and barcode extraction.",
      link: "https://github.com/yourusername/delivery-automation",
    },
    {
      title: "Driver Payroll System",
      desc: "Built payroll module with SAP integration and MySQL reporting.",
      link: "https://github.com/yourusername/driver-payroll",
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio website built with React & TypeScript.",
      link: "https://github.com/yourusername/portfolio",
    },
  ];

  const skills = [
    { name: "PHP", icon: <SiPhp />, level: "Advanced" },
    { name: "React", icon: <SiReact />, level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate" },
    { name: "Node.js", icon: <SiNodedotjs />, level: "Intermediate" },
    { name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
    { name: "SAP", icon: <SiSap />, level: "Beginner" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="App">
      <header className="navbar">
<div className="logo">
  <div className="logo-circle">P</div>
  <div className="logo-text">Phway Phway</div>
</div>

        <div className={`nav-links ${navOpen ? "open" : ""}`}>
          {sections.map((sec) => (
            <a
              key={sec.id}
              className={activeSection === sec.id ? "active" : ""}
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </a>
          ))}

<button
  className={`dark-toggle ${darkMode ? "dark" : "light"}`}
  onClick={() => setDarkMode(!darkMode)}
>
  <span className="toggle-icon">
    {darkMode ? <FiMoon /> : <FiSun />}
  </span>
  <span className="toggle-text">
    {darkMode ? "Dark Mode" : "Light Mode"}
  </span>
</button>
        </div>

        <div className="burger" onClick={() => setNavOpen(!navOpen)}>
          <span />
          <span />
          <span />
        </div>
      </header>

      <main>
        <section id="home" className="section home">
          <div className="hero">
            <div className="hero-text">
              <h1>Hello, I’m [Your Name]</h1>
              <p>Web Developer | PHP | React | Node.js | SAP Integrationgggggggggggggggggggggggggggggggggggggggggggggg</p>
           <a className="cta" href="/PhwayPhway_CV.pdf" download>
  <FaDownload className="cta-icon" />
  Download CV
</a>
            </div>

            <div className="hero-img">
              <img src="../images/portfolio_tester.png" alt="Your Name" />
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <h2>About Me</h2>
          <p>
            I build scalable web applications using PHP, React, and modern
            technologies. I have experience integrating SAP systems and
            automating business processes.
          </p>
        </section>

        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-name">{s.name}</div>
                <div className="skill-level">{s.level}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <h2>Experience</h2>
          <div className="exp-card">
            <h3>Intern / Web Developer</h3>
            <p>Company Name • 2024</p>
            <ul>
              <li>Built automation scripts for DO processing using PHP.</li>
              <li>Integrated SAP systems for driver payroll and reporting.</li>
              <li>Improved system performance and reduced manual work.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <a
                key={p.title}
                className="project-card"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span>View on GitHub →</span>
              </a>
            ))}
          </div>
        </section>

<section id="contact" className="section contact">
  <h2>Contact</h2>

  <div className="contact-icons">
<a
  className="contact-icon"
  href="mailto:yourname@example.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
>
  <MdEmail />
</a>


    <a
      className="contact-icon"
      href="https://www.linkedin.com/in/yourname"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <SiLinkedin />
    </a>

    <a
      className="contact-icon"
      href="https://github.com/phway-123"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <SiGithub />
    </a>

    <a
      className="contact-icon"
      href="https://wa.me/6512345678"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <SiWhatsapp />
    </a>
  </div>
</section>

      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

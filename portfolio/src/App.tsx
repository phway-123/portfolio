import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import profilePic from "./assets/phwayphway_pic.jpg";

import "./App.css";

import {
  SiPhp,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiJquery,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiApachespark,
  SiHackerrank,
  SiOpenjdk,
  SiVsco,
  SiGithub,
  SiPostgresql,
  SiMetabase,
  SiLinux,
  SiTypescript
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
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Project 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://github.com/yourusername/delivery-automation",
    },
    {
      title: "Project 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://github.com/yourusername/driver-payroll",
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio website built with React & TypeScript.",
      link: "https://github.com/yourusername/portfolio",
    },
  ];

const skills = [
  {
    category: "Languages",
    items: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> }, // added TypeScript
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "HTML5 & CSS3", icon: <SiHtml5 /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },
{
  category: "Databases",
  items: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MSSQL", icon: <SiMetabase  /> },
  ],
},
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <SiVsco /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Linux", icon: <SiLinux /> }, // added Linux
    ],
  },
  {
    category: "Other Skills / Concepts",
    items: [
      { name: "RESTful API development", icon: <SiApachespark /> },
      { name: "Responsive Web Design", icon: <SiCss3 /> },
      { name: "Debugging & Testing", icon: <SiVsco /> },
      { name: "Problem-solving & Collaboration", icon: <SiHackerrank /> },
    ],
  },
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
            <div className="hero-container">
          <div className="hero">
            <div className="hero-img">
              <img src={profilePic} alt="Phway Phway" />
            </div>
            <div className="hero-text">
              <h1>Hello, I'm Phway Phway.</h1>
              <p>
                I am a passionate <strong>full-stack developer</strong> and <strong>a Diploma graduate in Information Technology from Singapore Polytechnic</strong>, 
                with hands-on experience in Java, SQL, PHP, HTML, CSS, and JavaScript. I enjoy building efficient, user-friendly applications and 
                web solutions that solve real-world problems. During my studies and internship, I collaborated on various software and web development projects,
                 tackling challenges with creative solutions and staying up-to-date with emerging technologies. 
                 These experiences strengthened my full-stack development skills and reinforced my ability to design, implement, and
                 optimize digital solutions. I am eager to contribute to innovative projects, expand my expertise, and work with teams 
                 that value creativity and technological growth.</p>
<a className="cta" href="./PhwayPhway_CV.pdf" download="PhwayPhway_CV.pdf">
  <FaDownload className="cta-icon" />
  Download CV
</a>
            </div>       
          </div>
          </div>
        </section>

<section id="skills" className="section skills">
  <h2>Skills</h2>
  <div className="skills-grid">
    {skills.map((category) => (
      <div className="skill-category" key={category.category}>
        <h3 className="category-title">{category.category}</h3>
        <div className="category-items">
          {category.items.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
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
      <li>Assisted in system development and enhancements, contributing to more efficient workflows.</li>
      <li>Supported data monitoring and system integration processes to ensure accurate reporting.</li>
      <li>Developed reports and dashboards to provide actionable business insights for internal teams.</li>
      <li>Delivered Level 1 helpdesk support, troubleshooting and resolving technical issues for users.</li>
      <li>Applied SQL and database knowledge to extract, analyze, and manage data effectively.</li>
      <li>Used PHP, Microsoft Excel, and other tools to support development and reporting tasks.</li>
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
        <p>Copyright © {new Date().getFullYear()} Phway Phway. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

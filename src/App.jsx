import { useEffect, useState } from "react";
import "./App.css";
import DotMatrix from "./DotMatrix.jsx";
import Navbar from "./Navbar.jsx";
import HeroOrbit from "./HeroOrbit.jsx";
import ProjectPage from "./ProjectPage.jsx";
import projects from "./data/projects.js";
import SkillsSection from "./SkillsSection.jsx";

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Individual project page
    if (hash.startsWith("#/projects/")) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    if (hash.startsWith("#")) {
      const targetId = hash.slice(1);

      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }

  }, [hash]);

  const projectRoute = hash.match(/^#\/projects\/(.+)$/);

  if (projectRoute) {
    const projectId = projectRoute[1];

    const selectedProject = projects.find(
      (project) => project.id === projectId
    );

    return (
      <>
        <DotMatrix />

        <div className="portfolio">
          <ProjectPage project={selectedProject} />
        </div>
      </>
    );
  }


  return (
  <>
      <DotMatrix />  
    
      <div className="portfolio">
        <Navbar />

        <main>
          <section id="home" className="hero">
            <div className="hero-topline">
              <span>PORTFOLIO / 2026</span>
              <span className="hero-location">DUBAI, UAE</span>
            </div>

            <div className="hero-layout">
              <div className="hero-content">
                <p className="eyebrow">ELIAS PAUL</p>

                <h1 className="hero-title">
                  <span className="hero-line hero-line-white">FROM DATA</span>
                  <span className="hero-line hero-line-muted">TO DECISIONS.</span>
                  <span className="hero-line hero-line-white">TO PRODUCTS.</span>
                </h1>

                <p className="hero-description">
                  Information Technology graduate focused on data, analytics,
                  artificial intelligence, and software development.
                </p>

                <div className="hero-buttons">
                  <a href="#projects" className="button primary">
                    View Projects
                  </a>
                </div>

                <div
                  className="hero-credential"
                  aria-label="UAE Golden Visa, Outstanding Student"
                >
                  <div className="hero-credential-icon">
                    ✦
                  </div>

                  <div className="hero-credential-copy">
                    <span>UAE GOLDEN VISA</span>
                    <strong>Outstanding Student</strong>
                  </div>
                </div>
              </div>

              <div className="hero-visual">
                <HeroOrbit /> 
                <div className="availability-card">
                  <span className="status-dot"></span>

                  <div>
                    <p>Currently</p>
                    <strong>Open to opportunities</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-bottom">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-arrow">↓</span>
            </div>
          </section>

          <section id="about" className="section about-section">
            <p className="section-number">01</p>

            <div className="about-grid">
              <div className="about-heading">
                <h2>About Me</h2>
              </div>

              <div className="about-copy">
                <p className="about-lead">
                  I’m Elias, an Information Technology graduate who enjoys turning
                  data, ideas, and code into useful digital products.
                </p>

                <p>
                  I graduated with First Class Honours and a 4.0 GPA, with a strong
                  academic focus on data analytics, software development, machine
                  learning, and intelligent systems.
                </p>

                <p>
                  Through my university projects, I’ve worked across machine learning,
                  data visualization, full-stack development, and web applications,
                  giving me experience on both the analytical and product side of
                  technology.
                </p>

                <p>
                  I’m especially interested in solving practical problems with data and
                  building systems that are clear, useful, and genuinely functional.
                </p>

                <div className="about-meta">
                  <div>
                    <span>FOCUS</span>
                    <strong>Data • Analytics • AI • Software</strong>
                  </div>

                  <div>
                    <span>BASED IN</span>
                    <strong>Dubai, UAE</strong>
                  </div>

                  <div>
                    <span>DEGREE</span>
                    <strong>BSc Information Technology</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="section education-section">
            <p className="section-number">02</p>

            <div className="education-grid">
              <div className="education-heading">
                <h2>
                  Middlesex
                  <span>University Dubai.</span>
                </h2>
              </div>

              <div className="education-content">
                <div className="education-main">
                  <div>
                    <p className="education-degree">
                      BSc (Hons) Information Technology
                    </p>

                    <p className="education-date">
                      SEP 2022 - APR 2025
                    </p>
                  </div>

                  <div className="education-result">
                    <span>RESULT</span>
                    <strong>FIRST CLASS HONOURS</strong>
                  </div>
                </div>

                <p className="education-description">
                  Graduated with First Class Honours and a 4.0 GPA, with
                  academic work spanning data analytics, machine learning,
                  business intelligence, software development, and web
                  applications.
                </p>

                <div className="education-focus">
                  <span>ACADEMIC FOCUS</span>

                  <div className="education-tags">
                    <span>Data Analytics</span>
                    <span>Machine Learning</span>
                    <span>Business Intelligence</span>
                    <span>Software Development</span>
                    <span>Web Development</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="section experience-section">
            <p className="section-number">03</p>

            <div className="experience-header">
              <div className="experience-heading-block">
                <h2>Professional Experience</h2>
                <p className="experience-heading-note">
                  Experience across operations, analytics, software, and machine learning.
                </p>
              </div>

              <div className="experience-header-actions">
                <p>
                  A hands-on path across operations, data, software,
                  machine learning, and process improvement.
                </p>

                <a
                  href={`${import.meta.env.BASE_URL}Elias-Paul-CV.pdf`}
                  className="cv-download-button"
                  download="Elias-Paul-CV.pdf"
                >
                  <span>Download CV</span>
                  <span className="cv-download-icon">↓</span>
                </a>
              </div>

            </div>

            <div className="experience-list">
              <article
                id="experience-kfc"
                className="experience-item experience-item-latest"
              >
                <div className="experience-marker">
                  <span className="experience-dot"></span>
                </div>

                <div className="experience-card">
                  <div className="experience-card-top">
                    <div>
                      <p className="experience-role">Operations Intern</p>
                      <h3>KFC / YUM! Brands</h3>
                      <span className="experience-latest-badge">MOST RECENT</span>
                    </div>

                    <div className="experience-meta">
                      <span>SEP 2025 - JAN 2026</span>
                      <span>DUBAI, UAE</span>
                    </div>
                  </div>

                  <p className="experience-summary">
                    Worked across operational analytics, reporting, dashboard
                    maintenance, survey data, and testing for business systems.
                  </p>

                  <div className="experience-points">
                    <div>
                      <span>01</span>
                      <p>
                        Verified sales and transaction data using XLOOKUP and
                        data-integrity checks.
                      </p>
                    </div>

                    <div>
                      <span>02</span>
                      <p>
                        Created and analysed Pivot Tables and worked with OLAP
                        cubes for multidimensional reporting.
                      </p>
                    </div>

                    <div>
                      <span>03</span>
                      <p>
                        Analysed customer and employee satisfaction survey data
                        in Qualtrics using correlation analysis and validation.
                      </p>
                    </div>

                    <div>
                      <span>04</span>
                      <p>
                        Maintained interactive Power BI dashboards and performed
                        training-data testing for Control Tower systems and
                        KFC Listens.
                      </p>
                    </div>
                  </div>

                  <div className="experience-tags">
                    <span>Excel</span>
                    <span>Power BI</span>
                    <span>OLAP</span>
                    <span>Qualtrics</span>
                    <span>Data QA</span>
                  </div>
                </div>
              </article>

              <article
                id="experience-shunya-ekai"
                className="experience-item"
              >
                <div className="experience-marker">
                  <span className="experience-dot"></span>
                </div>

                <div className="experience-card">
                  <div className="experience-card-top">
                    <div>
                      <p className="experience-role">Computer Science Intern</p>
                      <h3>Shunya Ekai Technologies</h3>
                      <span className="experience-client">
                        Client: MedHub Global
                      </span>
                    </div>

                    <div className="experience-meta">
                      <span>JUN 2025 - AUG 2025</span>
                      <span>DUBAI PRODUCTION CITY</span>
                    </div>
                  </div>

                  <p className="experience-summary">
                    Built technical solutions spanning mapping, frontend
                    development, logistics analytics, and machine learning.
                  </p>

                  <div className="experience-points">
                    <div>
                      <span>01</span>
                      <p>
                        Developed an electric-vehicle route mapping system using
                        JavaScript, React, and the Google Maps API.
                      </p>
                    </div>

                    <div>
                      <span>02</span>
                      <p>
                        Integrated charging-station availability and
                        location-based services into the mapped journey.
                      </p>
                    </div>

                    <div>
                      <span>03</span>
                      <p>
                        Built and refined a logistics machine-learning model
                        that classified allowable transport modes as air, sea,
                        or road.
                      </p>
                    </div>

                    <div>
                      <span>04</span>
                      <p>
                        Added exclusion reasoning plus predicted transit-time
                        and freight-cost ranges to support shipment planning.
                      </p>
                    </div>
                  </div>

                  <div className="experience-tags">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Google Maps API</span>
                    <span>Machine Learning</span>
                    <span>Logistics</span>
                  </div>
                </div>
              </article>

              <article
                id="experience-intertec"
                className="experience-item"
              >
                <div className="experience-marker">
                  <span className="experience-dot"></span>
                </div>

                <div className="experience-card">
                  <div className="experience-card-top">
                    <div>
                      <p className="experience-role">IT Intern</p>
                      <h3>Intertec Systems</h3>
                    </div>

                    <div className="experience-meta">
                      <span>JUN 2023 - AUG 2023</span>
                      <span>DUBAI, UAE</span>
                    </div>
                  </div>

                  <p className="experience-summary">
                    Supported process analysis and improvement work by
                    translating business needs into structured workflows.
                  </p>

                  <div className="experience-points">
                    <div>
                      <span>01</span>
                      <p>
                        Created BPMN-aligned workflow diagrams and field
                        validation documents to streamline operations.
                      </p>
                    </div>

                    <div>
                      <span>02</span>
                      <p>
                        Collaborated with stakeholders to gather and validate
                        business requirements for insurance processes.
                      </p>
                    </div>

                    <div>
                      <span>03</span>
                      <p>
                        Identified automation opportunities and refined workflow
                        steps based on business requirements.
                      </p>
                    </div>
                  </div>

                  <div className="experience-tags">
                    <span>BPMN</span>
                    <span>Requirements Gathering</span>
                    <span>Process Improvement</span>
                    <span>Automation</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="projects" className="section projects-section">
            <p className="section-number">04</p>

            <div className="projects-header">
              <h2>Selected Projects</h2>

              <p>
                A collection of university projects across machine learning,
                data analytics, business intelligence, and full-stack development.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </section>

          <SkillsSection />

          <section id="contact" className="section contact-section">
            <p className="section-number">06</p>

            <div className="contact-header">
              <div className="contact-title-wrap">
                <p className="contact-eyebrow"></p>

                <h2>
                  LET'S
                  <span>CONNECT</span>
                </h2>
              </div>

              <div className="contact-intro">
                <p>
                  Have a role, project, or problem worth solving?
                </p>

                <p>
                  I'm open to opportunities across data, analytics,
                  AI, and technology.
                </p>
              </div>
            </div>

            <div className="contact-grid">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=eliaspaul.k2004@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-card-index">01</div>

                <div className="contact-card-content">
                  <span>EMAIL</span>
                  <strong>eliaspaul.k2004@gmail.com</strong>
                </div>

                <div className="contact-card-arrow">↗</div>
              </a>

              <a
                href="https://www.linkedin.com/in/elias-paul-b7b498269"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-card-index">02</div>

                <div className="contact-card-content">
                  <span>LINKEDIN</span>
                  <strong>linkedin.com/in/elias-paul-b7b498269</strong>
                </div>

                <div className="contact-card-arrow">↗</div>
              </a>

              <a
                href="https://github.com/eliaspaul04"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-card-index">03</div>

                <div className="contact-card-content">
                  <span>GITHUB</span>
                  <strong>github.com/eliaspaul04</strong>
                </div>

                <div className="contact-card-arrow">↗</div>
              </a>
            </div>

            <div className="contact-footer">
              <div className="contact-status">
                <span className="contact-status-dot"></span>
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>

              <span className="contact-footer-note">
                DUBAI, UAE · 2026
              </span>
            </div>
          </section>
        </main>

        <footer>
          <p>© 2026 Elias Paul</p>
        </footer>
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">
          {project.number}
        </span>

        <span className="project-category">
          {project.category.toUpperCase()}
        </span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p className="project-description">
          {project.shortDescription}
        </p>
      </div>

      <div className="project-footer">
        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <a
          href={`#/projects/${project.id}`}
          className="project-link"
        >
          View Project
          <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default App;
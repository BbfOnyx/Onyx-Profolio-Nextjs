import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bbf Onyx | Software Engineer Portfolio",
  description:
    "Portfolio of Bbf Onyx - Software Engineer specializing in Python, Django, React, TypeScript, and high-performance modern web apps.",
};

const featuredProjects = [
  {
    id: "proj-1",
    title: "TaskFlow",
    tag: "FULL STACK",
    image: "/Featured-Projects/TaskFlow.png",
    description:
      "A full-stack productivity & task management application built for agile software teams to track sprints, manage tickets, and collaborate in real-time.",
    techs: ["Django", "React", "PostgreSQL", "TailwindCSS"],
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/bbfonyx/taskflow",
  },
  {
    id: "proj-2",
    title: "SneakVerse",
    tag: "WEB APP",
    image: "/Featured-Projects/SneakVerse.png",
    description:
      "Modern high-performance e-commerce storefront for exclusive sneaker drops, featuring real-time inventory tracking, Stripe payments, and dynamic 3D asset previews.",
    techs: ["Next.js", "TypeScript", "Stripe", "TailwindCSS"],
    liveUrl: "https://example.com/sneakverse",
    githubUrl: "https://github.com/bbfonyx/sneakverse",
  },
  {
    id: "proj-3",
    title: "FinTrack API",
    tag: "API",
    image: "/Featured-Projects/FinTrack-API.png",
    description:
      "RESTful financial analytics & expense tracking API equipped with JWT authentication, budget forecasting, and currency conversion microservices.",
    techs: ["Python", "Django REST", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com/fintrack-api",
    githubUrl: "https://github.com/bbfonyx/fintrack-api",
  },
];

const coreTechnologies = [
  { name: "Python", color: "#3776AB" },
  { name: "Django & DRF", color: "#092E20" },
  { name: "JavaScript ES6+", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Git & GitHub", color: "#F05032" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content reveal active">
          <div className="badge-pill" style={{ marginBottom: "1.4rem" }}>
            👋 Hello, I&apos;m
          </div>
          <h1>
            <span>Onyx</span>
          </h1>
          <div className="title">Software Engineer.</div>
          <p>
            I build fast, scalable, and visually captivating web applications that turn bold
            concepts into high-impact digital products.
          </p>

          <div className="hero-btns">
            <Link href="/projects" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </Link>
          </div>

          <div className="socials-row">
            <span>Find me on</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bbfonyx?igsi=aXNtZGpsY3hxa211"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2C5.3 4 4 5.3 4 7.5v9c0 2.2 1.3 3.5 3.5 3.5h9c2.2 0 3.5-1.3 3.5-3.5v-9c0-2.2-1.3-3.5-3.5-3.5h-9m9.6 1.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3m-5.1 1.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@bbf.onyx3?_r=1&_t=ZS-999uwclhoOb"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="TikTok"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 1 1-5.92-2.86c.44-.46 1.06-.75 1.75-.75V9.02a6 6 0 1 0 10.86 4.43v-5.02a8.05 8.05 0 0 0 4.76-2.74v-3.72z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image reveal active">
          <div className="portrait-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile/file_000000001d5481f48abd2b800c358a2a.png"
              alt="Bbf Onyx - Software Engineer"
            />
            <div className="code-badge">&lt;/&gt;</div>
            <div className="available-badge">
              <span className="badge-status available" />
              <div>
                <strong>Available for</strong>
                <br />
                Freelance &amp; Internships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK BAR */}
      <section className="tech-stack">
        <div className="tech-inner">
          <div className="tech-label">Core Technologies</div>
          <div className="tech-badges">
            {coreTechnologies.map((tech) => (
              <div key={tech.name} className="tech-badge">
                <span style={{ color: tech.color }}>●</span> {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="projects-section">
        <div className="section-header">
          <div>
            <div className="badge-pill" style={{ marginBottom: "0.6rem" }}>
              Portfolio Showcase
            </div>
            <h2>Featured Projects</h2>
          </div>
          <Link href="/projects" className="btn-ghost">
            View All Projects
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} />
                <span className="project-tag">{project.tag}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="project-techs">
                    {project.techs.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/projects"
                    className="project-link-btn"
                    aria-label={`View details for ${project.title}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT & STATS */}
      <section className="about-home">
        <div className="about-content reveal active">
          <div className="badge-pill" style={{ marginBottom: "0.8rem" }}>
            About Me
          </div>
          <h2>
            I code with purpose and build with <span>passion</span>.
          </h2>
          <p>
            I&apos;m a 17-year-old Software Engineering student dedicated to solving real-world challenges through elegant, maintainable code.
          </p>
          <p>
            Whether building scalable backend microservices or crafting seamless frontend experiences, I focus on performance, intuitive user experience, and robust architecture.
          </p>
          <Link href="/about" className="btn-primary" style={{ marginTop: "1rem" }}>
            More About Me
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="stats-grid-home reveal active">
          <div className="stat-box">
            <div className="stat-icon" style={{ color: "var(--purple-light)" }}>
              &lt;/&gt;
            </div>
            <div className="stat-number">20+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon" style={{ color: "#f59e0b" }}>
              ⚡
            </div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          padding: "5rem 2rem 6rem",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div className="badge-pill">Let&apos;s Collaborate</div>
        <h2 style={{ fontSize: "2.6rem", fontWeight: 800, letterSpacing: "-0.03em" }}>
          Ready to build something <span style={{ color: "var(--purple-light)" }}>impactful</span> together?
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto" }}>
          Let&apos;s turn your vision into scalable reality. Available for freelance inquiries, internships, and technical contracts.
        </p>
        <Link href="/contact" className="btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1.05rem" }}>
          Get In Touch
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  );
}

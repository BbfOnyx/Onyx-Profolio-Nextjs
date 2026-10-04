"use client";

import { useState } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  tag: string;
  date: string;
  image: string;
  description: string;
  techs: string[];
  liveUrl: string;
  githubUrl: string;
};

const allProjects: Project[] = [
  {
    id: "proj-1",
    title: "TaskFlow",
    category: "Full Stack",
    tag: "FULL STACK",
    date: "2024-05-28",
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
    category: "Web App",
    tag: "WEB APP",
    date: "2024-05-20",
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
    category: "API",
    tag: "API",
    date: "2024-05-15",
    image: "/Featured-Projects/FinTrack-API.png",
    description:
      "RESTful financial analytics & expense tracking API equipped with JWT authentication, budget forecasting, and currency conversion microservices.",
    techs: ["Python", "Django REST", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com/fintrack-api",
    githubUrl: "https://github.com/bbfonyx/fintrack-api",
  },
  {
    id: "proj-4",
    title: "AiChat Assistant",
    category: "Web App",
    tag: "AI APP",
    date: "2024-04-18",
    image: "/Featured-Projects/TaskFlow.png",
    description:
      "Conversational AI workspace with markdown streaming, context memory, and custom system prompt engineering for developer workflows.",
    techs: ["React", "Node.js", "OpenAI API", "CSS3"],
    liveUrl: "https://example.com/aichat",
    githubUrl: "https://github.com/bbfonyx/aichat",
  },
  {
    id: "proj-5",
    title: "WeatherWise",
    category: "Frontend",
    tag: "FRONTEND",
    date: "2024-03-30",
    image: "/Featured-Projects/SneakVerse.png",
    description:
      "Sleek weather dashboard with hourly forecasts, dynamic animated radar maps, UV index alerts, and automatic geolocation lookup.",
    techs: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    liveUrl: "https://example.com/weatherwise",
    githubUrl: "https://github.com/bbfonyx/weatherwise",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((proj) => {
    const matchesCategory =
      activeCategory === "All" || proj.category.toLowerCase() === activeCategory.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      proj.title.toLowerCase().includes(query) ||
      proj.description.toLowerCase().includes(query) ||
      proj.techs.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="projects-header">
        <div className="badge-pill" style={{ marginBottom: "1rem" }}>
          Selected Engineering Builds
        </div>
        <h1>
          Engineered for <span>Impact</span>
        </h1>
        <p>
          A curated catalog of full-stack web applications, microservices, REST APIs, and modern
          interfaces built for stability and speed.
        </p>

        <div className="controls-bar">
          <div className="search-box">
            <span
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by project name or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="skills-filter-nav" style={{ justifyContent: "center" }}>
            {["All", "Full Stack", "Web App", "API", "Frontend"].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`skill-tab-btn${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto 6rem", padding: "0 2rem" }}>
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 1rem", color: "var(--text-muted)" }}>
            <p style={{ fontSize: "1.2rem" }}>No projects match your search criteria.</p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              style={{ marginTop: "1rem" }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
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
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        title="View GitHub Repository"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        title="View Live Demo"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

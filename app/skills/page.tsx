"use client";

import Link from "next/link";
import { useState } from "react";

const allSkills = [
  {
    id: "sk-1",
    name: "Python",
    category: "backend",
    categoryLabel: "Backend",
    icon: "🐍",
    level: 92,
    desc: "Advanced backend scripting, data processing, and scalable architecture.",
  },
  {
    id: "sk-2",
    name: "Django / DRF",
    category: "backend",
    categoryLabel: "Backend",
    icon: "🦄",
    level: 88,
    desc: "Robust REST APIs, ORM modeling, auth, and backend integrations.",
  },
  {
    id: "sk-3",
    name: "JavaScript (ES6+)",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "⚡",
    level: 90,
    desc: "Async programming, DOM manipulation, clean modular code.",
  },
  {
    id: "sk-4",
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "📘",
    level: 82,
    desc: "Strict typing, robust interface definitions, and scalable web apps.",
  },
  {
    id: "sk-5",
    name: "React",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "⚛️",
    level: 85,
    desc: "Component architecture, custom hooks, context, and state management.",
  },
  {
    id: "sk-6",
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "▲",
    level: 80,
    desc: "Server-side rendering, static site generation, API routing.",
  },
  {
    id: "sk-7",
    name: "HTML5 & Semantic Web",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "🌐",
    level: 96,
    desc: "Accessible markup, SEO optimization, and structured layouts.",
  },
  {
    id: "sk-8",
    name: "CSS3 & Glassmorphism",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "🎨",
    level: 94,
    desc: "Responsive grid, Flexbox, keyframe animations, modern aesthetics.",
  },
  {
    id: "sk-9",
    name: "PostgreSQL & SQL",
    category: "database",
    categoryLabel: "Database",
    icon: "🐘",
    level: 84,
    desc: "Schema design, indexing, complex queries, and relational data.",
  },
  {
    id: "sk-10",
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Tools",
    icon: "🐙",
    level: 90,
    desc: "Branching workflows, version control, CI/CD, and pull requests.",
  },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "Postman", icon: "🚀" },
  { name: "Figma", icon: "🎨" },
  { name: "Linux / Bash", icon: "🐧" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "NPM & Vite", icon: "⚡" },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* SKILLS HERO */}
      <section className="skills-hero">
        <div className="skills-hero-content reveal active">
          <div className="badge-pill" style={{ marginBottom: "1.2rem" }}>
            Expertise &amp; Toolkit
          </div>
          <h1>
            Technical Skills &amp; <span>Core Stacks</span>
          </h1>
          <p>
            A comprehensive overview of programming languages, modern frameworks, database
            architectures, and developer tools I leverage to craft dependable software.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/projects" className="btn-primary">
              See Skills in Action
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal active">
          <div className="visual-card-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile/photo-1517694712202-14dd9538aa97.jpg"
              alt="Developer workspace"
            />
            <div className="floating-badge b1" title="React">
              ⚛️
            </div>
            <div className="floating-badge b2" title="Python">
              🐍
            </div>
            <div className="floating-badge b3" title="JavaScript">
              JS
            </div>
            <div className="floating-badge b4" title="TypeScript">
              TS
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS TABS & GRID */}
      <section className="skills-section">
        <div className="skills-filter-nav">
          <button
            type="button"
            className={`skill-tab-btn${activeCategory === "all" ? " active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Disciplines
          </button>
          <button
            type="button"
            className={`skill-tab-btn${activeCategory === "frontend" ? " active" : ""}`}
            onClick={() => setActiveCategory("frontend")}
          >
            Frontend &amp; UI
          </button>
          <button
            type="button"
            className={`skill-tab-btn${activeCategory === "backend" ? " active" : ""}`}
            onClick={() => setActiveCategory("backend")}
          >
            Backend &amp; APIs
          </button>
          <button
            type="button"
            className={`skill-tab-btn${activeCategory === "database" ? " active" : ""}`}
            onClick={() => setActiveCategory("database")}
          >
            Database &amp; Cloud
          </button>
          <button
            type="button"
            className={`skill-tab-btn${activeCategory === "tools" ? " active" : ""}`}
            onClick={() => setActiveCategory("tools")}
          >
            Tools &amp; DevOps
          </button>
        </div>

        <div className="skills-grid" id="skillsGrid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="skill-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.8rem", transition: "var(--transition)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ fontSize: "1.6rem" }}>{skill.icon}</span>
                  <div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>{skill.name}</h3>
                    <span style={{ fontSize: "0.8rem", color: "var(--purple-light)" }}>{skill.categoryLabel}</span>
                  </div>
                </div>
                <span style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text)" }}>{skill.level}%</span>
              </div>
              <div style={{ width: "100%", height: "8px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "999px", overflow: "hidden", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, var(--purple), var(--purple-light))",
                    borderRadius: "999px",
                    transition: "width 0.8s ease-in-out",
                  }}
                />
              </div>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* TOOLS & WORKFLOW */}
        <div className="tools-section reveal active" style={{ marginTop: "5rem" }}>
          <div className="tools-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge-pill" style={{ marginBottom: "0.8rem" }}>
              Daily Arsenal
            </div>
            <h2>Tools &amp; Workflow Environment</h2>
          </div>

          <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1.2rem", maxWidth: "900px", margin: "0 auto" }}>
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="tool-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.6rem",
                  transition: "var(--transition)",
                }}
              >
                <div className="tool-icon" style={{ fontSize: "1.8rem" }}>
                  {tool.icon}
                </div>
                <div className="tool-name" style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)" }}>
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
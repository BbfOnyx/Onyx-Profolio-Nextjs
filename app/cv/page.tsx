"use client";

import Link from "next/link";

export default function CvPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <section className="cv-hero">
        <div className="badge-pill" style={{ marginBottom: "1rem" }}>
          Curriculum Vitae
        </div>
        <h1>
          Professional <span>Resume</span>
        </h1>
        <p>
          A comprehensive overview of my software engineering capabilities, project milestones,
          academic track, and production accomplishments.
        </p>

        <div className="cv-actions-bar">
          <a
            href="/CV/Bbf_Onyx_CV.pdf"
            download
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download PDF
          </a>
          <button type="button" className="btn-secondary" onClick={handlePrint}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print Resume
          </button>
        </div>
      </section>

      {/* RESUME DOCUMENT */}
      <article className="cv-document reveal active">
        <div className="cv-doc-header">
          <div>
            <h2 className="cv-name" style={{ fontSize: "2.4rem", fontWeight: 800, margin: "0 0 0.3rem" }}>
              Bbf Onyx
            </h2>
            <div className="cv-role" style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--purple-light)" }}>
              Software Engineer
            </div>
          </div>
          <div className="cv-contact-details" style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            <span>✉️ bbfonyx@onyx.com</span>
            <span>📍 Anambra State / Lagos, Nigeria</span>
            <span>🐙 github.com/bbfonyx</span>
          </div>
        </div>

        {/* Summary */}
        <section className="cv-section" style={{ marginBottom: "2.5rem" }}>
          <h3 className="cv-section-title" style={{ fontSize: "1.2rem", fontWeight: 700, borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
            Professional Summary
          </h3>
          <p className="cv-item-desc" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
            Motivated, results-driven Software Engineering student with deep expertise in Python, Django
            REST Framework, React, TypeScript, and relational databases. Proven track record
            architecting full-stack web applications, RESTful microservices, and modern user
            experiences with high performance and accessibility standards.
          </p>
        </section>

        {/* Key Projects / Experience */}
        <section className="cv-section" style={{ marginBottom: "2.5rem" }}>
          <h3 className="cv-section-title" style={{ fontSize: "1.2rem", fontWeight: 700, borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem", marginBottom: "1.2rem" }}>
            Engineering Projects &amp; Experience
          </h3>

          <div className="cv-item" style={{ marginBottom: "1.8rem" }}>
            <div className="cv-item-header">
              <div>
                <span className="cv-item-title">TaskFlow — Collaborative Project Management App</span>{" "}
                | <span className="cv-item-company">Full Stack Developer</span>
              </div>
              <span className="cv-item-date">2024</span>
            </div>
            <div className="cv-item-desc">
              <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0 }}>
                <li>Architected a real-time task workflow application using Django REST Framework and React.</li>
                <li>Implemented secure JWT authentication, team workspace permissions, and sprint analytics.</li>
                <li>Integrated PostgreSQL with optimized relational queries, reducing query response times by 35%.</li>
              </ul>
            </div>
          </div>

          <div className="cv-item" style={{ marginBottom: "1.8rem" }}>
            <div className="cv-item-header">
              <div>
                <span className="cv-item-title">SneakVerse — E-Commerce Drop Platform</span> |{" "}
                <span className="cv-item-company">Frontend / Full Stack</span>
              </div>
              <span className="cv-item-date">2024</span>
            </div>
            <div className="cv-item-desc">
              <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0 }}>
                <li>Designed and deployed an e-commerce platform using Next.js, TypeScript, and TailwindCSS.</li>
                <li>Integrated Stripe Checkout API with webhook listeners for automated order fulfillment and receipt emailing.</li>
              </ul>
            </div>
          </div>

          <div className="cv-item" style={{ marginBottom: "1.8rem" }}>
            <div className="cv-item-header">
              <div>
                <span className="cv-item-title">FinTrack API — Financial Analytics Backend</span> |{" "}
                <span className="cv-item-company">Backend Engineer</span>
              </div>
              <span className="cv-item-date">2024</span>
            </div>
            <div className="cv-item-desc">
              <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0 }}>
                <li>Engineered a RESTful financial transaction tracker with currency conversion and categorization pipelines.</li>
                <li>Built comprehensive test suites with Pytest, achieving 90%+ code coverage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="cv-section" style={{ marginBottom: "2.5rem" }}>
          <h3 className="cv-section-title" style={{ fontSize: "1.2rem", fontWeight: 700, borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
            Technical Proficiencies
          </h3>
          <div className="cv-item-desc" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
            <p>
              <strong>Languages:</strong> Python, JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL
            </p>
            <p>
              <strong>Frameworks &amp; Libraries:</strong> Django, Django REST Framework, React,
              Next.js, Node.js
            </p>
            <p>
              <strong>Databases &amp; Tools:</strong> PostgreSQL, SQLite, Git, GitHub, Docker,
              Postman, Linux
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h3 className="cv-section-title" style={{ fontSize: "1.2rem", fontWeight: 700, borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
            Education &amp; Credentials
          </h3>
          <div className="cv-item">
            <div className="cv-item-header">
              <div>
                <span className="cv-item-title">Diploma / Studies in Software Engineering</span> |{" "}
                <span className="cv-item-company">Lagos / Anambra, Nigeria</span>
              </div>
              <span className="cv-item-date">In Progress</span>
            </div>
            <p className="cv-item-desc" style={{ color: "var(--text-muted)", marginTop: "0.4rem" }}>
              Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database
              Systems, Web Architectures.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}

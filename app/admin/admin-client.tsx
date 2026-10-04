"use client";

import Link from "next/link";
import { useState } from "react";

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
};

const initialMessages: Message[] = [
  {
    id: "msg-1",
    name: "Sarah Johnson",
    email: "sarah.j@techinnovate.io",
    subject: "Freelance Web App Project",
    message:
      "Hello Onyx! We saw your TaskFlow and SneakVerse projects and are thoroughly impressed. We would love to discuss a 3-month contract to build our new client portal.",
    date: "2026-08-30 14:22",
    read: false,
  },
  {
    id: "msg-2",
    name: "Michael Brown",
    email: "michael.b@startupventures.com",
    subject: "Software Engineering Internship Opportunity",
    message:
      "Hi Onyx, loved your portfolio design and Python/Django projects. Are you open to discussing an engineering internship starting this quarter?",
    date: "2026-08-28 09:45",
    read: true,
  },
];

const initialProjects = [
  {
    id: "proj-1",
    title: "TaskFlow",
    category: "Full Stack",
    views: 1420,
    status: "Published",
    techs: ["Django", "React", "PostgreSQL"],
  },
  {
    id: "proj-2",
    title: "SneakVerse",
    category: "Web App",
    views: 1180,
    status: "Published",
    techs: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    id: "proj-3",
    title: "FinTrack API",
    category: "API",
    views: 940,
    status: "Published",
    techs: ["Python", "Django REST", "Docker"],
  },
  {
    id: "proj-4",
    title: "AiChat Assistant",
    category: "AI App",
    views: 756,
    status: "Draft",
    techs: ["React", "Node.js", "OpenAI"],
  },
  {
    id: "proj-5",
    title: "WeatherWise",
    category: "Frontend",
    views: 623,
    status: "Published",
    techs: ["JavaScript", "HTML5", "CSS3"],
  },
];

export function AdminDashboardClient({
  logoutAction,
}: {
  logoutAction: () => Promise<void>;
}) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "projects" | "messages" | "skills" | "profile">("dashboard");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [projects] = useState(initialProjects);

  const toggleMessageRead = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m))
    );
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto 6rem", padding: "6rem 2rem 2rem" }}>
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, var(--purple), var(--purple-dark))", color: "white", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.2rem" }}>
            OP
          </div>
          <div>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0 }}>
              Onyx<span>Admin</span> CMS
            </h1>
            <span style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
              Authenticated Session • Bbf Onyx
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" className="btn-secondary" style={{ fontSize: "0.88rem", padding: "0.5rem 1rem" }}>
            &larr; View Live Site
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="btn-primary"
              style={{ background: "rgba(244, 63, 94, 0.15)", borderColor: "var(--accent-rose)", color: "#fda4af", fontSize: "0.88rem", padding: "0.5rem 1.1rem" }}
            >
              Log Out
            </button>
          </form>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="skills-filter-nav" style={{ marginBottom: "2.5rem" }}>
        <button
          type="button"
          className={`skill-tab-btn${activeTab === "dashboard" ? " active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          📊 Dashboard Overview
        </button>
        <button
          type="button"
          className={`skill-tab-btn${activeTab === "projects" ? " active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          🚀 Projects Manager ({projects.length})
        </button>
        <button
          type="button"
          className={`skill-tab-btn${activeTab === "messages" ? " active" : ""}`}
          onClick={() => setActiveTab("messages")}
        >
          📬 Inbox ({messages.filter((m) => !m.read).length} unread)
        </button>
        <button
          type="button"
          className={`skill-tab-btn${activeTab === "skills" ? " active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          ⚡ Skills &amp; Tech (10)
        </button>
        <button
          type="button"
          className={`skill-tab-btn${activeTab === "profile" ? " active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          👤 Profile Settings
        </button>
      </div>

      {/* Tab 1: Dashboard Overview */}
      {activeTab === "dashboard" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
            <div className="info-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                Total Projects
              </span>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--purple-light)", marginTop: "0.3rem" }}>
                5
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-emerald)" }}>4 Published • 1 Draft</span>
            </div>

            <div className="info-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                Inbox Messages
              </span>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-cyan)", marginTop: "0.3rem" }}>
                {messages.length}
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-amber)" }}>
                {messages.filter((m) => !m.read).length} Unread inquiries
              </span>
            </div>

            <div className="info-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                Technical Skills
              </span>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#f59e0b", marginTop: "0.3rem" }}>
                10
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Across 4 Disciplines</span>
            </div>

            <div className="info-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                Availability Status
              </span>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-emerald)", marginTop: "0.6rem" }}>
                ● Active
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Freelance &amp; Internships</span>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1.2rem" }}>
              Recent Client &amp; Recruiter Messages
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    background: msg.read ? "rgba(255, 255, 255, 0.02)" : "rgba(139, 92, 246, 0.08)",
                    border: `1px solid ${msg.read ? "var(--border)" : "var(--border-hover)"}`,
                    borderRadius: "var(--radius-md)",
                    padding: "1.2rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div>
                      <strong>{msg.name}</strong>{" "}
                      <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                        &lt;{msg.email}&gt;
                      </span>
                    </div>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>{msg.date}</span>
                  </div>
                  <div style={{ fontWeight: 600, color: "var(--purple-light)", marginTop: "0.4rem" }}>
                    {msg.subject}
                  </div>
                  <p style={{ margin: "0.4rem 0 0", color: "var(--text-muted)", fontSize: "0.92rem" }}>
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Projects Manager */}
      {activeTab === "projects" && (
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1.2rem" }}>
            Managed Portfolio Projects
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {projects.map((p) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.2rem",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg)",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <h4 style={{ margin: "0 0 0.3rem", fontSize: "1.1rem" }}>{p.title}</h4>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span className="tag" style={{ fontSize: "0.75rem" }}>
                      {p.category}
                    </span>
                    {p.techs.map((t) => (
                      <span key={t} className="tech-pill" style={{ fontSize: "0.75rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                  <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                    👀 {p.views} views
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      padding: "0.25rem 0.6rem",
                      borderRadius: "999px",
                      background: p.status === "Published" ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)",
                      color: p.status === "Published" ? "var(--accent-emerald)" : "var(--accent-amber)",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Inbox Messages */}
      {activeTab === "messages" && (
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1.2rem" }}>
            Inbox Messages ({messages.length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  padding: "1.5rem",
                  border: `1px solid ${msg.read ? "var(--border)" : "var(--purple)"}`,
                  borderRadius: "var(--radius-md)",
                  background: msg.read ? "var(--bg)" : "rgba(139, 92, 246, 0.05)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <strong style={{ fontSize: "1.05rem" }}>{msg.name}</strong>{" "}
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      &lt;{msg.email}&gt;
                    </span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>{msg.date}</span>
                </div>
                <h5 style={{ margin: "0.5rem 0 0.3rem", color: "var(--purple-light)", fontSize: "0.98rem" }}>
                  {msg.subject}
                </h5>
                <p style={{ color: "var(--text-muted)", margin: "0.4rem 0 1.2rem", lineHeight: 1.6 }}>
                  {msg.message}
                </p>
                <div style={{ display: "flex", gap: "0.8rem" }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => toggleMessageRead(msg.id)}
                    style={{ fontSize: "0.82rem", padding: "0.4rem 0.8rem" }}
                  >
                    {msg.read ? "Mark Unread" : "Mark as Read"}
                  </button>
                  <a
                    href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                    className="btn-primary"
                    style={{ fontSize: "0.82rem", padding: "0.4rem 0.8rem" }}
                  >
                    Reply via Email
                  </a>
                  <button
                    type="button"
                    onClick={() => deleteMessage(msg.id)}
                    style={{ background: "transparent", border: "none", color: "var(--accent-rose)", fontSize: "0.82rem", cursor: "pointer", marginLeft: "auto" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Skills & Tech */}
      {activeTab === "skills" && (
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1.2rem" }}>
            Proficiency Database
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { name: "Python", cat: "Backend", level: 92 },
              { name: "Django / DRF", cat: "Backend", level: 88 },
              { name: "JavaScript (ES6+)", cat: "Frontend", level: 90 },
              { name: "TypeScript", cat: "Frontend", level: 82 },
              { name: "React", cat: "Frontend", level: 85 },
              { name: "Next.js", cat: "Frontend", level: 80 },
              { name: "HTML5 & Semantic Web", cat: "Frontend", level: 96 },
              { name: "CSS3 & Glassmorphism", cat: "Frontend", level: 94 },
              { name: "PostgreSQL & SQL", cat: "Database", level: 84 },
              { name: "Git & GitHub", cat: "Tools", level: 90 },
            ].map((sk) => (
              <div
                key={sk.name}
                style={{
                  padding: "1rem",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <strong>{sk.name}</strong>
                  <span style={{ color: "var(--purple-light)" }}>{sk.level}%</span>
                </div>
                <div style={{ height: "6px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "999px" }}>
                  <div
                    style={{
                      width: `${sk.level}%`,
                      height: "100%",
                      background: "var(--purple)",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Profile Settings */}
      {activeTab === "profile" && (
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1.2rem" }}>
            Portfolio Profile Identity
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
                Full Name
              </span>
              <strong style={{ fontSize: "1.1rem" }}>Bbf Onyx</strong>
            </div>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
                Display Name
              </span>
              <strong style={{ fontSize: "1.1rem" }}>Onyx</strong>
            </div>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
                Primary Role
              </span>
              <strong style={{ fontSize: "1.1rem" }}>Software Engineer</strong>
            </div>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
                Direct Email
              </span>
              <strong style={{ fontSize: "1.1rem" }}>bbfonyx@onyx.com</strong>
            </div>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
                Location
              </span>
              <strong style={{ fontSize: "1.1rem" }}>Anambra State / Lagos, Nigeria</strong>
            </div>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
                CV File Path
              </span>
              <strong style={{ fontSize: "1.1rem" }}>/CV/Bbf_Onyx_CV.pdf</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

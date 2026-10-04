"use client";

import { useState } from "react";

const quickTopics = [
  "Freelance Project Inquiry",
  "Internship / Job Opportunity",
  "Technical Collaboration",
  "General Question",
];

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState("Freelance Project Inquiry");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Freelance Project Inquiry",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setFormData((prev) => ({ ...prev, subject: topic }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bbfonyx@onyx.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "Freelance Project Inquiry",
        message: "",
      });
    }, 4000);
  };

  return (
    <>
      <section className="contact-hero">
        <div className="badge-pill" style={{ marginBottom: "1rem" }}>
          Let&apos;s Connect
        </div>
        <h1>
          Send a <span>Message</span>
        </h1>
        <p>
          Have a freelance inquiry, full-stack project, internship proposal, or just want to say hi?
          Fill out the form below and I will respond within 24 hours.
        </p>
      </section>

      <section className="contact-grid-main">
        {/* Left: Interactive Form */}
        <div className="contact-card-box reveal active">
          <h3>Direct Message Form</h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Your message syncs automatically to my administrative dashboard.
          </p>

          <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.6rem" }}>
            Quick Topic Selection:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.8rem" }}>
            {quickTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                className={`skill-tab-btn${selectedTopic === topic ? " active" : ""}`}
                style={{ fontSize: "0.85rem", padding: "0.45rem 0.9rem" }}
                onClick={() => handleTopicClick(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          {submitted ? (
            <div
              style={{
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid var(--accent-emerald)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✅</div>
              <h4 style={{ color: "var(--accent-emerald)", margin: "0 0 0.5rem" }}>
                Message Sent Successfully!
              </h4>
              <p style={{ color: "var(--text-muted)", margin: 0 }}>
                Thank you for reaching out. I will review your message and reply to your email promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "1.2rem" }}>
                <div>
                  <label htmlFor="senderName" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    placeholder="e.g. Jane Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "0.8rem 1rem", color: "var(--text)", outline: "none" }}
                  />
                </div>
                <div>
                  <label htmlFor="senderEmail" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="senderEmail"
                    placeholder="e.g. jane@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "0.8rem 1rem", color: "var(--text)", outline: "none" }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.2rem" }}>
                <label htmlFor="senderSubject" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="senderSubject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "0.8rem 1rem", color: "var(--text)", outline: "none" }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="senderMessage" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  Your Message *
                </label>
                <textarea
                  id="senderMessage"
                  rows={5}
                  placeholder="Tell me about your project, timeline, or idea..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "0.8rem 1rem", color: "var(--text)", outline: "none", resize: "vertical" }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1rem", justifyContent: "center" }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* Right: Contact Information Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="info-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--purple-glow-soft)", color: "var(--purple-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                ✉️
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Email Directly</h4>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "0.8rem" }}>
              Prefer emailing directly from your client? Drop me a message anytime.
            </p>
            <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--purple-light)", display: "block", marginBottom: "1rem", wordBreak: "break-all" }}>
              bbfonyx@onyx.com
            </span>
            <div style={{ display: "flex", gap: "0.8rem" }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleCopyEmail}
                style={{ flex: 1, padding: "0.65rem", justifyContent: "center" }}
              >
                {copied ? "✓ Copied!" : "📋 Copy Email"}
              </button>
              <a
                href="mailto:bbfonyx@onyx.com"
                className="btn-primary"
                style={{ flex: 1, padding: "0.65rem", textAlign: "center", justifyContent: "center" }}
              >
                Open Mail
              </a>
            </div>
          </div>

          <div className="info-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--purple-glow-soft)", color: "var(--purple-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                📍
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Location &amp; Status</h4>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "0.8rem" }}>
              <strong>Anambra State, Nigeria</strong> (UTC+1)
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span className="badge-status available" />
              <span style={{ fontSize: "0.9rem", color: "var(--accent-emerald)", fontWeight: 600 }}>
                Available for Hire
              </span>
            </div>
          </div>

          <div className="info-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--purple-glow-soft)", color: "var(--purple-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                🌐
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Social Channels</h4>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "1rem" }}>
              Follow my coding progress and latest project demos.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bbfonyx?igsi=aXNtZGpsY3hxa211" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2C5.3 4 4 5.3 4 7.5v9c0 2.2 1.3 3.5 3.5 3.5h9c2.2 0 3.5-1.3 3.5-3.5v-9c0-2.2-1.3-3.5-3.5-3.5h-9m9.6 1.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3m-5.1 1.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@bbf.onyx3?_r=1&_t=ZS-999uwclhoOb" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 1 1-5.92-2.86c.44-.46 1.06-.75 1.75-.75V9.02a6 6 0 1 0 10.86 4.43v-5.02a8.05 8.05 0 0 0 4.76-2.74v-3.72z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Get to know Bbf Onyx - Software Engineering student, developer journey, principles, and philosophy.",
};

const stats = [
  {
    icon: "< / >",
    number: "20+",
    title: "Completed Projects",
    desc: "End-to-end full stack web applications, REST APIs, and client portals.",
  },
  {
    icon: "⚡",
    number: "10+",
    title: "Technologies",
    desc: "Modern languages, frameworks, and deployment environments.",
  },
  {
    icon: "📈",
    number: "250+",
    title: "GitHub Commits",
    desc: "Active contributor building scalable open source & private solutions.",
  },
  {
    icon: "🎯",
    number: "100%",
    title: "Dedication",
    desc: "Committed to rigorous engineering quality, speed, and continuous learning.",
  },
];

const values = [
  {
    icon: "⚡",
    title: "Performance First",
    desc: "Every millisecond matters. I design clean architectures, optimized queries, and snappy interfaces that keep load times near zero.",
  },
  {
    icon: "🛠️",
    title: "Maintainable Architecture",
    desc: "Writing clean, modular, and well-documented code that is easy to scale, test, and maintain over long lifecycles.",
  },
  {
    icon: "✨",
    title: "Aesthetic Excellence",
    desc: "Great code deserves a world-class user interface. I pay meticulous attention to design typography, contrast, and smooth micro-interactions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-content reveal active">
          <div className="badge-pill" style={{ marginBottom: "1.2rem" }}>
            Biographical Overview
          </div>
          <h1>
            Passionate about code, driven by <span>impact</span>.
          </h1>
          <p>
            I am a 17-year-old Software Engineering student based in Lagos with a relentless drive for building high-grade web applications. I combine modern backend engineering in Python &amp; Django with sleek interactive interfaces in React and TypeScript.
          </p>
          <p>
            My goal is to construct software that feels instantaneous, intuitive, and genuinely helpful to people around the world.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Work With Me
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="/CV/Bbf_Onyx_CV.pdf"
              download
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="portrait-about-wrap reveal active">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile/file_000000001d5481f48abd2b800c358a2a.png"
            alt="Bbf Onyx portrait"
          />
          <div className="handwriting-tag">#BuildInPublic 🚀</div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats reveal active">
        <div className="stats-cards-row">
          {stats.map((stat) => (
            <div key={stat.title} className="stat-card-item">
              <div className="stat-card-icon">{stat.icon}</div>
              <div className="stat-card-number stat-number">{stat.number}</div>
              <div className="stat-card-title">{stat.title}</div>
              <div className="stat-card-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MY STORY */}
      <section className="story-section reveal active">
        <div className="story-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile/grok_1788100966882.jpg"
            alt="Developer setup"
          />
        </div>

        <div className="story-body">
          <div className="badge-pill" style={{ marginBottom: "0.8rem" }}>
            Background &amp; Focus
          </div>
          <h2>Engineering solutions from the ground up</h2>
          <p>
            My coding journey began with an insatiable curiosity about how software powers our everyday lives. What started as experimenting with HTML &amp; CSS quickly expanded into building comprehensive web applications powered by Python, Django, PostgreSQL, and modern React stacks.
          </p>
          <p>
            I constantly push the boundaries of what I can build—whether architecting real-time collaboration platforms like TaskFlow, designing sneaker marketplaces like SneakVerse, or building robust financial REST APIs like FinTrack.
          </p>
          <p>
            When I&apos;m not writing code, you can find me reading technical books, exploring new tech developments, or gaming.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section reveal active">
        <div className="values-header">
          <div className="badge-pill" style={{ marginBottom: "0.8rem" }}>
            Principles
          </div>
          <h2>Core Engineering Values</h2>
        </div>

        <div className="values-grid">
          {values.map((val) => (
            <div key={val.title} className="value-card">
              <div className="value-icon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

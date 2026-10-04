import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 2rem 4rem",
      }}
    >
      <div className="badge-pill" style={{ marginBottom: "1rem" }}>
        Error 404
      </div>
      <h1 style={{ fontSize: "3.5rem", fontWeight: 800, margin: "0 0 1rem" }}>
        Page Not <span>Found</span>
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
        The route you requested could not be located. Use the primary navigation or the buttons below to return to safety.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn-primary">
          Return Home
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <Link href="/projects" className="btn-secondary">
          Browse Projects
        </Link>
      </div>
    </section>
  );
}

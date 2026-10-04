"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        Runtime Exception
      </div>
      <h1 style={{ fontSize: "3.2rem", fontWeight: 800, margin: "0 0 1rem" }}>
        Something Went <span>Wrong</span>
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
        An unexpected error occurred while rendering this view. Our resilient boundary caught it to
        prevent a cascading blank screen.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button type="button" onClick={reset} className="btn-primary">
          Retry Component
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
        <Link href="/" className="btn-secondary">
          Return Home
        </Link>
      </div>
    </section>
  );
}

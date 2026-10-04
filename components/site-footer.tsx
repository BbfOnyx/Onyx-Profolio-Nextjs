import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Bbf-Onyx<span>&lt;/&gt;</span>
          </Link>
          <div className="footer-copy">
            &copy; 2026 Bbf Onyx. All rights reserved.
          </div>
        </div>

        <ul className="footer-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/cv">CV</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ul>

        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bbfonyx?igsi=aXNtZGpsY3hxa211"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2C5.3 4 4 5.3 4 7.5v9c0 2.2 1.3 3.5 3.5 3.5h9c2.2 0 3.5-1.3 3.5-3.5v-9c0-2.2-1.3-3.5-3.5-3.5h-9m9.6 1.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3m-5.1 1.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@bbf.onyx3?_r=1&_t=ZS-999uwclhoOb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 1 1-5.92-2.86c.44-.46 1.06-.75 1.75-.75V9.02a6 6 0 1 0 10.86 4.43v-5.02a8.05 8.05 0 0 0 4.76-2.74v-3.72z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

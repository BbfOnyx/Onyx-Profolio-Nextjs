import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";

import { SiteShell } from "@/components/site-shell";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bbf-onyx.dev"),
  title: {
    default: "Bbf Onyx | Software Engineer Portfolio",
    template: "%s | Bbf Onyx",
  },
  description:
    "Portfolio of Bbf Onyx - Software Engineer specializing in Python, Django, React, TypeScript, and high-performance modern web apps.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('onyx_portfolio_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', savedTheme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

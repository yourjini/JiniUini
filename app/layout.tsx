import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} · 프로젝트`,
  description: `${profile.role} ${profile.name}이 만들고 배포한 서비스와 게임 모음`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=IBM+Plex+Sans+KR:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <div className="glow" aria-hidden="true" />
        <header className="topbar">
          <Link href="/" className="wordmark">
            {profile.name}
            <span className="dot">.</span>
          </Link>
          <nav className="topnav">
            <a href="/#work">Work</a>
            <a href="/#about">About</a>
            {profile.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

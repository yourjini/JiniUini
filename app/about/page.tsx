import type { Metadata } from "next";
import { experience, profile, skills } from "@/content/profile";

export const metadata: Metadata = {
  title: `소개 · ${profile.name}`,
};

export default function About() {
  return (
    <main className="page">
      <section className="section">
        <h1 className="section-title">소개</h1>
        <p className="about">{profile.intro}</p>
      </section>

      <section className="section">
        <h2 className="section-title">이력</h2>
        <ol className="exp">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="muted">{e.period}</span>
              <div>
                <h3>{e.title}</h3>
                <p className="muted">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">다루는 도구</h2>
        <p className="muted">{skills.join(" · ")}</p>
      </section>

      <footer className="foot muted small">
        {profile.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
            {l.label} ↗
          </a>
        ))}
        <span>업데이트 {profile.updatedAt}</span>
      </footer>
    </main>
  );
}

import { experience, profile, skills } from "@/content/profile";
import { visibleProjects } from "@/content/projects";
import ProjectBoard from "@/components/ProjectBoard";

export default function Home() {
  const list = visibleProjects();
  const live = list.filter((p) => p.url).length;
  const stack = Array.from(new Set(list.flatMap((p) => p.stack)));

  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">
          {profile.name} — {profile.role}
        </p>
        <h1 className="headline">
          {profile.headline.map((line, i) => (
            <span key={line} style={{ "--i": i } as React.CSSProperties}>
              {line}
            </span>
          ))}
        </h1>
        <div className="hero-foot">
          <p className="lede">{profile.tagline}</p>
          <dl className="tally">
            <div>
              <dd>{list.length}</dd>
              <dt>projects</dt>
            </div>
            <div>
              <dd>{live}</dd>
              <dt>live</dt>
            </div>
          </dl>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...stack, ...stack].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      <section id="work" className="section">
        <div className="section-head">
          <h2 className="section-title">Work</h2>
        </div>
        <ProjectBoard projects={list} />
      </section>

      <section id="about" className="section about">
        <div className="section-head">
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-grid">
          <p className="about-intro">{profile.intro}</p>
          <ol className="exp">
            {experience.map((e) => (
              <li key={e.title}>
                <span className="exp-period">{e.period}</span>
                <h3>{e.title}</h3>
                <p>{e.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="skills">{skills.join("  ·  ")}</p>
      </section>

      <footer className="foot">
        <p className="foot-big">Let&apos;s build something.</p>
        <div className="foot-row">
          {profile.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
          <span>업데이트 {profile.updatedAt}</span>
        </div>
      </footer>
    </main>
  );
}

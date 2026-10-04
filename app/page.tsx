import { experience, profile, skills } from "@/content/profile";
import { visibleProjects } from "@/content/projects";
import ProjectBoard from "@/components/ProjectBoard";

export default function Home() {
  const list = visibleProjects();
  const live = list.filter((p) => p.status === "live" && p.url).length;

  return (
    <main className="page">
      <header className="intro">
        <p className="eyebrow">{profile.role}</p>
        <h1 className="name">{profile.name}</h1>
        <p className="lede">{profile.intro}</p>
        <dl className="tally">
          <div>
            <dt>프로젝트</dt>
            <dd>{list.length}</dd>
          </div>
          <div>
            <dt>배포 중</dt>
            <dd>{live}</dd>
          </div>
          <div>
            <dt>마지막 업데이트</dt>
            <dd className="small">{profile.updatedAt}</dd>
          </div>
        </dl>
        <nav className="links">
          {profile.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </nav>
      </header>

      <section aria-labelledby="projects-title" className="section">
        <h2 id="projects-title" className="section-title">
          프로젝트
        </h2>
        <ProjectBoard projects={list} />
      </section>

      <section aria-labelledby="exp-title" className="section">
        <h2 id="exp-title" className="section-title">
          이력
        </h2>
        <ol className="exp">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="exp-period">{e.period}</span>
              <div>
                <h3>{e.title}</h3>
                <p>{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <ul className="skills" aria-label="기술">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <footer className="foot">© {profile.name} · 직접 만들고 검수한 프로젝트들</footer>
    </main>
  );
}

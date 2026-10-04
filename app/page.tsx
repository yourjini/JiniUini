import { experience, profile, skills } from "@/content/profile";
import { visibleProjects } from "@/content/projects";
import ProjectBoard from "@/components/ProjectBoard";

export default function Home() {
  const list = visibleProjects();

  return (
    <main className="page">
      <section id="work" className="section">
        <h1 className="section-title">프로젝트</h1>
        <ProjectBoard projects={list} />
      </section>

      <section id="about" className="section">
        <h2 className="section-title">소개</h2>
        <p className="about">{profile.intro}</p>
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
        <p className="muted small">{skills.join(" · ")}</p>
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

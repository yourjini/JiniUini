import { profile } from "@/content/profile";
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

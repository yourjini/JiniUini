import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { categoryLabels, statusDescriptions, statusLabels, visibleProjects } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return visibleProjects().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = visibleProjects().find((x) => x.slug === slug);
  return { title: p ? `${p.name} · ${profile.name}` : profile.name, description: p?.summary };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = visibleProjects().find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="page detail">
      <nav>
        <Link href="/">← 전체 프로젝트</Link>
      </nav>

      <header className="detail-head">
        <p className="eyebrow">
          {categoryLabels[p.category]} · {p.period}
        </p>
        <h1 className="detail-title">{p.name}</h1>
        <p className="lede">{p.summary}</p>
      </header>

      <dl className="facts">
        <div>
          <dt>환경</dt>
          <dd>
            <span className={`status status-${p.status}`}>{statusLabels[p.status]}</span>
            <span className="muted">{statusDescriptions[p.status]}</span>
          </dd>
        </div>
        <div>
          <dt>배포 주소</dt>
          <dd>
            {p.url ? (
              <a href={p.url} target="_blank" rel="noreferrer">
                {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
              </a>
            ) : (
              <span className="muted">없음</span>
            )}
          </dd>
        </div>
        <div>
          <dt>저장소</dt>
          <dd className="repos">
            {p.repos.map((r) =>
              r.public ? (
                <a key={r.name} href={`https://github.com/yourjini/${r.name}`} target="_blank" rel="noreferrer">
                  {r.name} ↗
                </a>
              ) : (
                <span key={r.name}>
                  {r.name} <span className="muted">(비공개)</span>
                </span>
              ),
            )}
          </dd>
        </div>
        <div>
          <dt>기술</dt>
          <dd>
            <ul className="stack">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {p.highlights.length > 0 && (
        <section className="section">
          <h2 className="section-title">한 일</h2>
          <ul className="highlights big">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

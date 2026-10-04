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
  const list = visibleProjects();
  const index = list.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const p = list[index];
  const next = list[(index + 1) % list.length];

  return (
    <main className="page detail">
      <Link href="/#work" className="back">
        ← 프로젝트 목록
      </Link>

      <header className="detail-head">
        <p className="muted">{categoryLabels[p.category]}</p>
        <h1 className="detail-title">{p.name}</h1>
        <p className="lede">{p.summary}</p>
        {p.url && (
          <a className="cta" href={p.url} target="_blank" rel="noreferrer">
            사이트 열기 ↗
          </a>
        )}
      </header>

      <dl className="facts">
        <div>
          <dt>환경</dt>
          <dd>
            <span>{statusLabels[p.status]}</span>
            <span className="muted">{statusDescriptions[p.status]}</span>
          </dd>
        </div>
        <div>
          <dt>시기</dt>
          <dd>{p.period}</dd>
        </div>
        <div>
          <dt>배포 주소</dt>
          <dd>
            {p.url ? (
              <a href={p.url} target="_blank" rel="noreferrer">
                {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            ) : (
              <span className="muted">없음</span>
            )}
          </dd>
        </div>
        <div>
          <dt>저장소</dt>
          <dd>
            {p.repos.map((r) =>
              r.public ? (
                <a key={r.name} href={`https://github.com/yourjini/${r.name}`} target="_blank" rel="noreferrer">
                  {r.name} ↗
                </a>
              ) : (
                <span key={r.name}>
                  {r.name} <span className="muted">· 비공개</span>
                </span>
              ),
            )}
          </dd>
        </div>
        <div>
          <dt>기술</dt>
          <dd>
            {p.stack.join(", ")}
          </dd>
        </div>
      </dl>

      {p.highlights.length > 0 && (
        <section className="did">
          <h2 className="section-title">한 일</h2>
          <ul>
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      {next && next.slug !== p.slug && (
        <Link href={`/projects/${next.slug}/`} className="next">
          <span className="muted">다음 프로젝트</span>
          <span className="next-name">{next.name} →</span>
        </Link>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";
import { categoryLabels, statusLabels, type Category, type Project } from "@/content/projects";

type Filter = "all" | Category;

export default function ProjectBoard({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const used = (Object.keys(categoryLabels) as Category[]).filter((c) => projects.some((p) => p.category === c));
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="분류">
        {(["all", ...used] as Filter[]).map((f) => {
          const count = f === "all" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button key={f} type="button" data-filter={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === "all" ? "전체" : categoryLabels[f]}
              <span className="count">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="board">
        {projects.map((p) => (
          <li key={p.slug} className="card" data-cat={p.category} hidden={!shown.includes(p)}>
            <div className="meta">
              <span className={`status status-${p.status}`}>{statusLabels[p.status]}</span>
              <span>{categoryLabels[p.category]}</span>
              <span className="period">{p.period}</span>
            </div>
            <h3>{p.name}</h3>
            <p className="summary">{p.summary}</p>
            {p.highlights.length > 0 && (
              <ul className="highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <ul className="stack" aria-label="사용 기술">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="actions">
              {p.url ? (
                <a className="open" href={p.url} target="_blank" rel="noreferrer">
                  열어보기 ↗
                </a>
              ) : (
                <span className="muted">{p.status === "local" ? "PC에서 실행하는 도구" : "배포 주소 준비 중"}</span>
              )}
              {p.repos
                .filter((r) => r.public)
                .map((r) => (
                  <a key={r.name} href={`https://github.com/yourjini/${r.name}`} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                ))}
              {p.repos.every((r) => !r.public) && <span className="muted">비공개 저장소</span>}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { categoryLabels, type Category, type Project } from "@/content/projects";

type Filter = "all" | Category;

export default function ProjectBoard({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const used = (Object.keys(categoryLabels) as Category[]).filter((c) => projects.some((p) => p.category === c));
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="분류">
        {(["all", ...used] as Filter[]).map((f) => (
          <button key={f} type="button" data-filter={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === "all" ? "전체" : categoryLabels[f]}
          </button>
        ))}
      </div>

      <ul className="bento">
        {projects.map((p) => (
          <li
            key={p.slug}
            className={`tile cat-${p.category}${p.featured ? " tile-lg" : ""}`}
            data-cat={p.category}
            hidden={!shown.includes(p)}
          >
            <Link href={`/projects/${p.slug}/`} className="tile-link">
              <div className="tile-top">
                <span className="chip">{categoryLabels[p.category]}</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="tile-body">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                {p.featured && (
                  <ul className="tags" aria-label="사용 기술">
                    {p.stack.slice(0, 4).map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

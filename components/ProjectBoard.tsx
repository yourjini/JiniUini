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

      <ul className="list">
        {projects.map((p) => (
          <li key={p.slug} data-cat={p.category} hidden={!shown.includes(p)}>
            <Link href={`/projects/${p.slug}/`} className="row">
              <span className="row-name">{p.name}</span>
              <span className="row-summary">{p.summary}</span>
              <span className="row-meta">{categoryLabels[p.category]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

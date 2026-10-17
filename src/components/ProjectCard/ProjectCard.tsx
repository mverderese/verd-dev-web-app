import { Link } from "react-router";
import type { CaseStudy } from "~/content/schema";
import { formatYears } from "~/lib/format";
import styles from "./ProjectCard.module.css";

export function ProjectCardGrid({ studies }: { studies: readonly CaseStudy[] }) {
  return (
    <ul className={styles.grid}>
      {studies.map((study) => (
        <li key={study.slug}>
          <ProjectCard study={study} />
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ study }: { study: CaseStudy }) {
  return (
    <Link to={`/work/${study.slug}`} className={styles.card}>
      <span className={styles.meta}>
        <span>{formatYears(study.years)}</span>
        <span>{study.category}</span>
      </span>
      <span className={styles.name}>{study.name}</span>
      <span className={styles.role}>{study.role}</span>
      <span className={styles.summary}>{study.summary}</span>
    </Link>
  );
}

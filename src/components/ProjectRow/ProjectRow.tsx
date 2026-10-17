import { Link } from "react-router";
import type { CaseStudy } from "~/content/schema";
import { formatYears } from "~/lib/format";
import styles from "./ProjectRow.module.css";

export function ProjectRowList({ studies }: { studies: readonly CaseStudy[] }) {
  return (
    <ul className={styles.list}>
      {studies.map((study) => (
        <li key={study.slug}>
          <Link to={`/work/${study.slug}`} className={styles.row}>
            <span className={styles.title}>
              <span className={styles.name}>{study.name}</span>
              <span className={styles.meta}>
                {formatYears(study.years)} · {study.engagement}
              </span>
            </span>
            <span className={styles.role}>{study.role}</span>
            <span className={styles.summary}>{study.summary}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

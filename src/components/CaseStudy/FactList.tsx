import type { CaseStudy } from "~/content/schema";
import styles from "./CaseStudy.module.css";

export function FactList({ facts }: { facts: CaseStudy["facts"] }) {
  return (
    <dl className={styles.facts}>
      {facts.map(({ label, value }) => (
        <div key={label} className={styles.fact}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

import type { CaseStudy } from "~/content/schema";
import styles from "./CaseStudy.module.css";

type PathStep = NonNullable<CaseStudy["path"]>[number];

export function PathList({ steps }: { steps: readonly PathStep[] }) {
  return (
    <ol className={styles.path}>
      {steps.map((step) => (
        <li key={step.title} className={step.current ? `${styles.step} ${styles.current}` : styles.step}>
          <span className={styles.stepDates}>{step.dates}</span>
          <span className={styles.stepTitle}>{step.title}</span>
          <span className={styles.stepBody}>{step.body}</span>
        </li>
      ))}
    </ol>
  );
}

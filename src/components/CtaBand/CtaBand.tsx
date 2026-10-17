import type { ReactNode } from "react";
import { Container } from "~/components/Container/Container";
import styles from "./CtaBand.module.css";

type CtaBandProps = {
  eyebrow?: string;
  heading: string;
  actions: ReactNode;
};

export function CtaBand({ eyebrow, heading, actions }: CtaBandProps) {
  return (
    <section className={styles.band} aria-label={heading}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        {actions}
      </Container>
    </section>
  );
}

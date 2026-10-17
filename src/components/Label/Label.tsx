import type { ElementType, ReactNode } from "react";
import styles from "./Label.module.css";

type LabelProps = {
  children: ReactNode;
  tone?: "muted" | "accent";
  as?: ElementType;
  className?: string;
  id?: string;
};

/** Monospace eyebrow used for section numbers, dates and metadata. */
export function Label({ children, tone = "muted", as: Component = "p", className, id }: LabelProps) {
  return (
    <Component id={id} className={[styles.label, styles[tone], className].filter(Boolean).join(" ")}>
      {children}
    </Component>
  );
}

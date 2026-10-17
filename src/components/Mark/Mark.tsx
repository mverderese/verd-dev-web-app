import styles from "./Mark.module.css";

type MarkProps = {
  size?: "sm" | "md" | "lg";
  /** Inverted mark: white square with accent letters, for use on accent backgrounds. */
  inverted?: boolean;
};

/** The "mv" mark. Decorative: pair it with visible text. */
export function Mark({ size = "sm", inverted = false }: MarkProps) {
  return (
    <span aria-hidden="true" className={`${styles.mark} ${styles[size]} ${inverted ? styles.inverted : ""}`}>
      mv
    </span>
  );
}

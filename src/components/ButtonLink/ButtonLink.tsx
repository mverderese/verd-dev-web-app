import type { ReactNode } from "react";
import { SmartLink } from "~/components/SmartLink/SmartLink";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverse" | "inverseOutline";
  fullWidthOnMobile?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", fullWidthOnMobile = false }: ButtonLinkProps) {
  const className = [styles.button, styles[variant], fullWidthOnMobile ? styles.fullWidthOnMobile : ""].join(" ");
  return (
    <SmartLink href={href} className={className}>
      {children}
    </SmartLink>
  );
}

export function ButtonGroup({ children }: { children: ReactNode }) {
  return <div className={styles.group}>{children}</div>;
}

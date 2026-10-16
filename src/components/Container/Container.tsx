import type { ComponentPropsWithoutRef, ElementType } from "react";
import styles from "./Container.module.css";

type ContainerProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** Centers content at the site's max width with responsive side gutters. */
export function Container<T extends ElementType = "div">({ as, className, ...rest }: ContainerProps<T>) {
  const Component: ElementType = as ?? "div";
  return <Component className={className ? `${styles.container} ${className}` : styles.container} {...rest} />;
}

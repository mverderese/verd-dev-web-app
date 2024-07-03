import { ReactNode } from "react";
import classNames from "classnames";

export type ULProps = {
  children?: ReactNode;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};

export default function UL({ children, additionalClassNames }: ULProps) {
  return <ul className={classNames(additionalClassNames)}>{children}</ul>;
}

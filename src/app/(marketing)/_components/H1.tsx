import { ReactNode } from "react";
import classNames from "classnames";

export type H1Props = {
  children: ReactNode;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};
export default function H1({ children, additionalClassNames }: H1Props) {
  return (
    <h1 className={classNames("text-white text-4xl md:text-[72px] font-archivo", additionalClassNames)}>{children}</h1>
  );
}

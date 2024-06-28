import { ReactNode } from "react";
import classNames from "classnames";

export type H1Props = {
  children: ReactNode;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};
export default function H1({ children, additionalClassNames }: H1Props) {
  return (
    <h1 className={classNames("font-normal text-5xl md:text-7xl leading-none mb-3 lg:mb-8", additionalClassNames)}>
      {children}
    </h1>
  );
}

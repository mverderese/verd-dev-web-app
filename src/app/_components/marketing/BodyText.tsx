import { ReactNode } from "react";
import classNames from "classnames";

export type BodyTextProps = {
  children?: ReactNode;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};

export default function BodyText({ children, additionalClassNames }: BodyTextProps) {
  return (
    <div className={classNames("font-normal text-gray-500 text-lg text-left", additionalClassNames)}>{children}</div>
  );
}

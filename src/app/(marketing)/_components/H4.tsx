import { ReactNode } from "react";
import classNames from "classnames";

export type H4Props = {
  children: ReactNode;
  narrowBottom?: boolean;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};

export default function H4({ children, narrowBottom, additionalClassNames }: H4Props) {
  return (
    <h4 className={classNames("text-gray-700 text-lg sm:text-xl", { "mb-4": !narrowBottom }, additionalClassNames)}>
      {children}
    </h4>
  );
}

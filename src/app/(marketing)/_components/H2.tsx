import { ReactNode } from "react";
import classNames from "classnames";

export type H2Props = {
  children: ReactNode;
  narrowBottom?: boolean;
  marginOverride?: string;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};

export default function H2({ children, narrowBottom, marginOverride, additionalClassNames }: H2Props) {
  return (
    <h2
      className={classNames(
        "font-medium text-gray-700 text-[26px] md:text-4xl",
        {
          [marginOverride ?? "mb-5"]: !narrowBottom,
        },
        additionalClassNames,
      )}
    >
      {children}
    </h2>
  );
}

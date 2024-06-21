import { ReactNode } from "react";
import classNames from "classnames";

export type H2Props = {
  children: ReactNode;
  narrowBottom?: boolean;
};

export default function H2({ children, narrowBottom }: H2Props) {
  return (
    <h2 className={classNames("font-medium text-gray-700 text-3xl md:text-4xl", { "mb-5": !narrowBottom })}>
      {children}
    </h2>
  );
}

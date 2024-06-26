import { ReactNode } from "react";
import classNames from "classnames";

export type H4Props = {
  children: ReactNode;
  narrowBottom?: boolean;
};

export default function H4({ children, narrowBottom }: H4Props) {
  return (
    <h4 className={classNames("font-medium text-gray-700 text-lg sm:text-xl", { "mb-4": !narrowBottom })}>
      {children}
    </h4>
  );
}

import { ReactNode } from "react";
import classNames from "classnames";

export type BodyParagraphProps = {
  children?: ReactNode;
  narrowBottom?: boolean;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};
export default function BodyParagraph({ children, narrowBottom, additionalClassNames }: BodyParagraphProps) {
  return <p className={classNames("pr-3", narrowBottom ? "pb-3" : "pb-6", additionalClassNames)}>{children}</p>;
}

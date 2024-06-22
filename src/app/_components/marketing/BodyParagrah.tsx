import { ReactNode } from "react";
import classNames from "classnames";

export type BodyParagraphProps = {
  children: ReactNode;
  narrowBottom?: boolean;
};
export default function BodyParagraph({ children, narrowBottom }: BodyParagraphProps) {
  return <p className={classNames("pr-3", narrowBottom ? "pb-3" : "pb-6")}>{children}</p>;
}

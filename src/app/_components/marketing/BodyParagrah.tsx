import { ReactNode } from "react";

export default function BodyParagraph({ children }: { children: ReactNode }) {
  return <p className="pb-3 pr-3">{children}</p>;
}

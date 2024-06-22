import { ReactNode } from "react";

export default function BodyParagraph({ children }: { children: ReactNode }) {
  return <p className="pb-6 pr-3">{children}</p>;
}

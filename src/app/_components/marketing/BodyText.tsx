import { ReactNode } from "react";

export default function BodyText({ children }: { children: ReactNode }) {
  return <div className="font-normal text-gray-500 text-md text-left">{children}</div>;
}

import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
  return <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">{children}</h1>;
}

import { ReactNode } from "react";

export default function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">{children}</h2>;
}

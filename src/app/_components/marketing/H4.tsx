import { ReactNode } from "react";

export default function H4({ children }: { children: ReactNode }) {
  return <h4 className="font-medium text-gray-700 text-xl mb-4">{children}</h4>;
}

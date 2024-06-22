import { ReactNode } from "react";

export default function Subtitle({ children }: { children: ReactNode }) {
  return <p className="font-normal text-gray-500 text-xs md:text-base mb-20">{children}</p>;
}

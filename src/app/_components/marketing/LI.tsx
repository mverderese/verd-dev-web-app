import { ReactNode } from "react";

export type LIProps = {
  children: ReactNode;
  title?: string;
};
export default function LI({ children, title }: LIProps) {
  const TitleSpan = () => {
    if (!title) return null;
    return <span className="font-bold">{title}: </span>;
  };

  return (
    <li className="mb-1.5">
      <TitleSpan />
      {children}
    </li>
  );
}

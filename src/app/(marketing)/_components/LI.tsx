import { ReactNode } from "react";

export type LIProps = {
  children: ReactNode;
  title?: string;
};
export default function LI({ children, title }: LIProps) {
  const TitleSpan = () => {
    if (!title) return null;
    return <span className="font-dm-sans-semibold">{title}: </span>;
  };

  return (
    <li className="mb-2">
      <TitleSpan />
      {children}
    </li>
  );
}

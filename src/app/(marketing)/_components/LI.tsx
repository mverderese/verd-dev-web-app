import { ReactNode } from "react";
import classNames from "classnames";

export type LIProps = {
  children: ReactNode;
  title?: string;
  narrow?: boolean;
};
export default function LI({ children, title, narrow }: LIProps) {
  const TitleSpan = () => {
    if (!title) return null;
    return <p className="font-roboto-medium text-[20px] sm:text-[22px] mb-2">{title}</p>;
  };

  return (
    <li className={classNames("text-[16px]", narrow ? "mb-1" : "mb-4")}>
      <TitleSpan />
      {children}
    </li>
  );
}

import classNames from "classnames";

export type SectionProps = {
  children?: React.ReactNode;
  darkBg?: boolean;
  narrow?: boolean;
};

export default function Section({ children, darkBg, narrow }: SectionProps) {
  return (
    <section className={classNames({ "py-10": !narrow }, { "md:py-16": !narrow }, { "bg-gray-200": darkBg })}>
      <div className={classNames("container", "max-w-screen-xl", "mx-auto", "px-4")}>{children}</div>
    </section>
  );
}

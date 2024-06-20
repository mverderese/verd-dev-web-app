import classNames from "classnames";

export type SectionProps = {
  children?: React.ReactNode;
  darkBg?: boolean;
};

export default function Section({ children, darkBg }: SectionProps) {
  return (
    <section className={classNames("py-10", "md:py-16", { "bg-gray-200": darkBg })}>
      <div className={classNames("container", "max-w-screen-xl", "mx-auto", "px-4")}>{children}</div>
    </section>
  );
}

import classNames from "classnames";

export type SectionProps = {
  children?: React.ReactNode;
  darkBg?: boolean;
  narrowTop?: boolean;
  narrowBottom?: boolean;
};

export default function Section({ children, darkBg, narrowTop, narrowBottom }: SectionProps) {
  return (
    <section
      className={classNames(
        { "pt-10": !narrowTop },
        { "md:pt-16": !narrowTop },
        { "pb-10": !narrowBottom },
        { "md:pb-16": !narrowBottom },
        { "bg-gray-200": darkBg },
      )}
    >
      <div className={classNames("container", "max-w-screen-xl", "mx-auto", "px-4")}>{children}</div>
    </section>
  );
}

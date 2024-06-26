import classNames from "classnames";

export type SectionProps = {
  children?: React.ReactNode;
  darkBg?: boolean;
  narrowTop?: boolean;
  narrowBottom?: boolean;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};

export default function Section({ children, darkBg, narrowTop, narrowBottom, additionalClassNames }: SectionProps) {
  return (
    <section
      className={classNames(
        { "pt-10 md:pt-16": !narrowTop },
        { "pb-10 md:pb-16": !narrowBottom },
        { "bg-gray-200": darkBg },
        additionalClassNames,
      )}
    >
      <div className={classNames("container", "max-w-screen-xl", "mx-auto", "px-4")}>{children}</div>
    </section>
  );
}

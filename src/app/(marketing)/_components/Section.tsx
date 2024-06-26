import classNames from "classnames";

export type SectionProps = {
  children?: React.ReactNode;
  darkBg?: boolean;
  bgOverride?: classNames.Argument | classNames.ArgumentArray;
  narrowTop?: boolean;
  narrowBottom?: boolean;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
};

export default function Section({
  children,
  darkBg,
  narrowTop,
  narrowBottom,
  additionalClassNames,
  bgOverride,
}: SectionProps) {
  return (
    <section
      className={classNames(
        { "pt-10 md:pt-16": !narrowTop },
        { "pb-10 md:pb-16": !narrowBottom },
        bgOverride || (darkBg ? "bg-gray-200" : "bg-gray-100"),
        additionalClassNames,
      )}
    >
      <div className={classNames("container", "max-w-screen-xl", "mx-auto", "px-4")}>{children}</div>
    </section>
  );
}

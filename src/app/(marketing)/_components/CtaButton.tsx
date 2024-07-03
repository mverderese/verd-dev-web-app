import classNames from "classnames";
export type CtaButtonProps = {
  link?: string;
  children: React.ReactNode;
  inverted?: boolean;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
  newTab?: boolean;
  widthOverride?: string;
};

export default function CtaButton({
  link,
  children,
  inverted,
  additionalClassNames,
  newTab,
  widthOverride,
}: CtaButtonProps) {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : ""}
      className={classNames(
        "px-7 mx-2 h-[44px] content-center font-archivo",
        "transition ease-linear duration-50 text-[12px] sm:text-[16px] rounded-lg hover:opacity-60",
        widthOverride || "w-[217px]",
        inverted ? "bg-astral text-wheatfield border-4 border-wheatfield" : "bg-wheatfield text-astral",
        additionalClassNames,
      )}
    >
      {children}
    </a>
  );
}

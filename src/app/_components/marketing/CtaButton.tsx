import classNames from "classnames";
export type CtaButtonProps = {
  link?: string;
  children: React.ReactNode;
  inverted?: boolean;
  additionalClassNames?: classNames.Argument | classNames.ArgumentArray;
  newTab?: boolean;
};

export default function CtaButton({ link, children, inverted, additionalClassNames, newTab }: CtaButtonProps) {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : ""}
      className={classNames(
        "px-7 mx-2 font-medium md:font-semibold w-[161px] h-[44px] content-center",
        "transition ease-linear duration-50 text-[14px] rounded-full hover:opacity-60",
        inverted ? "bg-astral text-wheatfield border-2 border-wheatfield" : "bg-wheatfield text-astral",
        additionalClassNames,
      )}
    >
      {children}
    </a>
  );
}

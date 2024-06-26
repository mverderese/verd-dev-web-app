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
        "px-7 py-3 mx-6 md:px-9 md:py-4 w-[200px] rounded-md",
        "font-medium md:font-semibold text-gray-50 text-sm ",
        "transition ease-linear duration-50  hover:opacity-50",
        { "bg-robins-egg-blue text-gray-50": !inverted },
        { "bg-gray-50 text-gray-700 border-2 border-gray-700": inverted },
        additionalClassNames,
      )}
    >
      {children}
    </a>
  );
}

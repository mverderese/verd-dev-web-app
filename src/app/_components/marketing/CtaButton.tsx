import classNames from "classnames";
export type CtaButtonProps = {
  link?: string;
  children: React.ReactNode;
  inverted?: boolean;
};

export default function CtaButton({ link, children, inverted }: CtaButtonProps) {
  return (
    <a
      href={link}
      className={classNames(
        "px-7",
        "py-3",
        "mx-6",
        "md:px-9",
        "md:py-4",
        "font-medium",
        "md:font-semibold",
        { "bg-gray-700": !inverted },
        { "bg-gray-50": inverted },
        { "text-gray-50": !inverted },
        { "text-gray-700": inverted },
        { "border-2": inverted },
        { "border-gray-700": inverted },
        "text-gray-50",
        "text-sm",
        "rounded-md",
        { "hover:bg-gray-200": !inverted },
        { "hover:bg-gray-200": inverted },
        { "hover:text-gray-700": !inverted },
        "transition",
        "ease-linear",
        "duration-200",
      )}
    >
      {children}
    </a>
  );
}

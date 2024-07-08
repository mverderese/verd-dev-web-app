export type TextLinkProps = {
  link?: string;
  children?: React.ReactNode;
  newTab?: boolean;
};
export default function TextLink({ link, children, newTab }: TextLinkProps) {
  return (
    <a className="underline font-dm-sans-semibold" href={link} target={newTab ? "_blank" : ""}>
      {children}
    </a>
  );
}

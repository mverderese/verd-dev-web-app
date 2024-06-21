export type TextLinkProps = {
  link?: string;
  children?: React.ReactNode;
};
export default function TextLink({ link, children }: TextLinkProps) {
  return (
    <a className="underline font-semibold" href={link}>
      {children}
    </a>
  );
}

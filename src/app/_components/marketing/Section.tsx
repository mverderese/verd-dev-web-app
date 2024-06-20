export default function Section({ children }: { children?: React.ReactNode }) {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">{children}</div>
    </section>
  );
}

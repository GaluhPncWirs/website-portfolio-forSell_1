export default function SectionContent({
  children,
  idSection,
}: {
  children: React.ReactNode;
  idSection: string;
}) {
  return (
    <section id={idSection}>
      <div className="mt-10">{children}</div>
    </section>
  );
}

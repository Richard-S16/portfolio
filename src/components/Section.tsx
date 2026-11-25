export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section wrap ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <h2 className="section-heading" id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}

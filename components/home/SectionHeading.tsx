export function SectionHeading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const labels: Record<string, string> = {
    "01": "Selected work",
    "02": "Engineering capabilities",
    "03": "Career & collaboration",
    "04": "The journal",
    "05": "Beyond code",
  };
  return (
    <div className="section-heading">
      <div>
        <p className="section-index">
          {number} / {labels[number] || title}
        </p>
        <h2>{title}</h2>
      </div>
      <div className="section-description">{children}</div>
    </div>
  );
}

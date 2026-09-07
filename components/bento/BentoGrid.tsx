import type { ReactNode, CSSProperties } from "react";
export function BentoGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`bento-grid ${className}`}>{children}</div>;
}
export function BentoCard({
  children,
  span = 6,
  className = "",
  variant = "standard",
}: {
  children: ReactNode;
  span?: number;
  className?: string;
  variant?: "standard" | "quiet" | "featured" | "media";
}) {
  return (
    <article
      className={`bento-card bento-${variant} ${className}`}
      style={{ "--span": span } as CSSProperties}
    >
      {children}
    </article>
  );
}

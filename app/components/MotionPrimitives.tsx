import type { ElementType, ReactNode } from "react";

type MotionHeadingProps = {
  as: ElementType;
  children: ReactNode;
  className?: string;
};

export function MotionHeading({
  as: Heading,
  children,
  className = "",
}: MotionHeadingProps) {
  return (
    <Heading className={`motion-heading ${className}`.trim()}>
      <span className="motion-heading-inner">{children}</span>
    </Heading>
  );
}

export function ButtonContent({ label }: { label: string }) {
  return <span className="button-label">{label}</span>;
}

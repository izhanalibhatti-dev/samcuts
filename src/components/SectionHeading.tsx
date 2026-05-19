import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-gold">
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
        </div>
      )}
      <h2 className="text-balance font-display text-4xl md:text-5xl lg:text-6xl leading-[1] mb-5">
        {title}
      </h2>
      {children && (
        <p className="text-muted-foreground leading-relaxed text-[15px] md:text-base">{children}</p>
      )}
    </div>
  );
}

import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderMediaProps = {
  title: string;
  note: string;
  className?: string;
};

export function PlaceholderMedia({ title, note, className }: PlaceholderMediaProps) {
  return (
    <div
      className={cn(
        "premium-panel luxury-ring relative overflow-hidden",
        className,
      )}
    >
      <div className="premium-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gold/8 to-transparent" />
      <div className="absolute bottom-6 left-6 h-16 w-16 rounded-full border border-gold/20" />
      <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-gold/10" />
      <div className="relative flex h-full min-h-[240px] flex-col items-center justify-center px-8 py-12 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-background/70">
          <Camera className="text-gold/70" size={30} strokeWidth={1.2} />
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold/80">Reserved For Real Photography</div>
        <div className="mt-4 font-display text-2xl md:text-3xl text-foreground">{title}</div>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

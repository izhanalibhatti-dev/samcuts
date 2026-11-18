import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="transition inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background/90 px-4 text-xs font-medium uppercase tracking-[0.16em] text-foreground hover:border-gold hover:text-gold duration-200 hover:scale-[1.04] active:scale-[0.97]"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

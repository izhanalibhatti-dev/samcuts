import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/72 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between gap-5 lg:gap-8">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="Sam's Cuts barber shop logo Burnley"
            className="h-12 w-12 object-contain shrink-0"
            whileHover={{ rotate: [0, -4, 4, 0], scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <span className="hidden leading-none sm:block">
            <span className="block font-display text-xl text-foreground">Sam's Cuts</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-gold">
              Burnley Barber
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 rounded-full border border-border/80 bg-background/70 px-8 py-3 shadow-soft">
          {links.map((l, i) => {
            const isActive = pathname === l.to;

            return (
              <motion.div
                key={l.to}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
              >
                <Link
                  to={l.to}
                  className={cn(
                    "group relative text-sm uppercase tracking-[0.2em] transition-colors",
                    isActive ? "text-gold" : "text-muted-foreground hover:text-gold",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <motion.a
            href="tel:+447413536353"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/80 bg-gold/6 px-5 py-3 text-xs uppercase tracking-[0.22em] text-gold hover:bg-gold hover:text-background transition-colors"
          >
            <Phone size={14} /> Call To Book
          </motion.a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:hidden border-t border-border bg-background/95 overflow-hidden backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => {
                const isActive = pathname === l.to;

                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-sm uppercase tracking-[0.18em]",
                      isActive ? "text-gold" : "text-muted-foreground hover:text-gold",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href="tel:+447413536353"
                className="inline-flex w-fit items-center gap-2 px-5 py-2.5 border border-gold text-gold text-xs uppercase tracking-[0.2em]"
              >
                <Phone size={14} /> Call To Book
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

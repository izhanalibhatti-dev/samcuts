import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20 pb-20 md:pb-0">{children}</main>
      <a
        href="tel:+447413536353"
        className="fixed inset-x-4 bottom-4 z-40 flex min-w-0 items-center justify-center gap-2 rounded-full border border-gold bg-background px-4 py-4 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-gold shadow-gold md:hidden"
      >
        <Phone size={16} />
        Walk-ins welcome. Pre-book +£5
      </a>
      <Footer />
    </div>
  );
}

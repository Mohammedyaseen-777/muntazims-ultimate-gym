import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, waLink } from "@/data/gym";
import { Logo } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#home" aria-label="Muntazim's Ultimate Gym home"><Logo /></a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-7">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-lime px-4! py-2.5! text-xs!">Join the Gym</a>
          <button
            className="rounded-md p-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-5 py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl uppercase hover:text-primary">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

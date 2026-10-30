import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/gym";

export function WhatsAppButton({
  message,
  children = "Enquire on WhatsApp",
  variant = "lime",
  className = "",
}: { message?: string; children?: ReactNode; variant?: "lime" | "ghost"; className?: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "lime" ? "btn-lime" : "btn-ghost"} ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {children}
    </a>
  );
}

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary font-display text-xl text-primary-foreground" aria-hidden>
        MU
      </span>
      <span className="font-display text-lg uppercase leading-none tracking-wide">
        Muntazim's<span className="block text-primary">Ultimate Gym</span>
      </span>
    </span>
  );
}

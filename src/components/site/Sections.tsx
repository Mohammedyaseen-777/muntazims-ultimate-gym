import { useEffect, useState } from "react";
import {
  ChevronDown, Star, Dumbbell, Weight, HeartPulse, Settings2, UserRound, Leaf,
  MapPin, Users, MessageSquare, Phone, Navigation, Clock, X, ChevronLeft, ChevronRight, Check,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import gymPhoto from "@/assets/weights.jpg";
import { GYM, LINKS, FACILITIES, PROGRAMS, PLANS, REVIEWS, GALLERY, FAQS, NAV, waLink, type IconName } from "@/data/gym";
import { WhatsAppButton, SectionHead, Logo } from "./ui";

const ICONS: Record<IconName, typeof Dumbbell> = {
  dumbbell: Dumbbell, weight: Weight, heart: HeartPulse, settings: Settings2, user: UserRound, leaf: Leaf,
};

const Wrap = ({ id, children, alt }: { id: string; children: React.ReactNode; alt?: boolean }) => (
  <section id={id} className={alt ? "bg-card" : ""}>
    <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">{children}</div>
  </section>
);

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img src={hero} alt="Athlete performing a heavy barbell deadlift in a dark gym" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10 md:bg-gradient-to-r md:via-background/80 md:to-background/20" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-24">
        <p className="eyebrow rise mb-5">Gym in Vishala, Ahmedabad · {GYM.nameGu}</p>
        <h1 className="rise max-w-4xl text-5xl sm:text-7xl lg:text-8xl" style={{ animationDelay: ".1s" }}>
          Your Fitness. <span className="text-primary">Your Strength.</span> Your Transformation.
        </h1>
        <p className="rise mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: ".2s" }}>
          Take the next step toward a stronger, healthier you at Muntazim's Ultimate Gym, Vishala, Ahmedabad.
        </p>
        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".3s" }}>
          <WhatsAppButton>Enquire on WhatsApp</WhatsAppButton>
          <a href="#facilities" className="btn-ghost">Explore Our Gym</a>
        </div>
        {GYM.showRating && (
          <p className="rise mt-8 flex items-center gap-2 text-sm text-muted-foreground" style={{ animationDelay: ".4s" }}>
            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden />
            Rated <strong className="text-foreground">{GYM.rating}/5</strong> on Google · {GYM.reviewCount} Reviews
          </p>
        )}
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary">
        <ChevronDown />
      </a>
    </section>
  );
}

export function About() {
  const points = ["Strength and fitness development", "A range of exercise equipment", "Support for beginners and experienced members", "A focus on consistency and progress"];
  return (
    <Wrap id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="About us" title="More than a gym. Your fitness journey starts here." />
          <p className="text-lg text-muted-foreground">
            Muntazim's Ultimate Gym in Vishala, Ahmedabad is a welcoming place for people working toward their fitness goals. Whether you're picking up weights for the first time or have trained for years, you'll find space to build strength, stay consistent and keep progressing.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />{p}</li>
            ))}
          </ul>
        </div>
        <figure className="relative">
          <img src={gymPhoto} alt="Dumbbell rack and weight plates (sample image)" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <figcaption className="absolute left-3 top-3 rounded bg-overlay px-2 py-1 text-xs text-muted-foreground">Sample image — real gym photos coming soon</figcaption>
        </figure>
      </div>
    </Wrap>
  );
}

export function Facilities() {
  return (
    <Wrap id="facilities" alt>
      <SectionHead eyebrow="Facilities" title="Built for every workout." intro="Please call or WhatsApp to confirm current equipment and availability." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.filter((f) => f.enabled).map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <article key={f.title} className="card-dark overflow-hidden bg-background!">
              {f.image && <img src={f.image} alt={`${f.title} (sample image)`} loading="lazy" width={1024} height={768} className="aspect-[16/9] w-full object-cover opacity-80" />}
              <div className="p-6">
                <Icon className="mb-4 h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden />
                <h3 className="text-2xl">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrap>
  );
}

export function Training() {
  return (
    <Wrap id="training">
      <SectionHead eyebrow="Training" title="Find your training style." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.filter((p) => p.enabled).map((p, i) => (
          <article key={p.title} className="card-dark flex flex-col p-7">
            <span className="font-display text-5xl text-primary/30">0{i + 1}</span>
            <h3 className="mt-3 text-2xl">{p.title}</h3>
            <p className="mt-2 flex-1 text-muted-foreground">{p.text}</p>
            <WhatsAppButton variant="ghost" className="mt-6" message={`Hello Muntazim's Ultimate Gym! I'd like to know more about ${p.title}.`}>Ask About Training</WhatsAppButton>
          </article>
        ))}
      </div>
    </Wrap>
  );
}

export function WhyUs() {
  const items = [
    { icon: Dumbbell, t: "Range of equipment", d: "Equipment for strength, weights and cardio work." },
    { icon: Users, t: "Every fitness level", d: "A welcoming environment for beginners and regulars." },
    { icon: MapPin, t: "Convenient location", d: "Easy to reach in Vishala, Ahmedabad." },
    { icon: MessageSquare, t: "Ask about training", d: "Enquire anytime about available training options." },
  ];
  return (
    <Wrap id="why" alt>
      <SectionHead eyebrow="Why choose us" title="Your goals. Your effort. Your progress." />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="bg-card p-8">
            <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden />
            <h3 className="mt-5 text-xl">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

export function Gallery() {
  const cats = ["All", ...Array.from(new Set(GALLERY.map((g) => g.category)))];
  const [cat, setCat] = useState("All");
  const [idx, setIdx] = useState<number | null>(null);
  const items = GALLERY.filter((g) => cat === "All" || g.category === cat);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % items.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, items.length]);

  return (
    <Wrap id="gallery">
      <SectionHead eyebrow="Gallery" title="Inside the gym." intro="Images marked “sample” are illustrations, not photos of our gym. Real photos coming soon." />
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((g, i) => (
          <button key={g.alt} onClick={() => setIdx(i)} className="group relative overflow-hidden rounded-xl" aria-label={`Open image: ${g.alt}`}>
            <img src={g.src} alt={g.alt} loading="lazy" width={1024} height={768} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {g.isPlaceholder && <span className="absolute left-2 top-2 rounded bg-overlay px-2 py-0.5 text-xs text-muted-foreground">Sample</span>}
          </button>
        ))}
      </div>
      {idx !== null && items[idx] && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 grid place-items-center bg-background/95 p-4 animate-in fade-in" onClick={() => setIdx(null)}>
          <button autoFocus aria-label="Close" className="absolute right-4 top-4 p-2 hover:text-primary" onClick={() => setIdx(null)}><X /></button>
          <button aria-label="Previous image" className="absolute left-2 p-2 hover:text-primary" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + items.length) % items.length); }}><ChevronLeft className="h-8 w-8" /></button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img src={items[idx].src} alt={items[idx].alt} className="max-h-[80vh] rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">{items[idx].alt}</figcaption>
          </figure>
          <button aria-label="Next image" className="absolute right-2 p-2 hover:text-primary" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % items.length); }}><ChevronRight className="h-8 w-8" /></button>
        </div>
      )}
    </Wrap>
  );
}

export function Reviews() {
  return (
    <Wrap id="reviews" alt>
      <SectionHead eyebrow="Reviews" title="What our members say" />
      <div className="card-dark flex flex-col items-start gap-6 bg-background! p-8 md:flex-row md:items-center md:justify-between">
        {GYM.showRating ? (
          <div className="flex items-center gap-5">
            <span className="font-display text-7xl text-primary">{GYM.rating}</span>
            <div>
              <div className="flex gap-1" aria-label={`${GYM.rating} out of 5 stars`}>
                {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-5 w-5 fill-primary text-primary" aria-hidden />)}
              </div>
              <p className="mt-1 text-muted-foreground">{GYM.reviewCount} reviews on Google</p>
            </div>
          </div>
        ) : <p className="text-muted-foreground">See what members say on Google.</p>}
        <a href={LINKS.reviews} target="_blank" rel="noopener noreferrer" className="btn-lime">Read Google Reviews</a>
      </div>
      {REVIEWS.length > 0 && (
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <blockquote key={r.author + r.text.slice(0, 10)} className="card-dark p-6">
              <p>“{r.text}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">— {r.author}, Google review</footer>
            </blockquote>
          ))}
        </div>
      )}
    </Wrap>
  );
}

export function Membership() {
  return (
    <Wrap id="membership">
      <SectionHead eyebrow="Membership" title="Your fitness journey starts here." intro="Contact us for current membership plans and pricing." />
      <div className="grid gap-5 md:grid-cols-3">
        {PLANS.map((p, i) => (
          <article key={p.name} className={`card-dark flex flex-col p-8 ${i === 1 ? "border-primary/50!" : ""}`}>
            <p className="eyebrow">{p.duration}</p>
            <h3 className="mt-2 text-3xl">{p.name} Membership</h3>
            <p className="mt-6 font-display text-4xl">{p.price || <span className="font-sans text-base font-semibold text-muted-foreground">Contact us for current pricing</span>}</p>
            {p.includes.length > 0 && (
              <ul className="mt-6 space-y-2">{p.includes.map((x) => <li key={x} className="flex gap-2"><Check className="h-5 w-5 text-primary" aria-hidden />{x}</li>)}</ul>
            )}
            {p.terms && <p className="mt-4 text-xs text-muted-foreground">{p.terms}</p>}
            <div className="flex-1" />
            <WhatsAppButton variant={i === 1 ? "lime" : "ghost"} className="mt-8" message={`Hello Muntazim's Ultimate Gym! I'd like details about the ${p.name} membership.`}>Enquire Now</WhatsAppButton>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <WhatsAppButton message="Hello Muntazim's Ultimate Gym! Please share your current membership plans and pricing.">Get Membership Details</WhatsAppButton>
      </div>
    </Wrap>
  );
}

export function Contact() {
  return (
    <Wrap id="contact" alt>
      <SectionHead eyebrow="Contact" title="Let's start your fitness journey." />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-3xl">{GYM.name}</h3>
          <p className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden /><span>{GYM.address}</span></p>
          <p className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden /><a href={LINKS.tel} className="hover:text-primary">{GYM.phoneDisplay}</a></p>
          <p className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden /><span>Listed closing time: {GYM.closingTime}. Call us for the full weekly schedule.</span></p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <a href={LINKS.tel} className="btn-ghost"><Phone className="h-4 w-4" aria-hidden />Call the Gym</a>
            <WhatsAppButton>Chat on WhatsApp</WhatsAppButton>
            <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Navigation className="h-4 w-4" aria-hidden />Get Directions</a>
          </div>
        </div>
        <iframe title="Map showing Muntazim's Ultimate Gym in Vishala, Ahmedabad" src={LINKS.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-2xl border border-border lg:h-full lg:min-h-96" />
      </div>
    </Wrap>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Wrap id="faq">
      <SectionHead eyebrow="FAQ" title="Questions, answered." />
      <div className="max-w-3xl divide-y divide-border border-y border-border">
        {FAQS.map((f, i) => (
          <div key={f.q}>
            <h3 className="font-sans! normal-case!">
              <button id={`faq-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`} onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold hover:text-primary">
                {f.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} aria-hidden />
              </button>
            </h3>
            <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-${i}`} hidden={open !== i} className="pb-5 text-muted-foreground">{f.a}</div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">A welcoming gym in Vishala, Ahmedabad for strength, weight training and general fitness.</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-primary">{n.label}</a></li>)}
          </ul>
        </nav>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-4">Visit</p>
          <p>{GYM.address}</p>
          <p><a href={LINKS.tel} className="hover:text-primary">{GYM.phoneDisplay}</a></p>
          <p><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp enquiry</a></p>
          <p><a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Google Maps directions</a></p>
          <p><a href={LINKS.reviews} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Google reviews</a></p>
        </div>
      </div>
      <p className="border-t border-border py-6 pb-24 text-center text-xs text-muted-foreground md:pb-6">© 2026 Muntazim's Ultimate Gym. All rights reserved.</p>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="btn-lime fixed inset-x-4 bottom-4 z-40 shadow-2xl md:inset-x-auto md:right-6 md:bottom-6 md:rounded-full md:p-4!">
      <MessageSquare className="h-5 w-5" aria-hidden /><span className="md:hidden">Chat on WhatsApp</span>
    </a>
  );
}

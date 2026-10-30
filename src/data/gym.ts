/**
 * ============================================================
 *  EDIT THIS FILE TO UPDATE THE WEBSITE CONTENT
 * ============================================================
 * - Contact details: `GYM`
 * - Show/hide a facility or program: set `enabled: true/false`
 * - Membership prices: fill in `price` (leave "" to show "Contact us")
 * - Photos: put real photos in src/assets/ and change the imports below,
 *   then set `isPlaceholder: false` so the "Sample image" label disappears.
 * - Reviews: add genuine Google reviews to `REVIEWS` (copy wording exactly).
 */
import weights from "@/assets/weights.jpg";
import cardio from "@/assets/cardio.jpg";
import training from "@/assets/training.jpg";
import hero from "@/assets/hero.jpg";

export const GYM = {
  name: "Muntazim's Ultimate Gym",
  nameGu: "મૂંટેઝિમ્સ ઊલટીમતે જિમ",
  phoneDisplay: "+91 97145 53800",
  phoneE164: "+919714553800",
  whatsapp: "919714553800",
  address:
    "Shop No. 7, Circle, Unit Hills Society, Rehnuma Society, Vishala, Ahmedabad, Gujarat 380055",
  plusCode: "XGVM+RC Ahmedabad, Gujarat",
  closingTime: "10:30 PM",
  /** Set `showRating: false` if the Google rating has not been re-checked. */
  showRating: true,
  rating: 4.8,
  reviewCount: 290,
  defaultMessage:
    "Hello Muntazim's Ultimate Gym! I found your website and would like to know about your membership plans, available facilities, and training options.",
};

const mapsQuery = encodeURIComponent(`${GYM.name}, ${GYM.address}`);
export const LINKS = {
  tel: `tel:${GYM.phoneE164}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  /** Replace with the official Google Business Profile share link when available. */
  reviews: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapEmbed: `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`,
};

export const waLink = (message: string = GYM.defaultMessage) =>
  `https://wa.me/${GYM.whatsapp}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#training", label: "Training" },
  { href: "#membership", label: "Membership" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export type IconName = "dumbbell" | "weight" | "heart" | "settings" | "user" | "leaf";

export const FACILITIES: { enabled: boolean; icon: IconName; title: string; text: string; image?: string }[] = [
  { enabled: true, icon: "dumbbell", title: "Strength Training", text: "Space to work on compound lifts and build overall strength.", image: hero },
  { enabled: true, icon: "weight", title: "Weight Training", text: "Free weights and machines for training every major muscle group.", image: weights },
  { enabled: true, icon: "heart", title: "Cardio Training", text: "Cardio equipment to support endurance and general fitness.", image: cardio },
  { enabled: true, icon: "settings", title: "Fitness Equipment", text: "A range of exercise equipment for varied workouts." },
  { enabled: true, icon: "user", title: "Personal Training", text: "Ask the gym about individual coaching options.", image: training },
  // Not confirmed yet — set enabled: true once available.
  { enabled: false, icon: "leaf", title: "Recovery & Relaxation", text: "Space to stretch and recover after training." },
];

export const PROGRAMS = [
  { enabled: true, title: "Weight Loss & General Fitness", text: "Build a consistent exercise routine and work toward your individual fitness goals." },
  { enabled: true, title: "Strength Training", text: "Develop strength and improve your exercise technique through structured workouts." },
  { enabled: true, title: "Muscle Building", text: "Work toward improved muscular strength and development through consistent training." },
  { enabled: true, title: "Personal Training", text: "Explore individual coaching options based on your fitness needs." },
  { enabled: true, title: "Beginner Fitness", text: "Get started with exercise in a welcoming training environment." },
];

/** Leave `price` empty until the owner confirms it. */
export const PLANS = [
  { name: "Monthly", duration: "1 month", price: "", includes: [] as string[], terms: "" },
  { name: "Quarterly", duration: "3 months", price: "", includes: [] as string[], terms: "" },
  { name: "Annual", duration: "12 months", price: "", includes: [] as string[], terms: "" },
];

/** Only add genuine, publicly available Google reviews. */
export const REVIEWS: { author: string; rating: number; text: string }[] = [];

export const GALLERY: { src: string; alt: string; category: string; isPlaceholder: boolean }[] = [
  { src: weights, alt: "Dumbbell rack and weight plates (sample image)", category: "Equipment", isPlaceholder: true },
  { src: cardio, alt: "Row of treadmills in a gym (sample image)", category: "Gym Interior", isPlaceholder: true },
  { src: training, alt: "Member doing a dumbbell shoulder press with a coach (sample image)", category: "Training", isPlaceholder: true },
  { src: hero, alt: "Athlete performing a barbell deadlift (sample image)", category: "Fitness Environment", isPlaceholder: true },
];

export const FAQS = [
  { q: "Where is Muntazim's Ultimate Gym located?", a: `We're at ${GYM.address}. Tap "Get Directions" in the contact section to open Google Maps.` },
  { q: "How can I enquire about membership prices?", a: "Message us on WhatsApp or call us for current membership plans and pricing." },
  { q: "What facilities are available at the gym?", a: "The gym offers a range of exercise equipment. For a full, current list, please call or WhatsApp us." },
  { q: "Is personal training available?", a: "Please contact the gym on WhatsApp or by phone to ask about current personal training options." },
  { q: "What are the gym's opening hours?", a: `Our listed closing time is ${GYM.closingTime}. Please call or WhatsApp for the full weekly schedule.` },
  { q: "How can I contact the gym?", a: `Call ${GYM.phoneDisplay} or chat with us on WhatsApp using the same number.` },
  { q: "Can beginners join the gym?", a: "Yes, everyone is welcome. Contact us and tell us about your goals so we can help you get started." },
];

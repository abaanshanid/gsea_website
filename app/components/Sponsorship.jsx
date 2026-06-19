import {
  Globe,
  Users,
  Leaf,
  Trophy,
  Check,
  X,
  ArrowRight,
  ChevronRight,
  SlidersHorizontal,
  Quote,
  Building2,
  TrendingUp,
  Handshake,
} from "lucide-react";
import Footer from "./Footer";

const stats = [
  { value: "50+", label: "Nations Represented" },
  { value: "10K+", label: "Engineers Reached" },
  { value: "3", label: "Global Regions" },
  { value: "100%", label: "Mission-Driven" },
];

const whyItems = [
  {
    num: "01",
    icon: <Globe className="w-5 h-5" />,
    title: "Global Reach",
    description:
      "Place your brand alongside engineers and organisations across 50+ developing nations spanning Africa, Asia, Latin America and the Middle East.",
  },
  {
    num: "02",
    icon: <Users className="w-5 h-5" />,
    title: "Targeted Audience",
    description:
      "Reach a highly qualified audience of engineers, academics, government officials and industry leaders from the Global South.",
  },
  {
    num: "03",
    icon: <Leaf className="w-5 h-5" />,
    title: "Meaningful Impact",
    description:
      "Your sponsorship directly funds programs that empower engineers and drive sustainable development across developing nations.",
  },
  {
    num: "04",
    icon: <Trophy className="w-5 h-5" />,
    title: "Brand Prestige",
    description:
      "Align your brand with a prestigious international association backed by the Global South Economic Forum.",
  },
];

const perks = [
  { label: "Logo on GSEA website", bronze: true, silver: true, gold: true },
  { label: "Social media mentions", bronze: "3×", silver: "6×", gold: "12×" },
  { label: "Certificate of partnership", bronze: true, silver: true, gold: true },
  { label: "Listed in event programme", bronze: true, silver: true, gold: true },
  { label: "Event exhibition booth", bronze: false, silver: true, gold: true },
  { label: "VIP networking access", bronze: false, silver: true, gold: true },
  { label: "Speaking opportunity", bronze: false, silver: false, gold: true },
  { label: "Custom partnership package", bronze: false, silver: false, gold: true },
];

const partners = [
  { name: "Partner Organisation 1", tier: "Gold Partner", tierColor: "text-primary" },
  { name: "Partner Organisation 2", tier: "Silver Partner", tierColor: "text-base-content/50" },
  { name: "Partner Organisation 3", tier: "Bronze Partner", tierColor: "text-[#cd7f32]" },
  { name: "Partner Organisation 4", tier: "Bronze Partner", tierColor: "text-[#cd7f32]" },
];

const testimonials = [
  {
    quote:
      "Partnering with GSEA has given us unparalleled access to engineering talent across the developing world. A truly worthwhile investment.",
    name: "Name, Title",
    org: "Partner Organisation",
  },
  {
    quote:
      "GSEA connects us directly with the brightest engineering minds across 50 nations. The networking opportunities alone are worth it.",
    name: "Name, Title",
    org: "Partner Organisation",
  },
];

const PerkCell = ({ value }) => {
  if (value === false)
    return <X className="w-4 h-4 text-base-content/20 mx-auto" />;
  if (value === true)
    return <Check className="w-4 h-4 text-success mx-auto" />;
  return <span className="text-xs font-bold text-primary">{value}</span>;
};

export default function Sponsorship() {
  return (
    <div className="bg-base-100 text-base-content flex flex-col min-h-screen">

      {/* ── HERO — split layout ── */}
      <header className="relative overflow-hidden bg-base-content">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroDotsS" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroDotsS)" />
          </svg>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5 hidden lg:block" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent hidden lg:block" />

        {/* Breadcrumb */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-8">
          <div className="flex items-center gap-2 text-base-100/40 text-xs font-medium tracking-widest uppercase">
            <span>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary">Sponsorship</span>
          </div>
        </div>

        {/* Two-column hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — title + CTA */}
          <div>
            <p className="text-primary/80 text-xs font-bold tracking-[0.3em] uppercase mb-5">
              Global South Engineers Association
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-base-100 leading-[0.9] tracking-tight mb-6">
              INVEST IN<br />
              <span className="text-primary">ENGINEERING'S</span><br />
              FUTURE
            </h1>
            <p className="text-base-100/50 text-base leading-relaxed mb-8 max-w-sm">
              Partner with GSEA and place your brand at the centre of a growing global engineering movement across the developing world.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#packages" className="btn btn-primary text-primary-content font-bold gap-2">
                View Packages <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/contact" className="btn btn-outline border-base-100/20 text-base-100 hover:bg-base-100/10 hover:border-base-100/40 font-bold">
                Contact Us
              </a>
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-base-100/5 border border-base-100/10 rounded-2xl p-6 hover:bg-base-100/10 transition-colors"
              >
                <p className="text-4xl font-black text-primary leading-none mb-1">{s.value}</p>
                <p className="text-base-100/50 text-xs font-semibold tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </header>

      <main className="flex-grow">

        {/* ── WHY SPONSOR — full-width numbered rows ── */}
        <section className="py-20 px-6 md:px-16 bg-base-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* Sticky left label */}
              <div className="lg:col-span-3 lg:sticky lg:top-24">
                <span className="inline-block px-3 py-1 rounded-full border border-primary/40 text-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                  Why Partner With Us
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Why Sponsor<br /><span className="text-primary">GSEA?</span>
                </h2>
                <div className="divider divider-primary w-16 mt-4" />
                <p className="text-base-content/50 text-sm leading-relaxed mt-2">
                  Join a growing movement and put your brand at the heart of Global South engineering.
                </p>
              </div>

              {/* Right — numbered rows */}
              <div className="lg:col-span-9 divide-y divide-base-300">
                {whyItems.map((item, i) => (
                  <div
                    key={i}
                    className="group py-8 flex gap-6 md:gap-10 items-start hover:bg-base-200/50 -mx-4 px-4 rounded-xl transition-colors duration-200"
                  >
                    <span className="text-4xl md:text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none shrink-0 select-none pt-1">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary">{item.icon}</div>
                        <h3 className="text-lg font-extrabold tracking-tight">{item.title}</h3>
                      </div>
                      <p className="text-base-content/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-base-content/20 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Now inline strip */}
            <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 bg-base-content rounded-2xl px-8 py-6">
              <div>
                <p className="text-base-100 font-extrabold text-lg">Ready to become a sponsor?</p>
                <p className="text-base-100/50 text-sm mt-0.5">
                  Contact our partnerships team — we'll build a package around your goals.
                </p>
              </div>
              <a href="#contact" className="btn btn-primary text-primary-content font-bold tracking-wider gap-2 shrink-0">
                APPLY NOW <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="relative overflow-hidden bg-base-content py-10">
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="dS1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dS1)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 flex flex-wrap items-center gap-6 md:gap-12">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Choose Your Level</span>
            <div className="flex-1 h-px bg-base-100/20" />
            <p className="text-base-100/50 text-xs tracking-widest uppercase">Bronze · Silver · Gold</p>
          </div>
        </div>

        {/* ── PACKAGES — comparison table ── */}
        <section id="packages" className="py-20 px-6 md:px-16 bg-base-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                Sponsorship <span className="text-primary">Packages</span>
              </h2>
              <p className="text-base-content/50 text-sm">
                Select the package that best fits your organisation's goals and budget
              </p>
            </div>

            {/* Comparison table */}
            <div className="bg-base-100 rounded-2xl border border-base-300 overflow-visible shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-4 border-b border-base-300 overflow-hidden rounded-t-2xl">
                <div className="p-6 border-r border-base-300">
                  <p className="text-xs text-base-content/40 font-bold tracking-widest uppercase">
                    What's included
                  </p>
                </div>
                {/* Bronze */}
                <div className="p-6 text-center border-r border-base-300">
                  <Trophy className="w-6 h-6 text-[#cd7f32] mx-auto mb-2" />
                  <p className="font-black tracking-widest text-sm text-[#cd7f32] uppercase">Bronze</p>
                  <p className="text-[10px] text-base-content/40 font-bold tracking-widest uppercase mt-0.5">Entry Level</p>
                </div>
                {/* Silver */}
                <div className="pt-10 pb-6 px-6 text-center border-r border-base-300 bg-primary/5 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                  <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-content text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                  <Trophy className="w-6 h-6 text-base-content/40 mx-auto mb-2" />
                  <p className="font-black tracking-widest text-sm uppercase">Silver</p>
                  <p className="text-[10px] text-base-content/40 font-bold tracking-widest uppercase mt-0.5">Growth Partner</p>
                </div>
                {/* Gold */}
                <div className="p-6 text-center">
                  <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-black tracking-widest text-sm text-primary uppercase">Gold</p>
                  <p className="text-[10px] text-base-content/40 font-bold tracking-widest uppercase mt-0.5">Premium Partner</p>
                </div>
              </div>

              {/* Perk rows */}
              {perks.map((perk, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 border-b border-base-300 last:border-0 ${i % 2 === 1 ? "bg-base-200/40" : ""}`}
                >
                  <div className="p-4 px-6 border-r border-base-300 flex items-center">
                    <span className="text-sm text-base-content/70">{perk.label}</span>
                  </div>
                  <div className="p-4 border-r border-base-300 flex items-center justify-center">
                    <PerkCell value={perk.bronze} />
                  </div>
                  <div className="p-4 border-r border-base-300 flex items-center justify-center bg-primary/5">
                    <PerkCell value={perk.silver} />
                  </div>
                  <div className="p-4 flex items-center justify-center">
                    <PerkCell value={perk.gold} />
                  </div>
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-4 bg-base-200/60">
                <div className="p-6 border-r border-base-300" />
                <div className="p-6 border-r border-base-300 flex justify-center">
                  <a href="#contact" className="btn btn-outline btn-sm font-bold tracking-widest text-xs w-full">GET STARTED</a>
                </div>
                <div className="p-6 border-r border-base-300 flex justify-center bg-primary/5">
                  <a href="#contact" className="btn btn-primary btn-sm text-primary-content font-bold tracking-widest text-xs w-full">GET STARTED</a>
                </div>
                <div className="p-6 flex justify-center">
                  <a href="#contact" className="btn btn-outline btn-sm font-bold tracking-widest text-xs w-full">GET STARTED</a>
                </div>
              </div>
            </div>

            {/* Custom package card */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-base-content rounded-2xl px-8 py-6">
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-xl ring-2 ring-primary/30 text-primary shrink-0">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base-100 font-extrabold">Need a Custom Package?</p>
                  <p className="text-base-100/50 text-sm mt-0.5 max-w-md">
                    Every organisation is different — let's build something tailored to your goals.
                  </p>
                </div>
              </div>
              <a href="/contact" className="btn btn-primary text-primary-content font-bold tracking-wider gap-2 shrink-0">
                CONTACT US <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="relative overflow-hidden bg-base-content py-10">
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="dS2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dS2)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 flex flex-wrap items-center gap-6 md:gap-12">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Who's With Us</span>
            <div className="flex-1 h-px bg-base-100/20" />
            <p className="text-base-100/50 text-xs tracking-widest uppercase">Current Partners</p>
          </div>
        </div>

        {/* ── PARTNERS — asymmetric featured + list ── */}
        <section className="py-20 px-6 md:px-16 bg-base-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Our Current <span className="text-primary">Partners</span>
              </h2>
              <p className="text-base-content/50 text-sm max-w-xs">
                Organisations that believe in the power of Global South engineering
              </p>
            </div>

            {/* Featured gold partner full-width + list below */}
            <div className="space-y-4">
              {/* Gold — wide featured card */}
              <div className="group flex flex-col md:flex-row items-center gap-8 bg-base-200 rounded-2xl border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300 p-8">
                <div className="w-24 h-24 rounded-2xl bg-base-300 flex items-center justify-center shrink-0">
                  <Building2 className="w-10 h-10 text-base-content/20" />
                </div>
                <div className="flex-1">
                  <p className="text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-1">Gold Partner</p>
                  <h3 className="text-2xl font-extrabold">{partners[0].name}</h3>
                  <p className="text-base-content/50 text-sm mt-1">Premier partner of the Global South Engineers Association, committed to advancing engineering excellence across the developing world.</p>
                </div>
                <Handshake className="w-8 h-8 text-primary/30 shrink-0 hidden md:block" />
              </div>

              {/* Silver + Bronze — 3 col */}
              <div className="grid md:grid-cols-3 gap-4">
                {partners.slice(1).map((p, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 bg-base-200 rounded-2xl border border-base-300 hover:border-primary/20 hover:shadow-md transition-all duration-300 p-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-base-300 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-base-content/20" />
                    </div>
                    <div>
                      <p className="font-extrabold text-sm">{p.name}</p>
                      <p className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${p.tierColor}`}>{p.tier}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS — large pull-quote style ── */}
        <section className="py-20 px-6 md:px-16 bg-base-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-primary/40 text-primary text-[10px] font-bold tracking-[0.25em] uppercase">
                What They Say
              </span>
              <div className="flex-1 h-px bg-base-300" />
              <h2 className="text-2xl font-black tracking-tight">
                Partner <span className="text-primary">Testimonials</span>
              </h2>
            </div>

            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Large quote mark accent */}
                  <div className={`shrink-0 w-1.5 self-stretch rounded-full bg-primary ${i % 2 === 1 ? "md:order-last" : ""}`} />

                  <div className="flex-1 bg-base-100 rounded-2xl p-10 border border-base-300">
                    <Quote className="w-10 h-10 text-primary/20 mb-6" />
                    <p className="text-xl md:text-2xl font-semibold text-base-content/80 leading-relaxed italic mb-8">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-base-content flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-base-100/60" />
                      </div>
                      <div>
                        <p className="font-extrabold">{t.name}</p>
                        <p className="text-primary text-xs font-semibold tracking-wide">{t.org}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 px-6 md:px-16 bg-base-content relative overflow-hidden">
          {/* Dot texture */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="ctaDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaDots)" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Headline block */}
            <div className="text-center mb-16">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-5" />
              <h2 className="text-4xl md:text-6xl font-black text-base-100 tracking-tight leading-[0.95] mb-5">
                Ready to<br />
                <span className="text-primary">Drive Impact?</span>
              </h2>
              <p className="text-base-100/50 text-base leading-relaxed max-w-lg mx-auto">
                Whether you're a startup, a multinational or a development organisation — there's a partnership built for your ambitions.
              </p>
            </div>

            {/* Two action cards */}
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {/* Card 1 — View Packages */}
              <a
                href="#packages"
                className="group flex flex-col gap-4 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-2xl p-8 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">
                    Explore Options
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-base-100 text-xl font-extrabold leading-snug">
                  View Sponsorship Packages
                </p>
                <p className="text-base-100/40 text-sm leading-relaxed">
                  Browse Bronze, Silver and Gold tiers and find the level that fits your goals and budget.
                </p>
              </a>

              {/* Card 2 — Contact Us */}
              <a
                href="/contact"
                className="group flex flex-col gap-4 bg-base-100/5 hover:bg-base-100/10 border border-base-100/10 hover:border-base-100/20 rounded-2xl p-8 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.25em] text-base-100/40 uppercase">
                    Get in Touch
                  </span>
                  <ArrowRight className="w-4 h-4 text-base-100/30 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                </div>
                <p className="text-base-100 text-xl font-extrabold leading-snug">
                  Become a Partner Member
                </p>
                <p className="text-base-100/40 text-sm leading-relaxed">
                  Talk to our partnerships team and co-create a package that perfectly matches your organisation.
                </p>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

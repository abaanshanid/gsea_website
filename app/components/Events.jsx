import {
  MapPin,
  Clock,
  Users,
  Mic,
  Calendar,
  ArrowRight,
  ChevronRight,
  Star,
  ExternalLink,
} from "lucide-react";
import Footer from "./Footer";

const upcomingEvents = [
  {
    type: "CONFERENCE",
    dates: "12–14 June 2026",
    location: "Addis Ababa, Ethiopia",
    time: "9:00 AM – 6:00 PM",
    title: "Global South Sustainable Development Summit & Expo",
    description:
      "High-level gathering of heads of state, ministers, and private sector leaders to align on Global South Integrated Development Framework priorities.",
    attendees: "500+ Expected Attendees",
    cta: "REGISTER NOW",
    ctaStyle: "btn-primary text-primary-content",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    type: "WORKSHOP",
    dates: "25–27 September 2026",
    location: "New Delhi, India",
    time: "2:00 PM – 5:00 PM",
    title: "GS-IDF Innovation & Technology Forum",
    description:
      "Showcasing breakthroughs in climate-tech, digital transformation, and engineering solutions from the Global South.",
    attendees: "200+ Expected Attendees",
    cta: "REGISTER NOW",
    ctaStyle: "btn-primary text-primary-content",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  },
  {
    type: "COMMUNITY",
    dates: "3–5 November 2026",
    location: "Virtual / Hybrid",
    time: "All Day",
    title: "Diaspora Investment Week & Capital Connect",
    description:
      "Matchmaking sessions between diaspora investors, startups and development finance institutions across the Global South.",
    attendees: "Open Registration",
    cta: "JOIN US",
    ctaStyle: "btn-outline btn-primary",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const conferences = [
  {
    day: "12",
    month: "JUN",
    year: "2025",
    status: "UPCOMING",
    statusStyle: "badge-success text-success-content",
    category: "ANNUAL CONFERENCE",
    title: "Global South Sustainable Development Summit & Expo",
    description:
      "The premier gathering of Global South engineers featuring keynote speakers, panel discussions and networking sessions.",
    location: "Addis Ababa, Ethiopia",
    attendees: "500+ Attendees",
    speakers: "20+ Speakers",
    cta: "REGISTER",
    ctaStyle: "btn-primary btn-sm text-primary-content",
  },
  {
    day: "08",
    month: "NOV",
    year: "2024",
    status: "COMPLETED",
    statusStyle: "badge-ghost",
    category: "INTERNATIONAL SUMMIT",
    title: "Global South Engineering Summit 2024",
    description:
      "Our inaugural international summit brought together engineering leaders from 30 nations to set the agenda for Global South engineering.",
    location: "Doha, Qatar",
    attendees: "300+ Attendees",
    speakers: "15 Speakers",
    cta: "VIEW GALLERY",
    ctaStyle: "btn-outline btn-sm",
  },
];

const pastEvents = [
  {
    month: "NOVEMBER 2024",
    title: "Global South Engineering Summit",
    description:
      "Our inaugural summit that brought together 300+ engineers from 30 nations.",
    stats: ["300+ Attendees", "30 Nations"],
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
  },
  {
    month: "SEPTEMBER 2024",
    title: "Sustainable Engineering Workshop",
    description:
      "A workshop focused on green engineering solutions for developing economies.",
    stats: ["150+ Engineers", "10 Projects"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    month: "JULY 2024",
    title: "Community Outreach Day",
    description:
      "Engineers volunteered across 5 cities to support local engineering communities.",
    stats: ["5 Cities", "200 Volunteers"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
];

const DiagonalDivider = ({ label, sub, id }) => (
  <div className="relative overflow-hidden bg-base-content py-10">
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 flex flex-wrap items-center gap-6 md:gap-12">
      <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
        {label}
      </span>
      <div className="flex-1 h-px bg-base-100/20" />
      <p className="text-base-100/50 text-xs tracking-widest uppercase">{sub}</p>
    </div>
  </div>
);

export default function Events() {
  return (
    <div className="bg-base-100 text-base-content flex flex-col min-h-screen">

      {/* ── HERO ── */}
      <header className="relative min-h-[52vh] flex items-end overflow-hidden bg-base-content">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="heroDotsEvents"
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroDotsEvents)" />
          </svg>
        </div>

        {/* Glow accents using theme success color */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-10 w-56 h-56 rounded-full bg-success/10 blur-3xl" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 px-6 md:px-16">
          <div className="flex items-center gap-2 text-base-100/40 text-xs font-medium tracking-widest uppercase">
            <span>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary">Events</span>
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 w-full px-6 md:px-16 pb-14 pt-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-primary/80 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Global South Engineers Association
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-base-100 leading-[0.92] tracking-tight">
                OUR
                <br />
                <span className="text-primary">EVENTS</span>
              </h1>
            </div>
            <p className="text-base-100/50 text-sm md:text-base max-w-xs leading-relaxed md:pb-2">
              Conferences, workshops and community activities bringing engineers together
            </p>
          </div>
        </div>
      </header>

      <main className="flex-grow">

        {/* ── UPCOMING EVENTS ── */}
        <section className="py-20 px-6 md:px-16 bg-base-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-block px-3 py-1 rounded-full border border-primary/40 text-primary text-[10px] font-bold tracking-[0.25em] uppercase">
                What's Coming
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Upcoming <span className="text-primary">Events</span>
              </h2>
              <p className="text-base-content/50 text-sm">
                
              </p>
            </div>

            <div className="space-y-8">
              {upcomingEvents.map((ev, i) => (
                <div
                  key={i}
                  className="group grid md:grid-cols-5 rounded-2xl overflow-hidden border border-base-300 bg-base-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="md:col-span-2 relative overflow-hidden min-h-[220px]">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-base-100/20 md:to-base-100/60" />
                    {/* Type badge */}
                    <span className="absolute top-4 left-4 bg-primary text-primary-content text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                      {ev.type}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-base-content/50 font-medium mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {ev.dates}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {ev.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {ev.time}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mb-3 leading-snug">
                        {ev.title}
                      </h3>
                      <p className="text-base-content/60 text-sm leading-relaxed">
                        {ev.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-base-300">
                      <div className="flex items-center gap-2 text-xs text-base-content/50">
                        <Users className="w-3.5 h-3.5 text-success" />
                        {ev.attendees}
                      </div>
                      <a
                        href="#"
                        className={`btn btn-sm ${ev.ctaStyle} text-xs tracking-wider font-bold gap-1.5`}
                      >
                        {ev.cta}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DiagonalDivider id="diag1" label="Major Events" sub="Conferences · Summits · Forums" />

        {/* ── CONFERENCES & SUMMITS ── */}
        <section className="py-20 px-6 md:px-16 bg-base-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                Conferences & <span className="text-primary">Summits</span>
              </h2>
              <p className="text-base-content/50 text-sm">
                High-level gatherings where engineering leaders meet and shape the future
              </p>
            </div>

            <div className="space-y-5">
              {conferences.map((c, i) => (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-base-100 rounded-2xl p-7 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Date block */}
                  <div className="shrink-0 w-20 h-20 rounded-xl bg-base-content flex flex-col items-center justify-center text-center select-none">
                    <span className="text-primary text-2xl font-black leading-none">
                      {c.day}
                    </span>
                    <span className="text-base-100/60 text-[10px] font-bold tracking-widest uppercase mt-0.5">
                      {c.month}
                    </span>
                    <span className="text-base-100/30 text-[9px] tracking-wider">{c.year}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] border border-base-300 text-base-content/50 px-2.5 py-0.5 rounded-full font-bold tracking-widest uppercase">
                        {c.category}
                      </span>
                      <span className={`badge badge-sm ${c.statusStyle} text-[10px] font-bold tracking-widest uppercase`}>
                        {c.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold tracking-tight mb-1">{c.title}</h3>
                    <p className="text-base-content/55 text-sm leading-relaxed mb-3">
                      {c.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-base-content/45">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-primary" />
                        {c.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-primary" />
                        {c.attendees}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Mic className="w-3 h-3 text-primary" />
                        {c.speakers}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="shrink-0">
                    <a
                      href="#"
                      className={`btn ${c.ctaStyle} tracking-widest font-bold text-xs gap-1.5`}
                    >
                      {c.cta}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DiagonalDivider id="diag2" label="What We've Done" sub="A Look Back" />

        {/* ── PAST EVENTS ── */}
        <section className="py-20 px-6 md:px-16 bg-base-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                Past <span className="text-primary">Events</span>
              </h2>
              <p className="text-base-content/50 text-sm">
                A look back at our impactful events and the memories we've created
              </p>
            </div>

            {/* Asymmetric masonry grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured tall card */}
              <div className="md:col-span-5 group relative rounded-2xl overflow-hidden min-h-[420px] cursor-pointer">
                <img
                  src={pastEvents[0].image}
                  alt={pastEvents[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-content/90 via-base-content/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                    {pastEvents[0].month}
                  </p>
                  <h3 className="text-base-100 text-xl font-extrabold mb-2 leading-snug">
                    {pastEvents[0].title}
                  </h3>
                  <p className="text-base-100/60 text-sm mb-4 leading-relaxed">
                    {pastEvents[0].description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {pastEvents[0].stats.map((s, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1 text-success text-xs font-semibold"
                      >
                        <Star className="w-3 h-3 fill-success" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Two stacked cards */}
              <div className="md:col-span-7 flex flex-col gap-6">
                {pastEvents.slice(1).map((ev, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl overflow-hidden min-h-[196px] cursor-pointer"
                  >
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-content/90 via-base-content/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
                        {ev.month}
                      </p>
                      <h3 className="text-base-100 text-lg font-extrabold mb-1">{ev.title}</h3>
                      <p className="text-base-100/60 text-sm mb-3">{ev.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {ev.stats.map((s, j) => (
                          <span
                            key={j}
                            className="flex items-center gap-1 text-success text-xs font-semibold"
                          >
                            <Star className="w-3 h-3 fill-success" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <section className="py-20 px-6 md:px-16 bg-base-200">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-14 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern
                      id="ctaDotsEvents"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ctaDotsEvents)" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between gap-8 text-primary-content">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
                    Ready to Drive Impact?
                  </h2>
                  <p className="opacity-80 max-w-md text-sm md:text-base leading-relaxed">
                    Join forces with engineering bodies across continents to unify development
                    standards and empower local infrastructure initiatives.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="btn btn-white font-bold shadow-lg group gap-2 shrink-0"
                >
                  Become a Partner Member
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

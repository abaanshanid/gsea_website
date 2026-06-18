import {
  Users,
  Calendar,
  Globe,
  Compass,
  Target,
  Award,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Leaf,
  Scale,
} from "lucide-react";
import Navbar from "../components/NavBar";

export default function About() {
  return (
    /* FIXED: Changed flex-col to block/relative layout to let snap children track perfectly against the window height */
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory bg-base-100 text-base-content relative">
      {/* FIXED: Absolute/Fixed placement keeps the Navbar out of the calculation path of the snap engine */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md">
        <Navbar />
      </div>

      {/* --- PANEL 1: HERO / WHO WE ARE --- */}
      <section
        id="who-we-are"
        /* FIXED: Added pt-16 to perfectly account for the floating navbar height without shifting layout bounds */
        className="hero bg-base-100 h-screen px-4 md:px-8 lg:px-16 relative overflow-hidden flex items-center snap-start shrink-0 pt-16"
      >
        {/* Subtle Background Accents */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none hidden lg:block">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 to-transparent" />
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="hero-content max-w-5xl mx-auto w-full z-10 p-0">
          <div className="flex flex-col space-y-6 text-center lg:text-left w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
              What is{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GSEA?
              </span>
            </h1>

            <p className="text-base sm:text-lg text-base-content/80 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              The{" "}
              <span className="font-semibold text-base-content">
                Global South Engineers Association (GSEA)
              </span>{" "}
              is a platform launched by the{" "}
              <span className="text-secondary font-medium">
                Global South Economic Forum (GSEF)
              </span>
              , dedicated to uniting engineers from developing nations.
            </p>

            <p className="text-sm sm:text-md text-base-content/70 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              As the engineering, infrastructure, and technological-capacity
              pillar of the GS-IDF institutional ecosystem, GSEA brings together
              innovators and problem-solvers across Africa, Asia, Latin America,
              the Caribbean, the Middle East, and the Pacific to collaborate on
              sustainable infrastructure, clean energy, and digital
              transformation.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md w-full mx-auto lg:mx-0 bg-base-200/60 border border-base-300 p-4 rounded-2xl backdrop-blur-sm shadow-inner pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-primary">
                  50+
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold opacity-60 mt-0.5">
                  Countries
                </div>
              </div>
              <div className="text-center border-x border-base-content/10">
                <div className="text-2xl sm:text-3xl font-black text-secondary">
                  500+
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold opacity-60 mt-0.5">
                  Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-base-content">
                  2024
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold opacity-60 mt-0.5">
                  Founded
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#journey"
          className="absolute bottom-4 left-0 right-0 flex justify-center text-base-content/40 hover:text-primary transition-colors duration-300 group z-20"
          aria-label="Scroll down to Journey"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </section>

      {/* --- PANEL 2: OUR JOURNEY & TIMELINE --- */}
      <section
        id="journey"
        /* FIXED: Using clean h-screen viewport bounds matching Panel 1 */
        className="bg-base-200 py-20 px-4 h-screen flex items-center snap-start shrink-0 relative"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
              Our History
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Journey & Background
            </h2>
          </div>

          {/* Desktop Timeline View */}
          <div className="hidden md:block relative px-4">
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-base-content/10 z-0" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {[
                {
                  year: "2022",
                  title: "GSEF Founded",
                  desc: "The Global South Economic Forum was established to represent developing nations on the world stage.",
                },
                {
                  year: "2023",
                  title: "Engineering Division",
                  desc: "GSEF recognized the need for a dedicated engineering platform to support its economic development goals.",
                },
                {
                  year: "2024",
                  title: "GSEA Officially Launched",
                  desc: "Launched globally, unifying engineering ecosystems across over 50 developing nations.",
                },
                {
                  year: "2025",
                  title: "Growing Strong",
                  desc: "Expanding operational reach, hosting regional conferences, workshops, and cross-border initiatives.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start pt-10 relative group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-black text-xs shadow-md absolute top-0 left-0 transition-transform duration-300 group-hover:scale-110">
                    {idx + 1}
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="text-2xl font-black text-primary tracking-tight">
                      {item.year}
                    </div>
                    <h3 className="text-base font-extrabold text-base-content leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-base-content/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline View */}
          <div className="md:hidden space-y-4">
            {[
              {
                year: "2022",
                title: "GSEF Founded",
                desc: "The Global South Economic Forum was established to represent developing nations on the world stage.",
              },
              {
                year: "2023",
                title: "Engineering Division",
                desc: "GSEF recognized the need for a dedicated engineering division to support development goals.",
              },
              {
                year: "2024",
                title: "GSEA Officially Launched",
                desc: "Launched globally, unifying engineering ecosystems across over 50 developing nations.",
              },
              {
                year: "2025",
                title: "Growing Strong",
                desc: "Expanding operational reach, hosting regional conferences and cross-border initiatives.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-base-100 p-4 rounded-xl border border-base-300 shadow-sm"
              >
                <span className="badge badge-primary font-bold shrink-0">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-bold text-sm text-base-content leading-none">
                    {item.title}
                  </h3>
                  <p className="text-xs text-base-content/70 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#values"
          className="absolute bottom-4 left-0 right-0 flex justify-center text-base-content/40 hover:text-primary transition-colors group z-20"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </section>

      {/* --- PANEL 3: CORE VALUES & STANDARDS --- */}
      <section
        id="values"
        className="py-20 px-4 max-w-6xl mx-auto h-screen flex items-center snap-start shrink-0 relative"
      >
        <div className="w-full space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
              What We Stand For
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                name: "Collaboration",
                desc: "We believe great engineering happens when minds from different nations and backgrounds work seamlessly together.",
              },
              {
                icon: Zap,
                name: "Innovation",
                desc: "We champion highly creative, resourceful solutions to the unique infrastructure challenges faced by developing nations.",
              },
              {
                icon: Leaf,
                name: "Sustainability",
                desc: "Every initiative we support is strictly guided by the core principles of sustainable development and ecological responsibility.",
              },
              {
                icon: Scale,
                name: "Equity",
                desc: "We strive for equal opportunity, accessibility, and robust global representation for engineers regardless of origin.",
              },
            ].map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="card-body p-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-3">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{val.name}</h3>
                    <p className="text-sm text-base-content/75 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Affiliation / Article Resource Sub-cards */}
          <div className="grid md:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-5 rounded-2xl bg-base-200/60 border border-base-300 flex flex-col justify-between items-start gap-4">
              <div>
                <h4 className="font-bold text-sm tracking-wide text-primary uppercase">
                  GSEF Article
                </h4>
                <p className="text-xs text-base-content/75 mt-1">
                  Read the full GSEA master brief published directly by the
                  Economic Forum.
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline"
              >
                Read & Comment <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-base-200/60 border border-base-300 flex flex-col justify-between items-start gap-4">
              <div>
                <h4 className="font-bold text-sm tracking-wide text-primary uppercase">
                  IEI Qatar Chapter
                </h4>
                <p className="text-xs text-base-content/75 mt-1">
                  Discover updates from our key affiliated local professional
                  engineering group.
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline"
              >
                Visit IEI Qatar <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-base-200/60 border border-base-300 flex flex-col justify-between items-start gap-4">
              <div>
                <h4 className="font-bold text-sm tracking-wide text-primary uppercase">
                  GS-IDF Ecosystem
                </h4>
                <p className="text-xs text-base-content/75 mt-1">
                  Learn more about our overarching framework ecosystem on
                  AASGON.
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline"
              >
                View on AASGON <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <a
          href="#direction"
          className="absolute bottom-4 left-0 right-0 flex justify-center text-base-content/40 hover:text-primary transition-colors group z-20"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </section>

      {/* --- PANEL 4: DIRECTION (VISION & MISSION) --- */}
      <section
        id="direction"
        className="bg-base-200/50 py-20 px-4 md:px-8 h-screen flex items-center snap-start shrink-0 relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full space-y-10 relative z-10">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
              Our Blueprint for the Future
            </h2>
          </div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Vision Box - Balanced & Styled to match the Mission UI */}
            <div className="group relative bg-base-100 border border-base-300 rounded-3xl p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-2xl ring-4 ring-secondary/5">
                      <Compass className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">
                      Our Vision
                    </h3>
                  </div>
                </div>

                <p className="text-lg md:text-xl font-medium leading-relaxed text-base-content/90 pt-2">
                  "A globally{" "}
                  <span className="text-secondary font-bold">respected</span>{" "}
                  engineering community that leads in innovation, infrastructure
                  development, renewable energy, and technological advancement
                  across the Global South."
                </p>
              </div>

              {/* Action/Pill Checklist */}
              <div className="mt-8 pt-6 border-t border-base-200 space-y-3">
                {[
                  "Lead in local structural deployment",
                  "Advance clean & renewable energy",
                  "Drive impactful tech optimization metrics",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs text-base-content/75"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Box - The Clean Minimalist Card */}
            <div className="group relative bg-base-100 border border-base-300 rounded-3xl p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 text-primary rounded-2xl ring-4 ring-primary/5">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">
                      Our Mission
                    </h3>
                  </div>
                </div>

                <p className="text-lg md:text-xl font-medium leading-relaxed text-base-content/90 pt-2">
                  "To build a{" "}
                  <span className="text-primary font-bold">unified</span>{" "}
                  engineering ecosystem that enhances professional standards,
                  accelerates innovation, and empowers engineers to drive
                  sustainable development."
                </p>
              </div>

              {/* Action/Pill Checklist */}
              <div className="mt-8 pt-6 border-t border-base-200 space-y-3">
                {[
                  "Standardize rigorous professional codes",
                  "Share critical co-developed asset modules",
                  "Promote global STEM & workforce networks",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs text-base-content/75"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#leadership"
          className="absolute bottom-4 left-0 right-0 flex justify-center text-base-content/40 hover:text-primary transition-colors group z-20"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </section>

      {/* --- PANEL 5: LEADERSHIP PROFILE --- */}
      {/* FIXED: Removed the messy wrapper div, making the Section itself a clean direct child of the snap root */}
      <section
        id="leadership"
        className="py-16 px-4 h-screen max-w-6xl mx-auto w-full flex flex-col justify-center snap-start shrink-0 bg-base-100 relative"
      >
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Meet the Leadership
          </h2>
          <p className="text-xs text-base-content/60 mt-1">
            The dedicated team driving GSEA's mission forward
          </p>
        </div>

        {/* Executive Row */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* President Card */}
          <div className="card bg-base-200 border border-base-300 shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-24 h-24 rounded-2xl font-black text-xl">
                AJ
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="text-xl font-black">Er. Ahmad Jassim Al-Jolo</h3>
                <div className="text-xs text-primary font-bold uppercase tracking-wider">
                  President, GSEA
                </div>
              </div>
              <p className="text-xs text-base-content/75 italic leading-relaxed bg-base-100 p-3 rounded-xl border border-base-300">
                "The Global South does not face a lack of potential — it faces
                an opportunity to engineer its own future. Through solid
                regional collaboration, we empower nations to build true
                resilience."
              </p>
              <div className="text-[11px] text-base-content/60 space-y-0.5">
                <div>• President, Global Federation of Engineers (FGE)</div>
                <div>• Former Chairman, Qatar Society of Engineers</div>
              </div>
            </div>
          </div>

          {/* Director General Card */}
          <div className="card bg-base-200 border border-base-300 shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-24 h-24 rounded-2xl font-black text-xl">
                AS
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="text-xl font-black">Er. Abdul Sathar</h3>
                <div className="text-xs text-primary font-bold uppercase tracking-wider">
                  Director-General, GSEA
                </div>
              </div>
              <p className="text-xs text-base-content/75 leading-relaxed">
                Leads day-to-day operations and core strategic frameworks across
                Africa, Asia, Latin America, and the Arab world, managing
                crucial programmatic partnerships.
              </p>
              <div className="text-[11px] text-base-content/60 space-y-0.5 pt-1 border-t border-base-content/10">
                <div>
                  • Hon. Chairman, Institution of Engineers (India) — Qatar
                  Chapter
                </div>
                <div>
                  • VP (Professionals), Indian Business & Professionals Council
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Board Of Directors Grid Block */}
        <div className="bg-base-200/50 rounded-2xl border border-base-300 p-6 mb-8">
          <h4 className="text-xs font-bold uppercase tracking-widest text-center opacity-60 mb-4">
            Board of Directors
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-base-100 border border-base-300 rounded-xl">
              <div className="font-bold text-sm text-base-content">
                Er. Ahmad Jassim Al-Jolo
              </div>
              <div className="text-[10px] text-primary uppercase font-semibold mt-0.5">
                President
              </div>
            </div>
            <div className="p-3 bg-base-100 border border-base-300 rounded-xl">
              <div className="font-bold text-sm text-base-content">
                Er. Abdul Sathar
              </div>
              <div className="text-[10px] text-primary uppercase font-semibold mt-0.5">
                Director-General
              </div>
            </div>
            <div className="p-3 bg-base-100 border border-base-300 rounded-xl flex items-center justify-center italic text-xs text-base-content/40">
              To Be Announced
            </div>
            <div className="p-3 bg-base-100 border border-base-300 rounded-xl flex items-center justify-center italic text-xs text-base-content/40">
              To Be Announced
            </div>
          </div>
        </div>
      </section>

      {/* --- SYSTEM FOOTER --- */}
      {/* FIXED: Formatted the footer as its own independent snapping node so it doesn't leak into panel dimensions */}
      <footer
        id="contact"
        className="footer footer-center p-8 bg-neutral text-neutral-content rounded-t-xl shrink-0 snap-end"
      >
        <aside>
          <div className="font-black text-xl tracking-wider mb-1">GSEA</div>
          <p className="font-medium text-xs opacity-70">
            Global South Engineering Alliance <br />
            An initiative by the Global South Economic Forum (GSEF)
          </p>
          <p className="text-[10px] opacity-40 mt-3">
            Copyright © 2025 GSEA — Global South Engineering Alliance. All
            rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
}

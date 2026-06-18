import {
  Globe,
  Share2,
  Users,
  GraduationCap,
  Award,
  Leaf,
  ArrowRight,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    /* 1. Added 'h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory' to the parent wrapper.
      This defines the viewport container constraints required for vertical scroll snapping.
    */
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory bg-base-100 text-base-content flex flex-col justify-between">
      <Navbar></Navbar>

      {/* --- HERO SECTION --- */}
      {/* 2. Added 'snap-start' to snap the container cleanly to the top of the viewport */}
      <header
        id="home"
        className="hero bg-base-100 min-h-screen px-4 relative overflow-hidden flex items-center snap-start shrink-0"
      >
        {/* --- FULL-PAGE PIXELATED MAP BACKGROUND & SCROLL PROMPT (DESKTOP ONLY) --- */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none select-none hidden lg:block">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-base-content/5 to-transparent z-10" />

          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pixelGrid"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="1.2"
                  className="fill-base-content/15"
                />
              </pattern>
              <filter
                id="greenGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <rect width="1000" height="500" fill="url(#pixelGrid)" />
            <g className="fill-base-content/10">
              <rect x="50" y="60" width="90" height="35" rx="3" />
              <rect x="100" y="85" width="140" height="45" rx="4" />
              <rect x="120" y="125" width="120" height="40" rx="4" />
              <rect x="150" y="160" width="60" height="25" rx="3" />
              <polygon
                points="285,30 340,40 320,95 275,70"
                className="opacity-90"
              />
              <rect x="435" y="65" width="30" height="25" rx="2" />
              <rect x="420" y="90" width="75" height="40" rx="4" />
              <rect x="495" y="95" width="65" height="45" rx="4" />
              <rect x="440" y="130" width="55" height="25" rx="3" />
              <rect x="560" y="65" width="265" height="45" rx="5" />
              <rect x="550" y="105" width="290" height="50" rx="5" />
              <rect x="580" y="150" width="235" height="35" rx="4" />
              <rect x="630" y="180" width="140" height="25" rx="3" />
            </g>
            <g className="fill-success/70" filter="url(#greenGlow)">
              <rect x="180" y="270" width="35" height="45" rx="4" />
              <rect x="200" y="305" width="45" height="85" rx="6" />
              <rect x="230" y="335" width="50" height="70" rx="6" />
              <rect x="150" y="240" width="55" height="35" rx="3" />
              <rect x="440" y="230" width="70" height="55" rx="6" />
              <rect x="470" y="285" width="55" height="90" rx="6" />
              <rect x="510" y="305" width="30" height="45" rx="4" />
              <rect x="535" y="340" width="15" height="30" rx="2" />
              <rect x="530" y="190" width="65" height="40" rx="4" />
              <rect x="620" y="215" width="50" height="45" rx="4" />
              <rect x="670" y="195" width="70" height="45" rx="4" />
              <rect x="730" y="255" width="60" height="35" rx="4" />
              <rect x="785" y="340" width="80" height="55" rx="6" />
              <rect x="850" y="280" width="35" height="25" rx="2" />
            </g>
            <rect width="1000" height="500" fill="url(#pixelGrid)" />
          </svg>

          <a
            href="#about"
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 via-base-100/80 to-transparent z-20 flex items-end justify-center pb-4 transition-all duration-300 group cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <div className="flex items-center gap-2 text-base-content/50 group-hover:text-primary transition-colors duration-300 pointer-events-auto">
              <span className="text-xs font-semibold tracking-wider uppercase">
                Scroll Down
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Hero Content */}
        <div className="hero-content text-center relative z-10 w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6 drop-shadow-md">
              <span className="text-primary">Global South </span>
              <br className="hidden md:inline" />
              <span className="text-base-content">Engineers Association</span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
              Transforming local engineering expertise into global leadership to
              build a highly sustainable, resilient, and inclusive world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#about"
                className="btn btn-primary text-white shadow-lg group"
              >
                Explore About GSEA
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn btn-outline btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* --- ABOUT SECTION --- */}
        {/* 3. Added 'snap-start min-h-screen flex items-center' to anchor section cleanly */}
        <section
          id="about"
          className="py-20 px-4 max-w-6xl mx-auto snap-start min-h-screen flex items-center shrink-0"
        >
          <div className="grid md:grid-cols-12 gap-12 items-center w-full">
            <div className="md:col-span-5 space-y-4">
              <div className="text-sm font-bold text-primary uppercase tracking-widest">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                About GSEA
              </h2>
              <div className="divider divider-primary w-24 m-0"></div>
            </div>
            <div className="md:col-span-7 bg-base-200 p-8 rounded-2xl border border-base-300 shadow-sm">
              <p className="text-lg leading-relaxed text-base-content/80">
                Founded by the Global South Economic Forum (GSEF), GSEA connects
                engineering associations from
                <span className="font-semibold text-base-content"> Africa</span>
                ,
                <span className="font-semibold text-base-content">
                  {" "}
                  Asia & the Pacific
                </span>
                , and
                <span className="font-semibold text-base-content">
                  {" "}
                  Latin America & the Caribbean
                </span>
                . Our core mission is to bridge local innovations into
                cross-border frameworks, maximizing development.
              </p>
            </div>
          </div>
        </section>

        {/* --- BENEFITS / WHY JOIN SECTION --- */}
        {/* 4. Configured uniform height and layout properties for programmatic layout alignment */}
        <section
          id="programs"
          className="bg-base-200 py-20 px-4 snap-start min-h-screen flex items-center shrink-0"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Why Join GSEA?
              </h2>
              <p className="text-base-content/70">
                Empowering regional associations to unlock collective influence
                and advance professional engineering excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="card bg-base-100 shadow border border-base-300 transition-all hover:shadow-md">
                <div className="card-body">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-2">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="card-title text-xl font-bold">
                    Shape Global Standards
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Contribute your region’s unique engineering perspectives to
                    international policies, frameworks, and sustainable
                    development strategies.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="card bg-base-100 shadow border border-base-300 transition-all hover:shadow-md">
                <div className="card-body">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-2">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="card-title text-xl font-bold">
                    Share Knowledge
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Exchange cutting-edge research, innovations, and best
                    practices with engineering professionals across the Global
                    South.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="card bg-base-100 shadow border border-base-300 transition-all hover:shadow-md">
                <div className="card-body">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-2">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="card-title text-xl font-bold">
                    Collaborate Regionally
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Build strong partnerships and strengthen your collective
                    influence as part of a united engineering community.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="card bg-base-100 shadow border border-base-300 transition-all hover:shadow-md">
                <div className="card-body">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-2">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="card-title text-xl font-bold">
                    Develop Talent
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Access training programs, mentorship opportunities, and
                    capacity-building initiatives to advance professional
                    growth.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="card bg-base-100 shadow border border-base-300 transition-all hover:shadow-md">
                <div className="card-body">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="card-title text-xl font-bold">
                    Gain Recognition
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Showcase your achievements, projects, and success stories on
                    a global platform that celebrates engineering excellence.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="card bg-base-100 shadow border border-base-300 transition-all hover:shadow-md">
                <div className="card-body">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-2">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="card-title text-xl font-bold">
                    Drive Sustainability
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Contribute to solutions aligned with the UN Sustainable
                    Development Goals (SDGs), advancing climate resilience and
                    sustainable development initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION & FOOTER WRAPPER --- */}
        {/* 5. Combined CTA + Footer into one snap block. 
          This avoids bad formatting on screens where small contents cannot fill up a full vh segment.
        */}
        <div className="snap-start min-h-screen flex flex-col justify-between shrink-0 bg-base-100">
          <section
            id="sponsorship"
            className="py-20 px-4 text-center max-w-4xl mx-auto flex-grow flex items-center justify-center"
          >
            <div className="bg-gradient-to-br from-primary to-secondary text-primary-content p-8 md:p-12 rounded-3xl shadow-xl space-y-6 w-full">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Ready to Drive Impact?
              </h2>
              <p className="max-w-xl mx-auto opacity-90 text-md md:text-lg">
                Join forces with engineering bodies across continents to unify
                development standards and empower local infrastructure
                initiatives.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn btn-white btn-wide font-bold shadow-md group gap-2"
                >
                  Become a Partner Member
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </section>

          {/* --- FOOTER --- */}
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

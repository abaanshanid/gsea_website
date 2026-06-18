import React from "react";
import {
  Globe,
  Leaf,
  Users,
  Scale,
  Clock,
  Layers,
  Award,
  BookOpen,
  Compass,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
export default function ProgramsPage() {
  return (
    <div className="bg-base-100 min-h-screen text-base-content antialiased selection:bg-primary selection:text-primary-content">
      <Navbar></Navbar>
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-base-200 via-base-200/50 to-base-100 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-base-content">
            Initiatives, Workshops & Community Activities
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Driving engineering excellence, sustainable infrastructure
            development, and cross-border knowledge networks across the Global
            South.
          </p>
        </div>
      </section>

      {/* --- SECTION 1: ACTIVE INITIATIVES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Active Initiatives
          </h2>
          <p className="text-sm text-base-content/60 mt-1">
            Core programs actively shaping the global developing landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Global Engineers Network */}
          <div className="group bg-base-100 border border-base-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-2xl ring-4 ring-primary/5">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="badge badge-success badge-sm font-bold text-[10px] text-white tracking-wide rounded-md px-2.5 py-2">
                  ACTIVE
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                Global Engineers Network
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                A digital platform connecting engineers from 50+ nations for
                knowledge sharing, collaboration and joint projects across the
                Global South.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-base-200">
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-base-200 text-base-content/80 text-[10px] font-bold px-2 py-1 rounded">
                  500+ Members
                </span>
                <span className="bg-base-200 text-base-content/80 text-[10px] font-bold px-2 py-1 rounded">
                  50+ Countries
                </span>
              </div>
              <button className="btn btn-primary btn-sm btn-block rounded-xl group-hover:gap-3 transition-all">
                Join Initiative <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Sustainable Engineering Program */}
          <div className="group bg-base-100 border border-base-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-secondary/10 text-secondary rounded-2xl ring-4 ring-secondary/5">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="badge badge-success badge-sm font-bold text-[10px] text-white tracking-wide rounded-md px-2.5 py-2">
                  ACTIVE
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-secondary transition-colors">
                Sustainable Engineering
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                Supporting engineers who are developing sustainable
                infrastructure solutions aligned with the UN Sustainable
                Development Goals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-base-200">
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-base-200 text-base-content/80 text-[10px] font-bold px-2 py-1 rounded">
                  20+ Projects
                </span>
                <span className="bg-base-200 text-base-content/80 text-[10px] font-bold px-2 py-1 rounded">
                  15 Countries
                </span>
              </div>
              <button className="btn btn-outline btn-secondary btn-sm btn-block rounded-xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Mentorship Program */}
          <div className="group bg-base-100 border border-base-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-accent/10 text-accent rounded-2xl ring-4 ring-accent/5">
                  <Users className="w-5 h-5" />
                </div>
                <span className="badge badge-success badge-sm font-bold text-[10px] text-white tracking-wide rounded-md px-2.5 py-2">
                  ACTIVE
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors">
                Mentorship Program
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                Connecting experienced engineers with young professionals across
                the Global South for career guidance and professional
                development.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-base-200">
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-base-200 text-base-content/80 text-[10px] font-bold px-2 py-1 rounded">
                  100+ Mentors
                </span>
                <span className="bg-base-200 text-base-content/80 text-[10px] font-bold px-2 py-1 rounded">
                  200+ Mentees
                </span>
              </div>
              <button className="btn btn-outline btn-accent btn-sm btn-block rounded-xl">
                Apply Now
              </button>
            </div>
          </div>

          {/* Policy Advocacy Initiative */}
          <div className="group bg-base-200/60 border border-dashed border-base-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between opacity-90">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-base-300 text-base-content/70 rounded-2xl">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="badge badge-warning badge-sm font-bold text-[10px] text-warning-content tracking-wide rounded-md px-2.5 py-2">
                  UPCOMING
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight opacity-80">
                Policy Advocacy
              </h3>
              <p className="text-xs text-base-content/60 leading-relaxed">
                Representing Global South engineers in international policy
                discussions to shape engineering standards and frameworks
                globally.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-base-300/60">
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-base-300/80 text-base-content/80 text-[10px] font-semibold px-2 py-1 rounded">
                  Launching 2025
                </span>
                <span className="bg-base-300/80 text-base-content/80 text-[10px] font-semibold px-2 py-1 rounded">
                  International
                </span>
              </div>
              <button className="btn btn-disabled btn-sm btn-block rounded-xl">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WORKSHOPS & TRAINING --- */}
      <section className="bg-base-200/40 py-16 border-y border-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-base-300 pb-5">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Workshops & Training
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Hands-on, curriculum-backed learning experiences designed to build
              practical technical skillsets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Workshop 1 */}
            <div className="bg-base-100 rounded-3xl shadow-sm border border-base-300 overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="p-6 pb-0 flex justify-between items-center text-xs font-bold text-base-content/50">
                  <span className="flex items-center gap-1 bg-secondary/10 text-secondary px-2.5 py-1 rounded-md">
                    <Globe className="w-3. h-3" /> ONLINE
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 3 Hours
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Intermediate
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    Sustainable Infrastructure Design
                  </h3>
                  <p className="text-xs text-base-content/70 leading-relaxed">
                    Learn to design sustainable infrastructure solutions
                    tailored for the unique spatial and fiscal challenges of
                    developing nations.
                  </p>

                  <div className="bg-base-200/50 rounded-2xl p-4 space-y-2">
                    <h4 className="text-[11px] uppercase font-black text-base-content/40 tracking-wider">
                      What You'll Learn:
                    </h4>
                    <ul className="text-xs space-y-1.5 text-base-content/80">
                      <li className="flex items-center gap-2">
                        🏽{" "}
                        <span className="font-medium">
                          Sustainable design principles
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        🪙{" "}
                        <span className="font-medium">
                          Cost-effective solutions
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        📑{" "}
                        <span className="font-medium">
                          Real-world case studies
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="btn btn-primary btn-block rounded-xl">
                  Register Now
                </button>
              </div>
            </div>

            {/* Workshop 2 */}
            <div className="bg-base-100 rounded-3xl shadow-sm border border-base-300 overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="p-6 pb-0 flex justify-between items-center text-xs font-bold text-base-content/50">
                  <span className="flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                    <MapPin className="w-3 h-3" /> IN-PERSON
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Full Day
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3" /> All Levels
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    Digital Transformation in Engineering
                  </h3>
                  <p className="text-xs text-base-content/70 leading-relaxed">
                    Explore how emerging digital tools, CAD suites, and machine
                    models are reshaping daily engineering practice globally.
                  </p>

                  <div className="bg-base-200/50 rounded-2xl p-4 space-y-2">
                    <h4 className="text-[11px] uppercase font-black text-base-content/40 tracking-wider">
                      What You'll Learn:
                    </h4>
                    <ul className="text-xs space-y-1.5 text-base-content/80">
                      <li className="flex items-center gap-2">
                        🔧{" "}
                        <span className="font-medium">
                          Digital engineering tools
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        🤖{" "}
                        <span className="font-medium">
                          AI in engineering practice
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        📈{" "}
                        <span className="font-medium">
                          Implementation strategies
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="btn btn-primary btn-block rounded-xl">
                  Register Now
                </button>
              </div>
            </div>

            {/* Workshop 3 */}
            <div className="bg-base-100 rounded-3xl shadow-sm border border-base-300 overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="p-6 pb-0 flex justify-between items-center text-xs font-bold text-base-content/50">
                  <span className="flex items-center gap-1 bg-secondary/10 text-secondary px-2.5 py-1 rounded-md">
                    <Globe className="w-3 h-3" /> ONLINE
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 2 Hours
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Beginner
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    Engineering Leadership & Management
                  </h3>
                  <p className="text-xs text-base-content/70 leading-relaxed">
                    Develop tactical project deployment matrices and team
                    structures needed to navigate scale-focused development
                    cycles.
                  </p>

                  <div className="bg-base-200/50 rounded-2xl p-4 space-y-2">
                    <h4 className="text-[11px] uppercase font-black text-base-content/40 tracking-wider">
                      What You'll Learn:
                    </h4>
                    <ul className="text-xs space-y-1.5 text-base-content/80">
                      <li className="flex items-center gap-2">
                        👔{" "}
                        <span className="font-medium">
                          Leadership fundamentals
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        📁{" "}
                        <span className="font-medium">Project management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        👥{" "}
                        <span className="font-medium">
                          Team building skills
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="btn btn-primary btn-block rounded-xl">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Community Activites
          </h2>
          <p className="text-sm text-base-content/60 mt-1">
            Volunteer pipelines making operational changes at regional and local
            levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-base-100 p-8 rounded-3xl border border-base-300 relative overflow-hidden group flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold tracking-tight">
                Community Outreach Program
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                Engineers volunteer in local communities across the Global South
                to provide technical expertise and support grassroots
                development projects.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-base-200 flex items-center justify-between">
              <div className="text-[11px] font-bold text-base-content/60">
                <span className="block text-primary">Multiple Cities</span>
                <span>200+ Volunteers</span>
              </div>
              <button className="btn btn-sm btn-outline rounded-xl">
                Volunteer
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-base-100 p-8 rounded-3xl border border-base-300 relative overflow-hidden group flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold tracking-tight">
                Engineering in Schools
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                GSEA engineers visit local institutional frameworks to inspire
                the next generation, running live technical modules and design
                demonstrations.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-base-200 flex items-center justify-between">
              <div className="text-[11px] font-bold text-base-content/60">
                <span className="block text-primary">50+ Schools</span>
                <span>5000+ Students</span>
              </div>
              <button className="btn btn-sm btn-outline rounded-xl">
                Get Involved
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-base-100 p-8 rounded-3xl border border-base-300 relative overflow-hidden group flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold tracking-tight">
                Regional Engineering Hubs
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                Localized nodes operating across Africa, Asia, and Latin America
                where professionals coordinate regular meetups and asset sharing
                pipelines.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-base-200 flex items-center justify-between">
              <div className="text-[11px] font-bold text-base-content/60">
                <span className="block text-primary">3 Regions</span>
                <span>10+ Hubs</span>
              </div>
              <button className="btn btn-sm btn-outline rounded-xl">
                Find a Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW TO JOIN PROCESS MAP --- */}
      <section className="bg-base-200/50 py-20 px-4 sm:px-6 lg:px-8 border-t border-base-300">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black tracking-tight">
              Get Involved: How to Join
            </h2>
            <p className="text-sm text-base-content/60 max-w-md mx-auto">
              Follow our three-step deployment roadmap to access our active
              global ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200 relative">
              <span className="absolute -top-4 left-6 text-2xl font-black text-primary/20 bg-base-100 px-2">
                01
              </span>
              <div className="mt-2 space-y-2">
                <h3 className="text-md font-bold tracking-tight">
                  Submit Your Application
                </h3>
                <p className="text-xs text-base-content/60 leading-relaxed">
                  Fill in our contact form selecting "Membership" as your
                  enquiry type with your profile and core background parameters.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200 relative">
              <span className="absolute -top-4 left-6 text-2xl font-black text-primary/20 bg-base-100 px-2">
                02
              </span>
              <div className="mt-2 space-y-2">
                <h3 className="text-md font-bold tracking-tight">
                  Review Process
                </h3>
                <p className="text-xs text-base-content/60 leading-relaxed">
                  Our evaluation pipeline screens credentials and processes
                  updates within 5 business days with direct onboarding setups.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200 relative">
              <span className="absolute -top-4 left-6 text-2xl font-black text-primary/20 bg-base-100 px-2">
                03
              </span>
              <div className="mt-2 space-y-2">
                <h3 className="text-md font-bold tracking-tight">
                  Welcome to GSEA
                </h3>
                <p className="text-xs text-base-content/60 leading-relaxed">
                  Once verified, gain immediate access to all GSEA assets,
                  engineering modules, live workshops, and cross-border
                  networks.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <button className="btn btn-primary btn-wide rounded-xl shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

import {
  Calendar,
  ArrowUpRight,
  ArrowRight,
  Megaphone,
  FileText,
  Handshake,
  Newspaper,
} from "lucide-react";
import Footer from "./Footer";

// TODO: replace these placeholder image paths with real files once you get
// them from your teammate (e.g. public/images/media/...).
const featuredArticle = {
  image: "/media_assets/media1.jpg",
  date: "May 16, 2026",
  tag: "Announcement",
  title: "AfDB & AARDO Formalise Strategic Partnership with GS-IDF",
  description:
    "New cooperation framework to accelerate infrastructure, rural development and climate finance across Africa and Asia.",
  body:
    "The African Development Bank and AARDO have formalised a strategic partnership with the Global South Integrated Development Framework, marking a major milestone for development cooperation across the Global South.",
};

const newsArticles = [
  {
    image: "/media_assets/media2.jpg",
    date: "April 3, 2026",
    tag: "Event",
    title: "Inaugural Global South Universities Forum Opens in New Delhi",
    description:
      "Over 70 university leaders gathered to shape the future of knowledge diplomacy and research mobility across the Global South.",
  },
  {
    image: "/media_assets/media3.jpg",
    date: "March 22, 2026",
    tag: "Partnership",
    title: "Diaspora Investment Summit Mobilises $250M Commitment",
    description:
      "GSDF-led initiative connects diaspora investors with agribusiness and renewable energy projects across the Global South.",
  },
  {
    image: "/media_assets/media4.jpg",
    date: "March 1, 2026",
    tag: "Community",
    title: "Global South Sustainable Development Summit Announced for June 2026",
    description:
      "High-level gathering of heads of state, ministers and private sector leaders confirmed for Addis Ababa, Ethiopia in June 2026.",
  },
];

const announcements = [
  {
    icon: Megaphone,
    date: "May 20, 2025",
    tag: "Official",
    title: "Call for Nominations — GSEA Board Elections 2025",
    description:
      "GSEA invites nominations from qualified engineers across the Global South for the upcoming board elections. Nominations close June 30, 2025.",
    linkLabel: "Read Announcement",
  },
  {
    icon: FileText,
    date: "May 5, 2025",
    tag: "Circular",
    title: "Annual Conference 2025 — Registration Now Open",
    description:
      "Registration for the GSEA Annual Conference 2025 is now officially open. Early bird registration closes April 30, 2025.",
    linkLabel: "Register Now",
  },
  {
    icon: Handshake,
    date: "April 15, 2025",
    tag: "Partnership",
    title: "GSEA Welcomes New Gold Sponsor for 2025",
    description:
      "GSEA is pleased to announce a new Gold level sponsorship partnership for the 2025 calendar year.",
    linkLabel: "Learn More",
  },
];

const mediaCoverage = [
  {
    source: "Zawya",
    handle: null,
    title:
      "Global South Economic Forum to Address US$4 Trillion Annual Funding Gap",
    description:
      "The first-ever GSEF in Abu Dhabi brought together policymakers, technocrats and innovators to close the critical development financing gap.",
  },
  {
    source: "Instagram",
    handle: "@auap_conference",
    title: "AASGON Named Co-Host of 38th AUAP Annual Conference 2026",
    description:
      "AASGON welcomed as Co-Host Partner of the 38th AUAP General Conference, held in Kecskemét, Hungary, September 15-17, 2026.",
  },
  {
    source: "Instagram",
    handle: "@ajeenkyadypatiluniversity",
    title:
      "ADYPU & AASGON Sign MoU to Drive Quality Education and Global Partnerships",
    description:
      "Ajeenkya DY Patil University and AASGON join hands in a formal MoU to empower learners, foster quality education and build transformative global partnerships.",
  },
];

export default function Media() {
  return (
    <div className="bg-base-100 text-base-content">
      {/* --- HERO --- */}
      <header className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-4">
            <div className="text-sm font-bold text-primary uppercase tracking-widest">
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              News & Media
            </h1>
            <div className="divider divider-primary w-24 m-0"></div>
          </div>
          <div className="md:col-span-7 bg-base-200 p-8 rounded-2xl border border-base-300 shadow-sm">
            <p className="text-lg leading-relaxed text-base-content/80">
              Stay informed with the latest from GSEA and the
              <span className="font-semibold text-base-content"> Global South </span>
              engineering community — announcements, partnerships, and
              coverage from the press.
            </p>
          </div>
        </div>
      </header>

      {/* --- FEATURED + NEWS GRID --- */}
      <section className="bg-base-200 py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              News & Articles
            </h2>
            <p className="text-base-content/70">
              The latest from across the network, in one place.
            </p>
          </div>

          {/* Featured article */}
          <div className="card lg:card-side bg-base-100 border border-base-300 shadow-md mb-10 overflow-hidden">
            <div className="lg:w-1/2 relative overflow-hidden">
              <span className="absolute top-4 left-4 z-10 badge badge-primary text-white border-none">
                Featured
              </span>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-64 lg:h-full object-cover"
              /> 
            </div>
            <div className="card-body lg:w-1/2">
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-primary font-medium">
                  <Calendar className="w-4 h-4" />
                  {featuredArticle.date}
                </span>
                <span className="p-1 px-2 bg-primary/10 text-primary rounded-md text-xs font-bold uppercase tracking-wide">
                  {featuredArticle.tag}
                </span>
              </div>
              <h3 className="card-title text-2xl">{featuredArticle.title}</h3>
              <p className="text-base-content/70">
                {featuredArticle.description}
              </p>
              <p className="text-base-content/70">{featuredArticle.body}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary text-white btn-sm gap-2">
                  Read Full Article
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* News grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((item, index) => (
              <div
                key={index}
                className="card bg-base-100 border border-base-300 shadow transition-all hover:shadow-md overflow-hidden"
              >
                <figure className="relative h-40">
                  <span className="absolute top-3 left-3 z-10 badge badge-primary badge-sm text-white border-none">
                    {item.tag}
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="card-title text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    {item.description}
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <button className="btn btn-ghost btn-sm gap-1">
                      Read More
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ANNOUNCEMENTS & CIRCULARS --- */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Official Updates
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Announcements & Circulars
            </h2>
            <p className="text-base-content/70">
              Official announcements from the GSEA leadership and board.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {announcements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-200 border border-base-300 shadow-sm"
                >
                  <div className="card-body flex-row items-start gap-4 py-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <span className="p-1 px-2 bg-base-100 rounded-md text-xs font-bold uppercase tracking-wide text-base-content/60 border border-base-300">
                          {item.tag}
                        </span>
                        <span className="text-base-content/50 flex items-center gap-1 text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-base-content/70 text-sm mb-2">
                        {item.description}
                      </p>
                      <a className="link link-primary text-sm font-medium">
                        {item.linkLabel} →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MEDIA COVERAGE --- */}
      <section className="bg-base-200 py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              In The Press
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Media Coverage
            </h2>
            <p className="text-base-content/70">
              See how the world is talking about GSEA and the Global South
              engineering movement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaCoverage.map((item, index) => (
              <div
                key={index}
                className="card bg-base-100 border border-base-300 shadow transition-all hover:shadow-md"
              >
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <Newspaper className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">
                      {item.source}
                      {item.handle && (
                        <span className="text-base-content/60">
                          {" "}
                          — {item.handle}
                        </span>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-secondary text-primary-content p-8 md:p-12 rounded-3xl shadow-xl space-y-6 w-full">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Have a Story for Us?
          </h2>
          <p className="max-w-xl mx-auto opacity-90 text-md md:text-lg">
            Reach out if you have news, a partnership, or coverage you would
            like featured here.
          </p>
          <div className="pt-2">
            <a
              href="/#contact"
              className="btn btn-white font-bold shadow-md group gap-2"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

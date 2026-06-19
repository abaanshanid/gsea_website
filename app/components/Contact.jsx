"use client";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Globe,
  ArrowRight,
  ChevronRight,
  Check,
  Plus,
  Minus,
  Send,
  Users,
  Handshake,
} from "lucide-react";

import Footer from "./Footer";

const faqs = [
  {
    q: "How do I join GSEA?",
    a: "Joining GSEA is open to any engineering association from the Global South. Simply fill out the contact form selecting 'Membership Enquiry' and our team will guide you through the onboarding process.",
  },
  {
    q: "How can I register for events?",
    a: "Event registration links are available on our Events page. You can also reach out via the contact form or email events@gsea.org and we'll send you the details directly.",
  },
  {
    q: "How do I become a sponsor?",
    a: "Head over to our Sponsorship page to explore Bronze, Silver and Gold packages — or use the contact form to request a custom package tailored to your organisation.",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-base-300 transition-colors duration-200 ${open ? "bg-base-200/40" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 px-0 text-left group"
      >
        <span className={`font-extrabold text-base md:text-lg tracking-tight transition-colors ${open ? "text-primary" : "group-hover:text-primary"}`}>
          {q}
        </span>

        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
          open
            ? "bg-primary border-primary text-primary-content"
            : "border-base-300 text-base-content/40 group-hover:border-primary group-hover:text-primary"
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      {open && (
        <p className="text-base-content/60 text-sm leading-relaxed pb-6">
          {a}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-base-100 text-base-content flex flex-col min-h-screen">

      {/* HERO */}
      <header className="relative overflow-hidden bg-base-content min-h-[48vh] flex items-end">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="heroDotsC" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroDotsC)" />
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
          <span className="text-[160px] md:text-[220px] font-black text-base-100/[0.03] leading-none tracking-tighter">
            CONTACT
          </span>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 pb-14 pt-24">
          <div className="grid lg:grid-cols-2 gap-10 items-end">

            <div>
              <p className="text-primary/80 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Global South Engineers Association
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-base-100 leading-[0.9] tracking-tight">
                GET IN <span className="text-primary">TOUCH</span>
              </h1>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <p className="text-base-100/40 text-sm lg:text-right max-w-xs">
                Reach out for enquiries, partnerships or general questions.
              </p>

              <div className="flex flex-wrap lg:justify-end gap-2 mt-2">
                {[
                  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Doha, Qatar" },
                  { icon: <Mail className="w-3.5 h-3.5" />, label: "info@gsea.org" },
                  { icon: <Globe className="w-3.5 h-3.5" />, label: "www.gsea.org" },
                ].map((pill, i) => (
                  <span key={i} className="flex items-center gap-2 bg-base-100/10 border border-base-100/10 text-base-100/60 text-xs font-medium px-3 py-1.5 rounded-full">
                    <span className="text-primary">{pill.icon}</span>
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* CONTACT STRIP */}
      <div className="bg-base-200 border-b border-base-300">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div>
            <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit">
              <MapPin className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold mt-2">Doha, Qatar</p>
          </div>

          <div>
            <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit">
              <Mail className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold mt-2">info@gsea.org</p>
          </div>

          <div>
            <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit">
              <Globe className="w-4 h-4" />
            </div>

            {/* SAFE SOCIAL ICONS (NO LUCIDE ISSUES) */}
            <div className="flex gap-2 mt-2">
              {["I", "L", "F"].map((t, i) => (
                <span key={i} className="w-7 h-7 rounded-full bg-base-content/10 flex items-center justify-center text-xs font-bold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit">
              <Handshake className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold mt-2">GSEF</p>
          </div>

        </div>
      </div>

      {/* FORM SECTION */}
      <main className="flex-grow px-6 md:px-16 py-20 max-w-6xl mx-auto">
        <div className="bg-base-200 p-8 rounded-2xl border border-base-300">

          <div className="grid sm:grid-cols-2 gap-5">
            <input className="input input-bordered" placeholder="Full Name" />
            <input className="input input-bordered" placeholder="Email" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <input className="input input-bordered" placeholder="Organisation" />
            <input className="input input-bordered" placeholder="Country" />
          </div>

          <div className="mt-5">
            <textarea className="textarea textarea-bordered w-full" rows={5} placeholder="Message" />
          </div>

          <button className="btn btn-primary mt-5 gap-2">
            SEND MESSAGE <Send className="w-4 h-4" />
          </button>

        </div>
      </main>

      <Footer />
    </div>
  );
}
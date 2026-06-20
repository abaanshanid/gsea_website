"use client";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Globe,
  Plus,
  Minus,
  Send,
  Handshake,
  MessageSquare,
  Sparkles,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

import Footer from "./Footer";

const faqs = [
  {
    q: "How do I join GSEA?",
    a: "Fill in the contact form above selecting Membership as your enquiry type. Our team will guide you through the process.",
  },
  {
    q: "How can I register for upcoming summits?",
    a: "Visit our Events page to see upcoming events and register directly. You can also contact us for assistance.",
  },
  {
    q: "How can my enterprise become a platform sponsor?",
    a: "Visit our Sponsorship page to view packages, or contact us directly at partnerships@gsea.org.",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border border-base-300 rounded-2xl p-5 transition-all duration-300 bg-base-100 ${open ? "shadow-md ring-1 ring-primary/20" : "hover:border-base-content/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 text-left group"
      >
        <span className={`font-black text-base md:text-lg tracking-tight transition-colors ${open ? "text-primary" : "text-base-content group-hover:text-primary"}`}>
          {q}
        </span>

        <span className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
          open
            ? "bg-primary border-primary text-primary-content rotate-180"
            : "border-base-300 text-base-content/40 group-hover:border-primary group-hover:text-primary"
        }`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-base-content/70 text-sm leading-relaxed border-t border-base-200 pt-3">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", org: "", country: "", category: "General Enquiry", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", org: "", country: "", category: "General Enquiry", msg: "" });
    }, 4000);
  };

  return (
    <div className="bg-base-100 text-base-content flex flex-col min-h-screen selection:bg-primary selection:text-primary-content">

      {/* --- SECTION 1: HERO CONTAINER (Swapped from bg-base-content to bg-white) --- */}
      <header className="relative overflow-hidden bg-white min-h-[42vh] flex items-end border-b border-base-200">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="heroDotsC" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="black" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroDotsC)" />
          </svg>
        </div>

        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-12 pointer-events-none select-none overflow-hidden">
          <span className="text-[14vw] font-black text-base-content/[0.02] leading-none tracking-tighter uppercase">
            Connect
          </span>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pb-12 pt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-md mb-4 backdrop-blur-md">
              <Mail className="w-3 h-3 animate-pulse" /> Get Involved
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-base-content leading-[0.95] tracking-tight uppercase">
              Get in <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text">Touch</span>
            </h1>
            <p className="text-base-content/50 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
              We'd love to hear from you — reach out for enquiries, partnerships or general questions
            </p>
          </div>
        </div>
      </header>

      {/* --- SECTION 2: MAIN GRID OPERATIONS --- */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 md:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Metadata Pillars & FAQ Station */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-black text-primary mb-1">Quick Connect</h2>
              <p className="text-2xl font-black tracking-tight">Contact Information</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a 
                href="https://maps.google.com/?q=Doha,Qatar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card bg-base-200 border border-base-300 shadow-sm p-4 rounded-2xl flex flex-row gap-4 items-center group hover:bg-base-300/40 hover:border-primary/40 transition-all duration-200"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-200 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase opacity-40 block tracking-wider">Location</span>
                  <span className="font-extrabold text-sm text-base-content block mt-0.5 group-hover:text-primary transition-colors">Doha, Qatar</span>
                  <span className="text-xs text-base-content/60 block">Global South Economic Forum</span>
                </div>
              </a>

              <a 
                href="mailto:info@gsea.org" 
                className="card bg-base-200 border border-base-300 shadow-sm p-4 rounded-2xl flex flex-row gap-4 items-center group hover:bg-base-300/40 hover:border-primary/40 transition-all duration-200"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-200 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase opacity-40 block tracking-wider">Email</span>
                  <span className="font-extrabold text-sm text-base-content block mt-0.5 group-hover:text-primary transition-colors">info@gsea.org</span>
                  <span className="text-xs text-base-content/60 block">partnerships@gsea.org</span>
                </div>
              </a>

              <div className="card bg-base-200 border border-base-300 shadow-sm p-4 rounded-2xl flex flex-row gap-4 items-center">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase opacity-40 block tracking-wider">Parent Organisation</span>
                  <span className="font-extrabold text-sm text-base-content block mt-0.5">Global South Economic Forum</span>
                  <span className="text-xs text-base-content/60 block">Visit GSEF for more</span>
                </div>
              </div>

              {/* SAFE VECTOR SOCIAL GRID */}
              <div className="card bg-base-200 border border-base-300 shadow-sm p-4 rounded-2xl flex flex-row gap-4 items-center">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <span className="text-[10px] font-bold uppercase opacity-40 block tracking-wider">Official Social Media Handles</span>
                  <div className="grid grid-cols-4 gap-2 mt-2.5 w-full">
                    {[
                      { 
                        svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />, 
                        url: "https://linkedin.com/company/gsea", 
                        label: "LinkedIn" 
                      },
                      { 
                        svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />, 
                        url: "https://facebook.com/gsea", 
                        label: "Facebook" 
                      },
                      { 
                        svg: <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm4 15a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" />, 
                        url: "https://instagram.com/gsea", 
                        label: "Instagram" 
                      },
                      { 
                        svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />, 
                        url: "https://twitter.com/gsea", 
                        label: "Twitter" 
                      }
                    ].map((platform, i) => (
                      <a 
                        key={i} 
                        href={platform.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${platform.label} channel`}
                        className="flex py-2.5 rounded-xl bg-base-100 border border-base-300 text-base-content justify-center items-center transition-all hover:bg-primary hover:border-primary hover:text-primary-content active:scale-95 shadow-sm hover:shadow-md"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          {platform.svg}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-base-300 space-y-4">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-black text-primary mb-1">Frequent Q&A</h3>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <FAQ key={idx} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Matrix Interface Terminal */}
          <div className="lg:col-span-7 lg:sticky lg:top-8">
            <div className="card bg-base-200 border border-base-300 shadow-xl rounded-3xl overflow-hidden relative">
              {submitted && (
                <div className="absolute inset-0 bg-base-200/95 z-20 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-fadeIn">
                  <div className="p-4 bg-success/10 text-success rounded-full ring-8 ring-success/5 mb-4 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">Sent</h3>
                  <p className="text-sm text-base-content/70 mt-2 max-w-sm leading-relaxed">
                    GSEA will contact you back shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSend} className="card-body p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 border-b border-base-300 pb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-base uppercase tracking-wider">Contact GSEA</h3>
                    <p className="text-xs text-base-content/60">Fill out all the fields so that we can reach you</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label-text text-xs font-black uppercase opacity-60 mb-1.5 px-1">Full Name</label>
                    <input 
                      required 
                      type="text"
                      className="input input-bordered rounded-xl bg-base-100 text-sm focus:outline-primary w-full" 
                      placeholder="Er. Jane Doe" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label-text text-xs font-black uppercase opacity-60 mb-1.5 px-1">Email</label>
                    <input 
                      required 
                      type="email"
                      className="input input-bordered rounded-xl bg-base-100 text-sm focus:outline-primary w-full" 
                      placeholder="jane@organisation.org" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label-text text-xs font-black uppercase opacity-60 mb-1.5 px-1">Organisation</label>
                    <input 
                      required 
                      type="text"
                      className="input input-bordered rounded-xl bg-base-100 text-sm focus:outline-primary w-full" 
                      placeholder="e.g., Qatar Engineering Board" 
                      value={formState.org}
                      onChange={(e) => setFormState({...formState, org: e.target.value})}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label-text text-xs font-black uppercase opacity-60 mb-1.5 px-1">Country</label>
                    <input 
                      required 
                      type="text"
                      className="input input-bordered rounded-xl bg-base-100 text-sm focus:outline-primary w-full" 
                      placeholder="e.g., Qatar" 
                      value={formState.country}
                      onChange={(e) => setFormState({...formState, country: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label-text text-xs font-black uppercase opacity-60 mb-1.5 px-1">Enquiry Type</label>
                  <select 
                    className="select select-bordered rounded-xl bg-base-100 text-sm focus:outline-primary w-full"
                    value={formState.category}
                    onChange={(e) => setFormState({...formState, category: e.target.value})}
                  >
                    <option>General Enquiry</option>
                    <option>Membership Related</option>
                    <option>Sponsorship Related</option>
                    <option>Events Registration Related</option>
                    <option>Media & Press Related</option>
                    <option>Partnership Related</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label-text text-xs font-black uppercase opacity-60 mb-1.5 px-1">Message</label>
                  <textarea 
                    required 
                    className="textarea textarea-bordered rounded-xl bg-base-100 text-sm focus:outline-primary w-full resize-none" 
                    rows={4} 
                    placeholder="Write your message here..." 
                    value={formState.msg}
                    onChange={(e) => setFormState({...formState, msg: e.target.value})}
                  />
                </div>

                <div className="flex items-start gap-2.5 bg-base-100/50 p-3 rounded-xl border border-base-300 text-[11px] text-base-content/60 leading-normal">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Information is kept secure within GSEA with encryption</span>
                </div>

                <button type="submit" className="btn btn-primary rounded-xl font-black tracking-widest w-full gap-2 text-xs shadow-md shadow-primary/20 mt-1 uppercase active:scale-[0.99] transition-transform">
                  Send<Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
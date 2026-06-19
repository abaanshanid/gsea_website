import React from "react";
import { 
  Globe, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Building2 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content rounded-t-3xl border-t border-neutral-focus">
      
      {/* --- MAIN DIRECTORY BLOCK --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary text-primary-content rounded-xl font-black text-lg tracking-wider">
              
            </div>
            <span className="font-black text-xl tracking-tight text-white">GSEA</span>
          </div>
          <p className="text-xs text-neutral-content/70 leading-relaxed max-w-sm">
            The Global South Engineers Association — empowering engineers across the developing world through collaboration, innovation, and sustainable infrastructure deployment.
          </p>
        </div>

        {/* Quick Links Tree */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-medium text-neutral-content/80">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="/programs" className="hover:text-primary transition-colors">Programs</a></li>
            <li><a href="/events" className="hover:text-primary transition-colors">Events</a></li>
            <li><a href="/sponsorship" className="hover:text-primary transition-colors">Sponsorship</a></li>
            <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            <li><a href="/media" className="hover:text-primary transition-colors">Media</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-primary">Contact Info</h4>
          <ul className="space-y-3 text-xs text-neutral-content/80">
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Doha, Qatar</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:info@gsea.org" className="hover:underline">info@gsea.org</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-primary shrink-0" />
              <a href="https://www.gsea.org" target="_blank" rel="noreferrer" className="hover:underline">www.gsea.org</a>
            </li>
          </ul>
        </div>

        {/* Affiliated Partnerships */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-primary">Affiliated Organisations</h4>
          <div className="space-y-2">
            <a 
              href="#" 
              className="flex items-center justify-between p-3 rounded-xl bg-neutral-focus border border-white/5 text-xs font-semibold hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 opacity-60" />
                <span>IEI Qatar Chapter</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </a>
            
            <a 
              href="#" 
              className="flex items-center justify-between p-3 rounded-xl bg-neutral-focus border border-white/5 text-xs font-semibold hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 opacity-60" />
                <span>GS-IDF Ecosystem</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </a>
          </div>
        </div>

      </div>

      {/* --- FOOTNOTE & SYSTEM LEGAL LIMITS --- */}
      <div className="border-t border-white/5 bg-black/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-[11px] font-medium text-neutral-content/50 space-y-1">
            <p>© 2025 GSEA — Global South Engineering Alliance. All rights reserved.</p>
            <p className="opacity-70">
              Launched by the <span className="text-neutral-content/80 font-bold">Global South Economic Forum (GSEF)</span>
            </p>
          </div>
          
          <div className="flex gap-4 text-[11px] font-semibold text-neutral-content/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
"use client";

import React, { useState } from "react";
import { Play, Image as ImageIcon, ArrowRight } from "lucide-react";

// TODO: Replace these placeholder paths with the real image files once you
// get them from your teammate (likely belongs in public/images/gallery/).
const galleryItems = [
  { src: "/gallery_assets/gallery1.jpg", category: "Conferences", caption: "Plenary session, Global South Forum" },
  { src: "/gallery_assets/gallery2.jpg", category: "Conferences", caption: "Panel discussion on infrastructure finance" },
  { src: "/gallery_assets/gallery3.jpg", category: "Workshops", caption: "Engineering leadership workshop" },
  { src: "/gallery_assets/gallery4.jpg", category: "Workshops", caption: "Cross-border collaboration session" },
  { src: "/gallery_assets/gallery5.jpg", category: "Community", caption: "Member delegation, regional summit" },
  { src: "/gallery_assets/gallery6.jpg", category: "Community", caption: "Partnership signing ceremony" },
  { src: "/gallery_assets/gallery7.jpg", category: "Conferences", caption: "Closing address, annual conference" },
];

const filters = [
  { label: "All", icon: ImageIcon },
  { label: "Conferences", icon: ImageIcon },
  { label: "Workshops", icon: ImageIcon },
  { label: "Community", icon: ImageIcon },
];

// Real videos identified from the live site by title — swap the id values
// below for the actual YouTube video IDs once confirmed.
const videos = [
  {
    title: "Architects of a New Global South Institutional Ecosystem",
    description:
      "AASGON & GSEF present the GS-IDF — a new institutional ecosystem for the Global South.",
    tag: "AASGON & GSEF",
    youtubeUrl: "https://www.youtube.com/watch?v=UAdLGXnoD1I&t=12s",
    thumbnail: "https://img.youtube.com/vi/UAdLGXnoD1I/hqdefault.jpg",
  },
  {
    title: "Abdul Dewale Mohammed with S. Prakash — The Spiritual CEO",
    description:
      "AASGON & GSEF Founder Abdul Dewale Mohammed in conversation with author S. Prakash.",
    tag: "Leadership",
    youtubeUrl: "https://www.youtube.com/watch?v=GeQIEj5YuMc&t=1879s",
    thumbnail: "https://img.youtube.com/vi/GeQIEj5YuMc/hqdefault.jpg",
  },
  {
    title: "Press Conference on AASGON Meet",
    description:
      "Press conference introducing the Africa Asia Scholars Network to the world.",
    tag: "Press Conference",
    youtubeUrl: "https://www.youtube.com/watch?v=aLYS3TCwnIs",
    thumbnail: "https://img.youtube.com/vi/aLYS3TCwnIs/hqdefault.jpg",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-base-100 text-base-content">
      {/* --- HERO --- */}
      <header className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-4">
            <div className="text-sm font-bold text-primary uppercase tracking-widest">
              Moments & Memories
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Our Gallery
            </h1>
            <div className="divider divider-primary w-24 m-0"></div>
          </div>
          <div className="md:col-span-7 bg-base-200 p-8 rounded-2xl border border-base-300 shadow-sm">
            <p className="text-lg leading-relaxed text-base-content/80">
              A look back at the conferences, workshops, and community
              gatherings bringing engineers together across the
              <span className="font-semibold text-base-content"> Global South</span>.
              Every photo and recording is a moment from the work we do
              together.
            </p>
          </div>
        </div>
      </header>

      {/* --- FILTERS + PHOTO GRID --- */}
      <section className="bg-base-200 py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Browse Our Moments
            </h2>
            <p className="text-base-content/70">
              Filter by the kind of moment you want to relive.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.label}
                onClick={() => setActiveFilter(filter.label)}
                className={`btn btn-sm rounded-full ${
                  activeFilter === filter.label
                    ? "btn-primary text-white shadow"
                    : "btn-ghost bg-base-100 border border-base-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="card bg-base-100 border border-base-300 shadow transition-all hover:shadow-md overflow-hidden group"
              >
                <figure className="relative h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 badge badge-primary text-white border-none">
                    {item.category}
                  </span>
                </figure>
                <div className="card-body py-4">
                  <p className="text-sm text-base-content/70">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIDEO GALLERY --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Watch & Learn
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Video Gallery
            </h2>
            <p className="text-base-content/70">
              Highlights from our events and programs, straight from the
              source.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="card bg-base-100 border border-base-300 shadow transition-all hover:shadow-md overflow-hidden"
              >
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video bg-neutral group"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <div className="btn btn-circle btn-primary text-white shadow-lg">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>    
                </a>
                <div className="card-body">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit text-xs font-bold uppercase tracking-wide">
                    {video.tag}
                  </div>
                  <h3 className="card-title text-lg leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    {video.description}
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
            Have a Moment to Share?
          </h2>
          <p className="max-w-xl mx-auto opacity-90 text-md md:text-lg">
            If you have photos or videos from a GSEA event, we would love to
            feature them here.
          </p>
          <div className="pt-2">
            <a
              href="/#contact"
              className="btn btn-white font-bold shadow-md group gap-2"
            >
              Send Us Your Photos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

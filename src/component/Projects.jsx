import React from "react";
import SectionTitle from "./SectionTitle";
import tickitzImg from "../assets/tickitz.png";
import prosperaImg from "../assets/prospera.png";

const items = [
  {
    title: "Tickitz — Movie Ticketing",
    year: "2025",
    desc: "Schedule filtering, seat selection, payment, admin dashboard.",
    stack: ["React", "Redux", "Tailwind", "Go (Gin)", "PostgreSQL", "Docker"],
    demo: "",
    repo: "https://github.com/malailiyati/ticketing-react",
    image: tickitzImg,
    imageAlt: "Tickitz web app screenshot",
  },
  {
    title: "Prospera — E-Wallet Web App",
    year: "2025",
    desc: "Top-Up, transfer, PIN modal, transaction history, responsive UI.",
    stack: ["React", "Redux", "Tailwind", "Go (Gin)", "PostgreSQL"],
    demo: "",
    repo: "https://github.com/malailiyati/prospera-wallet-frontend",
    image: prosperaImg,
    imageAlt: "Prospera web app screenshot",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#5A0B1E] to-[rgba(0,0,0,0.9)] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          id="projects"
          title="Projects"
          subtitle="Selected work that highlights my full-stack capabilities."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:shadow-2xl hover:-translate-y-[2px] transition"
            >
              {/* Screenshot */}
              {p.image && (
                <div className="relative aspect-[16/9] bg-black/30 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt || p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <span className="text-xs text-gray-300">{p.year}</span>
                </div>

                <p className="mt-2 text-sm text-gray-200/90">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 rounded-full text-xs border border-white/10 text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-3 text-sm">
                  {/* {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[var(--color--primary)] text-[#5A0B1E] hover:opacity-90 transition"
                      aria-label={`Open live demo of ${p.title}`}
                    >
                      Live Demo
                    </a>
                  )} */}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-white/15 text-white/90 hover:bg-white/10 transition"
                      aria-label={`Open repository of ${p.title}`}
                    >
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

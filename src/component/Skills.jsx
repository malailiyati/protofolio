import React from "react";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const items = [
    "React",
    "CSS",
    "HTML",
    "JavaScript",
    "Tailwind",
    "Redux",
    "Node.js",
    "Express",
    "Golang",
    "PostgreSQL",
    "Docker",
    "Linux",
    "SSH",
    "SQL",
    "Vite",
    "Git & GitHub",
  ];

  // makin kecil = makin cepat
  const DURATION = "28s";
  const loop = [...items, ...items];

  return (
    <section className="relative w-full bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#5A0B1E] pt-16">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          animation: marquee var(--marquee-duration, 30s) linear infinite;
          will-change: transform;
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-play-state: paused !important; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          id="skills"
          title="Skills"
          subtitle="language & Tools that I use and study"
        />

        <div
          className="relative mt-5 overflow-hidden marquee-mask"
          style={{ "--marquee-duration": DURATION }}
        >
          <ul className="marquee-track flex items-center gap-2 w-[200%]">
            {loop.map((t, i) => (
              <li
                key={`${t}-${i}`}
                className="px-3 py-1 rounded-full text-sm whitespace-nowrap
                           bg-[var(--color--primary)]/15 text-[var(--color--primary)]
                           border border-[var(--color--primary)]/30"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

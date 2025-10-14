import React from "react";
import SectionTitle from "./SectionTitle";

const schools = [
  {
    title: "Full-Stack Web Development Bootcamp",
    org: "Koda Tech Academy",
    time: "jul 2025 - sept 2025",
  },
  {
    title: "Computer and Network Engineering",
    org: "SMKN 1 Randudongkal",
    time: "2020 - 2023",
  },
];

export default function Education() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#5A0B1E] to-[rgba(0,0,0,0.9)] pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle id="education" title="Education" />
        <div className="grid gap-4">
          {schools.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <h3 className="text-white font-semibold">
                {s.title} • {s.org}
              </h3>
              <div className="text-xs text-gray-300">{s.time}</div>
              <p className="text-sm text-gray-200 mt-2">{s.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#5A0B1E] pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle id="about" title="About Me" />
        <p className="text-gray-200 leading-relaxed">
          I’m a{" "}
          <span className="font-semibold text-white">
            Full-Stack Web Developer
          </span>{" "}
          with a strong front-end focus who enjoys turning ideas into fast,
          reliable, and genuinely pleasant web experiences. On the UI side, I
          build accessible, responsive, and component-driven interfaces with{" "}
          <span className="font-semibold text-white">
            React, Redux Toolkit,
          </span>{" "}
          and <span className="font-semibold text-white">Tailwind CSS</span>; on
          the server, I design and integrate{" "}
          <span className="font-semibold text-white">REST APIs</span> using{" "}
          <span className="font-semibold text-white">Go/Node</span>, model data
          in <span className="font-semibold text-white">PostgreSQL</span>, and
          package services with{" "}
          <span className="font-semibold text-white">Docker</span> (often behind
          a simple Nginx reverse proxy). Recent work includes a movie-ticketing
          platform (schedule filtering, seat selection, payments, admin
          dashboard) and an e-wallet web app (top-up, transfer, PIN flows,
          transaction history). I care about readable code, predictable state,
          and sensible abstractions just as much as pixel detail and motion. My
          goal is to ship features that feel intentional and fast for
          users—while staying stable, testable, and easy for teams to extend.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import Navbar from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import About from "./component/About.jsx";
import Education from "./component/Education.jsx";
import Skills from "./component/Skills.jsx";
import Projects from "./component/Projects.jsx";
// import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";

export default function App() {
  return (
    <main className="relative min-h-screen text-white">
      <div className="fixed inset-0 -z-20 bg-[#15050B]" />

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}

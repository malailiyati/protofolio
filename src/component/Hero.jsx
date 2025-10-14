import React from "react";
import picture from "../assets/picture.jpeg";

function Ambient() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-28 w-[420px] h-[420px] bg-[var(--color--primary)]/30 blur-[120px] rounded-full" />
      <div className="absolute -bottom-36 -right-24 w-[420px] h-[420px] bg-pink-500/20 blur-[100px] rounded-full" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="py-20 md:flex-row flex  flex-col justify-center items-center md:gap-20 w-full min-h-screen bg-gradient-to-b from-[#5A0B1E] to-[rgba(0,0,0,0.9)]">
      <div className="w-60 h-60 relative rounded-[10px]  border-1 animate-glow">
        <div className="w-55 h-55 absolute top-2 right-2 rounded-[10px]  border-1 border-white animate-glow">
          <div className="w-50 h-50 absolute top-2 right-2 rounded-[10px]  border-1 animate-glow">
            <img
              src={picture}
              alt="my picture"
              width={200}
              className="rounded-[10px] absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="mt-10 text-[var(--color--primary)] text-[30px] font-bold">
          Hi, I'm Ma'la iliyati
        </p>
        <p className="text-[var(--color--primary)] text-[20px] font-bold">
          Fullstack Developer
        </p>

        <p className="bg-[var(--color--primary)] text-#5A0B1E px-5 py-2 rounded-full text-sm font-medium my-5">
          🚀 Available for Freelance & Collaboration
        </p>

        <div className="mt-2  text-white text-3xl animate-bounce cursor-pointer text-center">
          ↓
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const TO_EMAIL = "malailiyati107@gmail.com";
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const mailtoLink = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
    "New message from portfolio"
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <section className="relative w-full bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#14060B] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          id="contact"
          title="Contact"
          subtitle="Punya peluang atau kolaborasi? Yuk ngobrol!"
        />

        {/* form input only, no submit */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Name"
            required
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/60"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            placeholder="Email"
            required
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/60"
          />
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={onChange}
            placeholder="Message"
            required
            className="md:col-span-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/60"
          />

          {/* use <a> outside form */}
          <a
            href={mailtoLink}
            className={`md:col-span-2 px-5 py-2 rounded-lg text-center transition ${
              form.name && form.email && form.message
                ? "bg-[var(--color--primary)] text-[#5A0B1E] hover:opacity-90"
                : "bg-gray-500 text-gray-200 cursor-not-allowed pointer-events-none"
            }`}
          >
            Send via Email App
          </a>
        </div>
      </div>
    </section>
  );
}

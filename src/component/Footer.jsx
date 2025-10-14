import React from "react";

const Footer = () => {
  const NAME = "Ma'la Iliyati";
  const LINKEDIN = "https://www.linkedin.com/in/ma-la-iliyati/";
  const GITHUB = "https://github.com/malailiyati";
  const WHATSAPP = "6285866125135";
  const EMAIL = "malailiyati107@gmail.com";

  return (
    <footer className="w-full border-t border-white/10 bg-gradient-to-b from-[#0e070a] to-[#14060B]">
      <div className="max-w-6xl mx-auto px-6 py-14 text-white">
        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-bold">
          let&apos;s <span className="text-[var(--color--primary)]">Build</span>{" "}
          something together
        </h3>
        <p className="mt-2 text-white/80 max-w-2xl">
          Feel free to reach out if you&apos;re looking for a developer, have a
          question, or just want to connect.
        </p>

        {/* Socials */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.96V24H.5V8.5ZM9 8.5h4.75v2.11h.07c.66-1.25 2.28-2.57 4.69-2.57C22.9 8.04 24 11 24 14.86V24h-4.96v-8.17c0-1.95-.03-4.46-2.72-4.46-2.72 0-3.14 2.13-3.14 4.33V24H8.99V8.5Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
            aria-label="GitHub"
          >
            {/* GitHub SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.56v-2.02c-3.26.71-3.95-1.4-3.95-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.74-1.55-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.2.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.3-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.86.12 3.16.76.82 1.22 1.87 1.22 3.15 0 4.49-2.75 5.48-5.37 5.77.43.37.8 1.1.8 2.23v3.3c0 .31.21.68.81.56A11.5 11.5 0 0 0 12 .5Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
            aria-label="WhatsApp"
          >
            {/* WhatsApp SVG */}
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path
                d="M19.11 17.2a4.8 4.8 0 0 1-2.76-2.76c-.14-.34-.5-1.36.3-2.16.27-.27.23-.57.16-.75-.07-.18-.62-1.5-.85-2.05-.22-.53-.44-.44-.62-.44h-.53c-.18 0-.46.06-.7.33-.23.27-.92.9-.92 2.2 0 1.3.95 2.55 1.09 2.72.14.18 1.85 2.83 4.5 3.85.63.25 1.12.4 1.5.51.63.2 1.22.17 1.68.1.51-.08 1.58-.64 1.8-1.27.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.53-.31-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.32.2-.6.07Z"
                fill="currentColor"
              />
              <path
                d="M26.78 5.22a11.25 11.25 0 0 0-17.5 13.3L8 26l7.63-1.22a11.25 11.25 0 0 0 11.15-19.56Zm-3.18 16.79a8.98 8.98 0 0 1-8.46 1.34l-.6-.25-4.48.72.74-4.36-.28-.64a8.98 8.98 0 1 1 13.07 3.19Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm">WhatsApp</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
            aria-label="Email"
          >
            {/* Mail SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5h16a2 2 0 0 1 2 2v.35l-10 6.25L2 7.35V7a2 2 0 0 1 2-2Z"
                fill="currentColor"
              />
              <path
                d="M2 9.14V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.14l-9.38 5.87a2 2 0 0 1-2.24 0L2 9.14Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm">{EMAIL}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* Bottom note */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Designed & coded by
            <span className="text-white"> {NAME}</span>
          </p>
          <p className="text-white/60">Open to freelance & collaboration</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

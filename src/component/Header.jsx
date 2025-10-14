import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Blur & shadow only after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // helper: close after a short delay so :active visible
  const closeAfterTap = () => setTimeout(() => setOpen(false), 100);

  return (
    <header
      id="site-header"
      className={[
        "fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all",
        scrolled
          ? "bg-neutral-900/70 backdrop-blur-sm shadow-lg"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between text-[var(--color--primary)]">
        <a href="#home" className="text-[20px] font-bold hover:opacity-90">
          Ma&apos;la <span className="text-white">Iliyati</span>
        </a>

        {/* Desktop (>= md) */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger (< md) */}
        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color--primary)]/60 transition"
          onClick={() => setOpen((s) => !s)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-neutral-950/60 z-40"
            onClick={() => setOpen(false)}
          />
          {/* panel */}
          <div className="absolute top-16 left-0 right-0 bg-neutral-900/95 border-t border-white/10 shadow-2xl z-50">
            <ul className="px-2 py-3 grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeAfterTap}
                    className="block px-4 py-3 text-base rounded-md
                              text-[var(--color--primary)]
                               transition-colors
                               hover:text-white/90
                               focus-visible:text-[var(--color--primary)]
                               active:text-[var(--color--primary)]
                               outline-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

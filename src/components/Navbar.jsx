import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { studio, navLinks, whatsappLink } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-storm font-display text-lg text-ink">
            S
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-wide text-cream">STORM</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gradient-storm font-semibold normal-case">
              Dance Studio
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-wide text-cream/75 hover:text-cream transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-storm after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={studio.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 hover:border-storm hover:text-storm transition-colors"
            aria-label="Instagram"
          >
            <FiInstagram size={17} />
          </a>
          <a
            href={whatsappLink("Hi Storm Dance Studio! I'd like to know more about your classes.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-storm px-5 py-2.5 text-sm font-semibold text-ink tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            <FaWhatsapp size={16} />
            Book a Class
          </a>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-ink/95 backdrop-blur-md border-t border-white/5"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-base text-cream/85 border-b border-white/5 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink("Hi Storm Dance Studio! I'd like to know more about your classes.")}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-storm px-5 py-3 text-sm font-semibold text-ink"
              >
                <FaWhatsapp size={16} />
                Book a Class
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

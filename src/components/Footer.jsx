import { FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";
import { studio, navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="bg-surface text-cream/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-storm font-display text-lg text-ink">
            S
          </span>
          <div>
            <p className="font-display text-lg text-cream tracking-wide">Storm</p>
            <p className="text-xs uppercase tracking-[0.2em] text-gradient-storm font-semibold normal-case">
              Dance Studio
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-storm transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1.5 text-sm">
            <FiMapPin size={14} /> {studio.city}
          </span>
          <a
            href={`tel:${studio.phone.replace(/\s/g, "")}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 hover:border-storm hover:text-storm transition-colors"
            aria-label="Call"
          >
            <FiPhone size={16} />
          </a>
          <a
            href={studio.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 hover:border-storm hover:text-storm transition-colors"
            aria-label="Instagram"
          >
            <FiInstagram size={17} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-cream/35">
        © {new Date().getFullYear()} Storm Dance Studio. All rights reserved.
      </div>
    </footer>
  );
}

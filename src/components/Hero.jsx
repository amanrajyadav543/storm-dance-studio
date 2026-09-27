import { motion } from "framer-motion";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { FiInstagram, FiMapPin, FiChevronDown } from "react-icons/fi";
import { studio, whatsappLink } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-[30rem] w-[30rem] rounded-full bg-storm/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #f2f4fa 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl w-full px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 rounded-full border border-storm/40 bg-storm/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream/80">
              <FiMapPin size={12} className="text-storm" /> {studio.city}, India
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream/80">
              <FaStar size={11} className="text-gold" /> {studio.rating} · {studio.reviewCount} Reviews
            </span>
          </div>

          <h1 className="mt-8 font-display text-6xl sm:text-8xl xl:text-9xl leading-[0.9] text-cream">
            <span className="text-gradient-storm">STORM</span>
          </h1>
          <p className="mt-2 font-display text-2xl sm:text-3xl tracking-[0.15em] text-cream/90">
            Dance Studio
          </p>

          <p className="mt-7 max-w-xl mx-auto text-cream/60 leading-relaxed text-lg normal-case">
            {studio.tagline} — Bikaner's dance academy for every step, every
            celebration, every stage. Women-owned, proudly local.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href={whatsappLink("Hi Storm Dance Studio! I'd like to book a trial class.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-storm px-8 py-4 text-sm font-semibold tracking-wide text-ink hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-storm/20 normal-case"
            >
              <FaWhatsapp size={18} />
              Book a Trial Class
            </a>
            <a
              href={studio.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-4 text-sm tracking-wide text-cream hover:border-storm hover:text-storm transition-colors duration-300 normal-case"
            >
              <FiInstagram size={17} />
              @{studio.instagramHandle}
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10 text-sm text-muted">
            <div>
              <span className="font-display text-3xl text-cream">{studio.followers}+</span>
              <span className="block text-xs uppercase tracking-wide mt-1 normal-case">Followers</span>
            </div>
            <div className="h-8 w-px bg-cream/15" />
            <div>
              <span className="font-display text-3xl text-cream">{studio.rating} ★</span>
              <span className="block text-xs uppercase tracking-wide mt-1 normal-case">Rating</span>
            </div>
            <div className="h-8 w-px bg-cream/15" />
            <div>
              <span className="font-display text-3xl text-cream">{studio.posts}</span>
              <span className="block text-xs uppercase tracking-wide mt-1 normal-case">Moments</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 hover:text-storm transition-colors"
        aria-label="Scroll down"
      >
        <FiChevronDown size={26} />
      </motion.a>
    </section>
  );
}

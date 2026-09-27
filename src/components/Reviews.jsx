import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaGoogle } from "react-icons/fa";
import { reviews, studio } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-orn justify-center text-xs uppercase tracking-[0.3em] text-cream/60">
            Word On The Street
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl text-cream">
            {studio.rating} <span className="text-gradient-storm">Star Rated</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-cream/60 normal-case">
            <FaGoogle className="text-cream/40" size={14} />
            <span>{studio.reviewCount} Google Reviews</span>
            <div className="flex items-center gap-0.5 text-gold ml-1">
              {Array.from({ length: 4 }).map((_, idx) => (
                <FaStar key={idx} size={13} />
              ))}
              <FaStar size={13} className="opacity-40" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-surface p-8 border border-white/5"
            >
              <FaQuoteLeft className="text-storm/40" size={22} />
              <p className="mt-5 text-cream/75 leading-relaxed text-sm normal-case">{r.quote}</p>
              <div className="mt-6 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar key={idx} size={12} />
                ))}
              </div>
              <p className="mt-3 font-display text-lg text-cream">{r.name}</p>
              <p className="text-xs text-muted normal-case">{r.meta}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={studio.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-3.5 text-sm tracking-wide text-cream hover:border-storm hover:text-storm transition-colors duration-300 normal-case"
          >
            <FaGoogle size={14} />
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

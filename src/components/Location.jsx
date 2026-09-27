import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiNavigation } from "react-icons/fi";
import { studio } from "../data";

export default function Location() {
  return (
    <section id="location" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="divider-orn text-xs uppercase tracking-[0.3em] text-cream/60">
            Find Us
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl text-cream leading-tight">
            Come Dance
            <br />
            <span className="text-gradient-storm">With Us</span>
          </h2>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl bg-ink p-5 border border-white/5">
              <FiMapPin className="mt-0.5 text-storm shrink-0" size={20} />
              <div>
                <p className="font-display text-base text-cream">Studio Address</p>
                <p className="mt-1 text-sm text-cream/60 normal-case">{studio.address}</p>
                <p className="mt-1 text-xs text-muted normal-case">{studio.plusCode}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-ink p-5 border border-white/5">
              <FiClock className="mt-0.5 text-gold shrink-0" size={20} />
              <div>
                <p className="font-display text-base text-cream">Class Timings</p>
                <p className="mt-1 text-sm text-cream/60 normal-case">
                  Call or WhatsApp to confirm today's schedule.
                </p>
              </div>
            </div>
          </div>

          <a
            href={studio.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-storm px-7 py-3.5 text-sm font-semibold tracking-wide text-ink hover:opacity-90 transition-opacity duration-300 normal-case"
          >
            <FiNavigation size={16} />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl h-96 border border-white/10"
        >
          <iframe
            title="Storm Dance Studio Location"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${studio.lat},${studio.lng}(Storm+Dance+Studio)&z=16&output=embed`}
          />
        </motion.div>
      </div>
    </section>
  );
}

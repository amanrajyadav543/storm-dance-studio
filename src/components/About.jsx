import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { stats, studio } from "../data";

export default function About() {
  return (
    <section id="about" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="divider-orn justify-center text-xs uppercase tracking-[0.3em] text-cream/60">
            About The Studio
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl text-cream leading-tight">
            Built on rhythm,
            <br />
            <span className="text-gradient-storm">run by passion.</span>
          </h2>
          <p className="mt-6 text-cream/65 leading-relaxed text-lg normal-case">
            Storm Dance Studio is Bikaner's home for Bollywood, Zumba and wedding
            choreography — led by{" "}
            <span className="text-cream font-semibold">Pintu Swami</span>, with
            cinematic shoots produced in-house through{" "}
            <a
              href={`https://www.instagram.com/${studio.directorHandle}/`}
              target="_blank"
              rel="noreferrer"
              className="text-gradient-storm font-semibold hover:opacity-80"
            >
              @{studio.directorHandle}
            </a>
            . Proudly women-owned and rooted in the local dance community.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-ink border border-white/5 p-6 text-center hover:border-storm/30 transition-colors duration-300"
            >
              <p className="font-display text-2xl sm:text-3xl text-gradient-storm normal-case">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={studio.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-storm transition-colors"
          >
            <FiInstagram size={16} />
            @{studio.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { GiStarMedal, GiMusicalNotes } from "react-icons/gi";
import { FiHeart, FiCamera } from "react-icons/fi";
import { programs, whatsappLink } from "../data";

const icons = {
  star: GiStarMedal,
  beat: GiMusicalNotes,
  heart: FiHeart,
  camera: FiCamera,
};

export default function Programs() {
  return (
    <section id="programs" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-orn justify-center text-xs uppercase tracking-[0.3em] text-cream/60">
            What We Offer
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl text-cream">Programs</h2>
          <p className="mt-4 text-cream/60 leading-relaxed normal-case">
            From your first class to your big day on stage — training built for
            every occasion.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="group rounded-2xl bg-surface border border-white/5 p-8 hover:border-storm/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-storm text-ink">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-xl text-cream tracking-wide">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-cream/55 leading-relaxed normal-case">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href={whatsappLink("Hi Storm Dance Studio! I'd like to know more about your programs and class timings.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-storm px-8 py-3.5 text-sm font-semibold tracking-wide text-ink hover:opacity-90 transition-opacity duration-300 normal-case"
          >
            Ask About Class Timings
          </a>
        </div>
      </div>
    </section>
  );
}

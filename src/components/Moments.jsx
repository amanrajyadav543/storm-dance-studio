import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { instagramEmbeds, studio } from "../data";
import InstagramEmbed from "./InstagramEmbed";

export default function Moments() {
  return (
    <section id="moments" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-orn justify-center text-xs uppercase tracking-[0.3em] text-cream/60">
            Straight From Instagram
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl text-cream">Dance Moments</h2>
          <p className="mt-4 text-cream/60 leading-relaxed normal-case">
            Real classes, real crew, real energy — pulled straight from{" "}
            <span className="text-gradient-storm font-semibold">@{studio.instagramHandle}</span>.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {instagramEmbeds.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <InstagramEmbed url={url} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={studio.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-3.5 text-sm tracking-wide text-cream hover:border-storm hover:text-storm transition-colors duration-300 normal-case"
          >
            <FiInstagram size={17} />
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

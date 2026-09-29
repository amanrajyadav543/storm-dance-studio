import { motion } from "framer-motion";
import { FiCamera, FiVideo, FiImage, FiCalendar } from "react-icons/fi";
import { GiFilmProjector, GiClapperboard } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { PiDrone } from "react-icons/pi";
import { MdOutlineDevices } from "react-icons/md";
import { studio, filmsServices, filmsEmbeds, whatsappLink } from "../data";
import InstagramEmbed from "./InstagramEmbed";

const icons = {
  camera: FiCamera,
  video: FiVideo,
  film: GiFilmProjector,
  candid: GiClapperboard,
  prewedding: FiCamera,
  drone: PiDrone,
  led: MdOutlineDevices,
  reels: FaInstagram,
  poster: FiImage,
  countdown: FiCalendar,
};

export default function Films() {
  return (
    <section id="films" className="relative bg-surface py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #e8b25c 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-orn justify-center text-xs uppercase tracking-[0.3em] text-cream/60">
            In-House Wedding Films
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl text-cream">
            Pintu Swami <span className="text-gradient-storm">Films</span>
          </h2>
          <p className="mt-4 text-cream/60 leading-relaxed normal-case">
            Every wedding, captured cinematically — produced in-house by{" "}
            <a
              href={`https://www.instagram.com/${studio.directorHandle}/`}
              target="_blank"
              rel="noreferrer"
              className="text-gradient-storm font-semibold hover:opacity-80"
            >
              @{studio.directorHandle}
            </a>
            .
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filmsServices.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                  className="flex items-center gap-4 rounded-2xl bg-ink border border-white/5 p-5 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm text-cream/80 normal-case leading-snug">{s.title}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 items-center">
            {filmsEmbeds.map((url, i) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full"
              >
                <InstagramEmbed url={url} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href={whatsappLink("Hi! I'd like to enquire about Pintu Swami Films for my wedding shoot.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-8 py-3.5 text-sm tracking-wide text-cream hover:border-gold hover:text-gold transition-colors duration-300 normal-case"
          >
            Enquire About Wedding Films
          </a>
        </div>
      </div>
    </section>
  );
}

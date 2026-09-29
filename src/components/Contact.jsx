import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { studio, whatsappLink } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", program: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Storm Dance Studio! My name is ${form.name || "-"}.
Phone: ${form.phone || "-"}
Interested in: ${form.program || "-"}
Message: ${form.message || "-"}`;
    window.open(whatsappLink(msg), "_blank", "noreferrer");
  };

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="divider-orn text-xs uppercase tracking-[0.3em] text-cream/60">
            Get In Touch
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl text-cream leading-tight">
            Ready to
            <br />
            <span className="text-gradient-storm">Join the Crew?</span>
          </h2>
          <p className="mt-5 text-cream/60 leading-relaxed normal-case">
            Trial classes, wedding bookings or just questions — reach out any way
            that works for you.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${studio.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl bg-surface p-5 border border-white/5 hover:border-storm/30 transition-colors"
            >
              <FiPhone className="text-storm shrink-0" size={20} />
              <span className="text-cream/80 text-sm normal-case">{studio.phone}</span>
            </a>
            <a
              href={studio.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-surface p-5 border border-white/5 hover:border-storm/30 transition-colors"
            >
              <FiInstagram className="text-storm shrink-0" size={20} />
              <span className="text-cream/80 text-sm normal-case">@{studio.instagramHandle}</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-3xl bg-surface border border-white/5 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wide text-muted">Your Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-storm transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-muted">Phone Number</label>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-storm transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-wide text-muted">Interested In</label>
            <select
              name="program"
              value={form.program}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-storm transition-colors"
            >
              <option value="">Select a program</option>
              <option>Wedding Dance Choreography</option>
              <option>Couple Dance Choreography</option>
              <option>Group Dance Choreography</option>
              <option>School Dance Programs</option>
              <option>Regular Dance Classes</option>
              <option>Pintu Swami Films — Wedding Photography/Videography</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-wide text-muted">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-storm transition-colors resize-none"
              placeholder="Tell us a bit about yourself..."
            />
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-storm px-7 py-3.5 text-sm font-semibold tracking-wide text-ink hover:opacity-90 transition-opacity duration-300 normal-case"
          >
            <FaWhatsapp size={17} />
            Send via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-muted normal-case">
            Submitting opens WhatsApp with your details pre-filled — no data is stored.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

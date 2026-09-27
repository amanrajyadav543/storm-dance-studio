import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi Storm Dance Studio! I'd like to know more about your classes.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-105 transition-transform duration-300"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <FaWhatsapp size={26} className="relative" />
    </a>
  );
}

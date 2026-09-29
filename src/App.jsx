import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Films from "./components/Films";
import Moments from "./components/Moments";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Films />
      <Moments />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

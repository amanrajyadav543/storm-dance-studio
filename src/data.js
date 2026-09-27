export const studio = {
  name: "Storm Dance Studio",
  nativeName: "स्टॉर्म स्टूडियो",
  tagline: "Bollywood · Zumba · Wedding Choreography",
  director: "Pintu Swami",
  directorHandle: "pintu__swami_films",
  city: "Bikaner",
  address: "Jassusar Gate, near Sitaram Bhawan Rd, Dagon Ka Mohalla, Bikaner, Rajasthan 334001",
  plusCode: "279W+V7 Bikaner, Rajasthan",
  phone: "+91 99298 39952",
  phoneWhatsApp: "919929839952",
  instagramHandle: "storm_dance__studio",
  instagramUrl: "https://www.instagram.com/storm_dance__studio/",
  youtubeUrl: "https://youtube.com/@storm_dance_studio",
  mapsUrl:
    "https://www.google.com/maps/place/STORM+STUDIO/@28.019647,73.295703,17z/data=!3m1!4b1!4m6!3m5!1s0x393fdd5c957b82f9:0xd8ab22996243164b!8m2!3d28.019647!4d73.295703!16s%2Fg%2F11f03gwcr0",
  lat: 28.019647,
  lng: 73.295703,
  rating: "4.2",
  reviewCount: 20,
  followers: "329",
  posts: "48",
  womenOwned: true,
};

export const whatsappLink = (message) =>
  `https://wa.me/${studio.phoneWhatsApp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Moments", href: "#moments" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export const stats = [
  { value: "4.2 ★", label: "Google Rating" },
  { value: "20", label: "Google Reviews" },
  { value: "329+", label: "Instagram Family" },
  { value: "Women-Owned", label: "Studio" },
];

export const programs = [
  {
    title: "Bollywood Dance",
    desc: "High-energy Bollywood choreography classes for every age and skill level.",
    icon: "star",
  },
  {
    title: "Zumba Fitness",
    desc: "Dance-fitness sessions that make breaking a sweat feel like a party.",
    icon: "beat",
  },
  {
    title: "Wedding Choreography",
    desc: "Custom-built routines for sangeet, baraat and every wedding moment that needs to shine.",
    icon: "heart",
  },
  {
    title: "Cinematic Shoots",
    desc: "Professional dance video production in-house with @pintu__swami_films.",
    icon: "camera",
  },
];

export const reviews = [
  {
    name: "Pritam Singh",
    meta: "Google review",
    quote:
      "Superb dance academy in Bikaner. And best choreographer, Pintu Swami sir. Thank you!",
  },
  {
    name: "Manish Music",
    meta: "Local Guide · 19 reviews",
    quote: "Perfect institute for learning dance.",
  },
];

// Real posts from @storm_dance__studio, embedded via Instagram's official embed widget.
export const instagramEmbeds = [
  "https://www.instagram.com/p/C8oXQY0pgm2/",
  "https://www.instagram.com/p/CtbIrVxuC7P/",
  "https://www.instagram.com/p/C_nGlvfMnJc/",
];

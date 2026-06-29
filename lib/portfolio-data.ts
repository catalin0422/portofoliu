export type Project = {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  client: string;
  year: string;
  duration: string;
  liveUrl?: string;
  liveLabel?: string;
  previewUrl?: string;
  tech: string[];
  features: string[];
  gradient: string;
  accent: string;
  image: string;
  screens: { title: string; desc: string; gradient: string }[];
};

export const projects: Project[] = [
  {
    slug: "ai-fitness-trainer",
    name: "AI Personal Trainer",
    category: "Computer Vision & Deep Learning",
    shortDesc:
      "Real time fitness trainer that recognizes exercises, corrects form, and counts reps using an LSTM model with 95.8% accuracy.",
    longDesc:
      "A computer vision app using webcam input to recognize exercises (biceps curls, squats), distinguish correct from incorrect form, and count only valid reps. The LSTM model trained on 30-frame temporal sequences captures motion momentum rather than static posture, while hip-relative coordinate normalization makes the system invariant to user position and distance.",
    client: "Personal project",
    year: "2025 - present",
    duration: "In development",
    liveLabel: "View on GitHub",
    liveUrl: "https://github.com/catalin0422/AI-Fitness-Trainer",
    tech: ["Python", "TensorFlow/Keras", "LSTM", "MediaPipe", "OpenCV", "scikit-learn", "Flask"],
    features: [
      "LSTM model trained on temporal sequences (30 frames) with 95.8% test accuracy",
      "Automatic exercise recognition and switching between workout modes",
      "Biomechanical joint angle calculations for movement range validation",
      "Real time visual and audio feedback with smart rep counting via OpenCV",
      "Spatial normalization (hip-centered scaling) for consistent accuracy across distance",
      "Data augmentation (flips, scale jitter, rotation, time-warp) for robustness",
    ],
    gradient: "from-indigo-900 via-zinc-900 to-black",
    accent: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    image: "/AI_Trainer_UI.webp",
    screens: [
      {
        title: "Interfață live",
        desc: "Numărător de repetări, corectare de formă și feedback vizual în timp real.",
        gradient: "from-indigo-900 via-zinc-900 to-black",
      },
      {
        title: "Matrice de confuzie",
        desc: "Performanța modelului pe cele 4 clase: 95.8% acuratețe pe setul de test.",
        gradient: "from-violet-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "maison-barber",
    name: "Barbershop",
    category: "Full stack · Next.js & Supabase",
    shortDesc:
      "End-to-end online booking system with a real database, unlimited employee profiles, and individual reservation dashboards.",
    longDesc:
      "Full stack system for a premium barbershop with online bookings persisted in PostgreSQL (Supabase). Customers self schedule appointments, choose their preferred barber, and receive automatic email confirmations. Admins can create unlimited employee profiles, each with their own daily schedule, blocked hours, and revenue statistics calculated from real data, not mocks.",
    client: "Freelance project",
    year: "2025",
    duration: "6 weeks",
    liveLabel: "View demo live",
    liveUrl: "https://barbershop-6m5s.vercel.app",
    tech: ["Next.js 14", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "Resend"],
    features: [
      "Relational database (Supabase/PostgreSQL) for bookings, staff, and availability",
      "Interactive appointment calendar with real time conflict checking",
      "Unlimited employee profiles, each with their own schedule and blocked hours",
      "Individual employee dashboards showing bookings and revenue",
      "Central admin dashboard aggregating bookings and revenue from real DB data",
      "Automated email notifications via Resend for every new booking",
    ],
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accent: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    image: "/Barbershop.webp",
    screens: [
      {
        title: "Homepage",
        desc: "Hero with CTA, photo gallery, and testimonials.",
        gradient: "from-zinc-800 via-zinc-900 to-black",
      },
      {
        title: "Booking calendar",
        desc: "Barber, date, and available time slot selection checked live against the database.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
      {
        title: "Employee dashboard",
        desc: "Each employee has their own dashboard with daily bookings and personal revenue.",
        gradient: "from-blue-900 via-zinc-900 to-black",
      },
      {
        title: "Admin dashboard",
        desc: "Create new employee profiles, view all bookings, and aggregate statistics from the DB.",
        gradient: "from-violet-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "trei-pastori",
    name: "Pensiunea Trei Păstori",
    category: "Front end · Next.js",
    shortDesc:
      "Production-ready showcase website with a premium gallery and detailed rooms for a mountain guesthouse.",
    longDesc:
      "Showcase website for Pensiunea Trei Păstori, live on the guesthouse's own domain. Visitors can browse the room gallery, see available amenities, and contact the guesthouse directly to reserve. Warm, welcoming design with landscape photography and fast navigation on any device.",
    client: "Pensiunea Trei Păstori",
    year: "2025",
    duration: "4 weeks",
    liveLabel: "View live",
    liveUrl: "https://treipastori.md",
    tech: ["Next.js 14", "TypeScript", "Resend", "Tailwind CSS", "Framer Motion"],
    features: [
      "Full-screen hero with panoramic landscape imagery",
      "Rooms page with gallery, amenities, and per-night pricing",
      "Contact form with automated email submission via Resend",
      "Destination section with map and local attractions",
      "Premium photo gallery with editorial layout",
      "Production website used by real customers",
    ],
    gradient: "from-emerald-900 via-zinc-900 to-black",
    accent: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    image: "/trei-pastori.webp",
    screens: [
      {
        title: "Homepage",
        desc: "Panoramic hero with contact CTA and main amenities.",
        gradient: "from-emerald-900 via-zinc-900 to-black",
      },
      {
        title: "Rooms & Suites",
        desc: "Room gallery, amenities, and nightly pricing presented clearly.",
        gradient: "from-teal-900 via-zinc-900 to-black",
      },
      {
        title: "Contact form",
        desc: "Message sent directly to the guesthouse, with email confirmation.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

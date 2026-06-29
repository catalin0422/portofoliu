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
      "Antrenor de fitness în timp real care recunoaște exerciții, corectează forma și numără repetările folosind un model LSTM, cu 95.8% acuratețe.",
    longDesc:
      "Aplicație de computer vision care folosește camera web pentru a recunoaște exerciții (flexii biceps, genuflexiuni), a distinge forma corectă de cea incorectă și a număra doar repetările valide. Modelul LSTM antrenat pe secvențe temporale de 30 de cadre captează momentum-ul mișcării, nu doar o poză statică, iar normalizarea coordonatelor relativ la șold face sistemul invariant la poziția și distanța utilizatorului față de cameră.",
    client: "Proiect personal",
    year: "2025 - prezent",
    duration: "În dezvoltare",
    liveLabel: "Vezi pe GitHub",
    liveUrl: "https://github.com/catalin0422/AI-Fitness-Trainer",
    tech: ["Python", "TensorFlow/Keras", "LSTM", "MediaPipe", "OpenCV", "scikit-learn", "Flask"],
    features: [
      "Model LSTM antrenat pe secvențe temporale (30 cadre), cu 95.8% acuratețe pe setul de test",
      "Recunoaștere automată a exercițiului și comutare între moduri de antrenament",
      "Calcul biomecanic al unghiurilor articulațiilor pentru validarea amplitudinii mișcării",
      "Feedback vizual și vocal în timp real prin OpenCV, cu numărare inteligentă a repetărilor",
      "Normalizare spațială (centrare pe șold + scalare) pentru acuratețe constantă indiferent de distanța față de cameră",
      "Augmentare de date (oglindire, scale jitter, rotație, time-warp) pentru robustețe",
    ],
    gradient: "from-indigo-900 via-zinc-900 to-black",
    accent: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    image: "/AI_Trainer_UI.png",
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
    category: "Full-Stack · Next.js & Supabase",
    shortDesc:
      "Sistem complet de programări online cu bază de date reală, profile nelimitate de angajați și dashboard individual cu rezervări pentru fiecare.",
    longDesc:
      "Sistem full-stack pentru un barbershop premium, cu rezervări online persistate într-o bază de date PostgreSQL (Supabase). Clienții își fac singuri programări, aleg frizerul preferat și primesc confirmare automată prin email. Adminul poate crea oricâte profile de angajați, fiecare cu propriul dashboard cu programările zilei, blocare orar și statistici de venit calculate din date reale, nu mock-uri.",
    client: "Proiect freelance",
    year: "2025",
    duration: "6 săptămâni",
    liveLabel: "Vezi demo live",
    liveUrl: "https://barbershop-6m5s.vercel.app",
    tech: ["Next.js 14", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "Resend"],
    features: [
      "Bază de date relațională (Supabase/PostgreSQL) pentru programări, angajați și disponibilitate",
      "Sistem de programări cu calendar interactiv și verificare de conflicte în timp real",
      "Număr nelimitat de profile de angajați, fiecare cu propriul orar și zile blocate",
      "Dashboard individual per angajat, cu rezervările proprii și statistici de venit",
      "Dashboard admin centralizat cu toate rezervările și venituri calculate din date reale din DB",
      "Notificări email automate prin Resend la fiecare programare nouă",
    ],
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accent: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    image: "/Barbershop.png",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero cu CTA, galerie foto și testimoniale.",
        gradient: "from-zinc-800 via-zinc-900 to-black",
      },
      {
        title: "Calendar de programări",
        desc: "Selecție frizer, dată și interval orar disponibil, verificat live în baza de date.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
      {
        title: "Dashboard angajat",
        desc: "Fiecare angajat are propriul dashboard cu rezervările zilei și venitul personal.",
        gradient: "from-blue-900 via-zinc-900 to-black",
      },
      {
        title: "Dashboard admin",
        desc: "Creare profile noi de angajați, toate rezervările și statistici agregate din DB.",
        gradient: "from-violet-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "trei-pastori",
    name: "Pensiunea Trei Păstori",
    category: "Front-End · Next.js",
    shortDesc:
      "Site de prezentare live în producție, cu galerie premium și camere detaliate pentru o pensiune montană.",
    longDesc:
      "Site de prezentare pentru Pensiunea Trei Păstori, live pe domeniul propriu al pensiunii. Turiștii văd galeria cu camere, facilitățile disponibile și pot contacta direct pensiunea pentru rezervare. Design cald și primitor, cu fotografii de peisaj și o experiență de navigare rapidă pe orice dispozitiv.",
    client: "Pensiunea Trei Păstori",
    year: "2025",
    duration: "4 săptămâni",
    liveLabel: "Vezi live",
    liveUrl: "https://treipastori.md",
    tech: ["Next.js 14", "TypeScript", "Resend", "Tailwind CSS", "Framer Motion"],
    features: [
      "Hero full-screen cu fotografii panoramice de peisaj",
      "Pagina camere cu galerie, facilități și prețuri per noapte",
      "Formular de contact cu trimitere automată prin email (Resend)",
      "Secțiunea despre destinație cu hartă și atracții locale",
      "Galerie foto premium cu grid editorial",
      "Site live, în producție, folosit de clienți reali",
    ],
    gradient: "from-emerald-900 via-zinc-900 to-black",
    accent: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    image: "/trei-pastori.png",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero panoramic cu CTA contact și facilități principale.",
        gradient: "from-emerald-900 via-zinc-900 to-black",
      },
      {
        title: "Camere & Apartamente",
        desc: "Galerie per cameră, facilități și prețuri afișate clar.",
        gradient: "from-teal-900 via-zinc-900 to-black",
      },
      {
        title: "Formular de contact",
        desc: "Mesaj trimis direct către pensiune, cu confirmare prin email.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

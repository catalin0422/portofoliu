"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import Link from "next/link";
import {
  Smartphone,
  Server,
  Brain,
  Wrench,
  Mail,
  Linkedin,
  Github,
  Download,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  GraduationCap,
  Languages,
} from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { HeroAnimated } from "@/components/HeroAnimated";

/* ─── Scroll-reveal hook ─────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const experience = [
  {
    icon: Brain,
    title: "AI Trainee, AC Labs (Access)",
    period: "05/2026 – prezent",
    location: "Timișoara, România",
    desc: "Program „Powered by AI, Driven by You\". Contribui la construcția platformei QuizMaster, o aplicație end-to-end pentru managementul automat de conținut.",
    includes: [
      "Dezvoltare cu React și .NET 10 Web API",
      "Implementare LLM-uri (Azure OpenAI) pentru generare automată de conținut",
      "Vectorizare de date și integrare Vector Databases pentru căutare semantică",
      "Principii SOLID, Clean Architecture și Design Patterns",
      "Productivitate crescută folosind Claude Code și GitHub Copilot",
    ],
    accent: "from-violet-100 to-purple-50",
    iconColor: "text-violet-600",
    border: "group-hover:border-violet-200",
    numColor: "group-hover:text-violet-600",
    bar: "group-hover:bg-violet-500",
    featured: true,
  },
  {
    icon: Wrench,
    title: "IT Intern, Mind Automobile Parts Romania",
    period: "04/2026 – prezent",
    location: "Timișoara, România",
    desc: "Configurare și mentenanță a infrastructurii IT a companiei, cu suport tehnic rapid și automatizare de procese interne.",
    includes: [
      "Configurare și troubleshooting hardware & infrastructură IT",
      "Mentenanță proactivă și administrare de sisteme interne",
      "Automatizarea fluxurilor manuale, în colaborare cu diverse departamente",
    ],
    accent: "from-cyan-100 to-sky-50",
    iconColor: "text-cyan-600",
    border: "group-hover:border-cyan-200",
    numColor: "group-hover:text-cyan-600",
    bar: "group-hover:bg-cyan-500",
  },
];

const benefits = [
  { icon: Brain,       title: "Machine Learning & Computer Vision", desc: "Modele LSTM, MediaPipe, OpenCV, de la colectarea datelor la modele care funcționează în timp real." },
  { icon: Server,      title: "Full-Stack Development",             desc: "Next.js, React, .NET, Supabase/PostgreSQL, aplicații complete, de la bază de date la UI." },
  { icon: Code2,       title: "Agile & Versionare",                 desc: "Git, GitHub, Jira, Scrum, flux de lucru organizat, code review și colaborare în echipă." },
  { icon: Smartphone,  title: "Bilingv RO/EN, fluent RU",            desc: "Comunic eficient în echipe internaționale, scris și verbal." },
];

const skills = [
  "Python", "Java", "C/C++", "SQL", "Next.js", "React", "TypeScript",
  "Machine Learning", "Deep Learning (LSTM)", "Computer Vision", "OpenCV",
  "scikit-learn", "MediaPipe", "PostgreSQL", "Flyway", "REST APIs",
  "Git", "GitHub", "Jira", "Agile/Scrum",
];

/* ─── Static image preview for project cards ────────────────────────────── */
function ProjectPreview({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-stone-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Section label ──────────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 uppercase tracking-[0.18em] mb-4">
      <span className="w-5 h-px bg-cyan-500" />
      {children}
    </p>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  // Navbar entrance: starts invisible, animates in on first paint
  const [navReady, setNavReady] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setNavReady(true)); }, []);

  const navStyle: CSSProperties = {
    opacity: navReady ? undefined : 0,
    animation: navReady ? "nav-in 0.6s ease-out both" : "none",
    willChange: "opacity, transform",
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f9f8f6] text-stone-900">

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/80" style={navStyle}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col items-start hover:opacity-70 transition-opacity">
            <span className="text-base font-bold tracking-tight text-stone-900">Dogaru Cătălin</span>
            <span className="text-[10px] text-stone-400 font-medium tracking-tight leading-none mt-0.5">Computer Science & IT Student</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-500">
            <a href="#experienta" className="hover:text-stone-900 transition-colors">Experiență</a>
            <a href="#proiecte" className="hover:text-stone-900 transition-colors">Proiecte</a>
            <a href="#despre"   className="hover:text-stone-900 transition-colors">Despre mine</a>
            <a href="#educatie" className="hover:text-stone-900 transition-colors">Educație</a>
            <a href="#contact"  className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
          <a
            href="/CV_DogaruEN.pdf"
            download
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Descarcă CV
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroAnimated />

      {/* ── Experience ───────────────────────────────────────────────────── */}
      <section id="experienta" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Experiență</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Ce am construit<br />până acum
            </h2>
            <p className="mt-5 text-stone-500 leading-relaxed">
              Experiență practică în AI/ML și infrastructură IT, alături de proiecte personale și freelance full-stack.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-stone-200">
          {experience.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group relative border-b border-stone-200 transition-colors duration-300 hover:bg-white">
                <span className={`absolute left-0 top-0 bottom-0 w-0.5 bg-transparent ${s.bar} group-hover:w-1 transition-all duration-300`} />

                <div className="grid md:grid-cols-[5rem_1fr_auto] gap-x-8 gap-y-5 items-start py-9 pl-5 pr-2 md:pr-6">
                  <div className={`text-5xl md:text-6xl font-bold tabular-nums leading-none text-stone-200 ${s.numColor} transition-colors duration-300`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="md:pt-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <s.icon className={`w-5 h-5 flex-shrink-0 ${s.iconColor}`} />
                      <h3 className="text-xl font-bold text-stone-900 tracking-tight">{s.title}</h3>
                      {s.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600">
                          Actual
                        </span>
                      )}
                    </div>
                    <p className="text-stone-500 leading-relaxed max-w-2xl">{s.desc}</p>

                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                          <Check className={`w-3.5 h-3.5 flex-shrink-0 ${s.iconColor}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:pt-1 md:text-right md:min-w-[10rem]">
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">Perioadă</p>
                    <p className="text-sm font-bold text-stone-900">{s.period}</p>
                    <p className="mt-3 text-xs text-stone-400">{s.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section id="proiecte" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Proiecte</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Proiecte tehnice<br />și freelance
            </h2>
            <p className="mt-5 text-stone-500 leading-relaxed">
              De la modele de machine learning antrenate de la zero, până la aplicații full-stack cu bază de date reală și site-uri de prezentare live, în producție.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="block group rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-stone-300 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className={`inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.accent} mb-3`}>
                      {p.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-cyan-600 transition-colors">
                      {p.name}
                    </h3>
                  </div>
                  <div className="w-9 h-9 flex-shrink-0 rounded-full border border-stone-200 bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <ProjectPreview image={p.image} name={p.name} />

                <div className="px-6 pt-4 pb-6">
                  <p className="text-sm text-stone-500 leading-relaxed">{p.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-stone-400 group-hover:text-cyan-600 transition-colors">
                    Vezi proiectul <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section id="despre" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl border border-stone-200 bg-stone-100/50" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                <img
                  src="/me.jpg"
                  alt="Dogaru Cătălin"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs text-stone-300 uppercase tracking-widest">Computer Science & IT Student</p>
                  <p className="text-lg font-bold text-white mt-0.5">Dogaru Cătălin</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-card">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-stone-600 font-medium">Disponibil</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Label>Despre mine</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-6">
              Învăț rapid și construiesc{" "}
              <span className="italic text-cyan-600">produse care funcționează</span>
            </h2>
            <div className="space-y-4 text-stone-500 leading-relaxed">
              <p>
                Sunt Cătălin, student în anul III la Computer Science și Information Technology,
                Universitatea Politehnica Timișoara. Lucrez ca IT Intern la Mind Automobile Parts
                Romania și sunt și AI Trainee la Access, unde contribui la o platformă de
                automatizare bazată pe LLM-uri.
              </p>
              <p>
                În timpul liber construiesc proiecte de machine learning și computer vision de la
                zero, de la colectarea datelor până la modele care rulează în timp real, și
                aplicații full-stack pentru clienți freelance, cu baze de date reale și utilizatori reali.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { val: "2",      label: "Experiențe profesionale" },
                { val: "10+",    label: "Proiecte tehnice" },
                { val: "RO/EN/RU", label: "Limbi vorbite" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl border border-stone-200 bg-white text-center shadow-card">
                  <p className="text-2xl font-bold text-stone-900">{s.val}</p>
                  <p className="text-xs text-stone-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Python", "Next.js", "React", "Machine Learning", "Computer Vision", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-cyan-600 transition-colors"
              >
                Hai să discutăm
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── Education & Skills ───────────────────────────────────────────── */}
      <section id="educatie" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Educație & Skills</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Ce am studiat și<br />ce stăpânesc
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <div className="p-6 rounded-2xl border border-stone-200 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 mb-5">
                  <b.icon className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="p-8 md:p-10 rounded-2xl border border-stone-200 bg-white shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <GraduationCap className="w-4 h-4 text-cyan-600" />
                  <h3 className="text-lg font-bold text-stone-900">Educație</h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">2023 – prezent</p>
                    <p className="font-semibold text-stone-900">Universitatea Politehnica Timișoara</p>
                    <p className="text-sm text-stone-500">Licență, Computer Science and Information Technology</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">2020 – 2023</p>
                    <p className="font-semibold text-stone-900">Liceul Teoretic „Ion Creangă", Chișinău</p>
                    <p className="text-sm text-stone-500">Diplomă de Bacalaureat</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-cyan-600" />
                  <p className="text-sm text-stone-600">Română (nativ) · Engleză (avansat) · Rusă (fluent)</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-5">Tehnologii & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Contact — dark contrast anchor ───────────────────────────────── */}
      <section id="contact" className="bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <Label>
                <span className="text-cyan-400">Contact</span>
              </Label>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mt-1">
                Sunt în căutarea unui rol în<br />
                <span className="italic text-stone-400">software development</span>
              </h2>
              <p className="mt-6 text-stone-400 leading-relaxed max-w-xl mx-auto">
                Răspund de obicei în câteva ore. Hai să discutăm despre cum pot contribui în echipa ta.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/CV_DogaruEN.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descarcă CV
                </a>
                <a
                  href="https://www.linkedin.com/in/catalin-dogaru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/catalin0422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>

              <div className="mt-16 grid sm:grid-cols-3 gap-6 pt-10 border-t border-stone-800 text-left">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Telefon</p>
                    <a href="tel:+40733646257" className="text-sm text-stone-300 hover:text-white transition-colors">
                      +40 733 646 257
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Email</p>
                    <a
                      href="mailto:catalindogaru22@gmail.com"
                      className="text-sm text-stone-300 hover:text-white transition-colors break-all"
                    >
                      catalindogaru22@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Server className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Locație</p>
                    <p className="text-sm text-stone-300">Timișoara, România</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-stone-300" />
            <span>Dogaru Cătălin · Computer Science & IT Student</span>
          </div>
          <p>© {new Date().getFullYear()} · Construit cu Next.js & Tailwind CSS.</p>
        </div>
      </footer>

    </div>
  );
}

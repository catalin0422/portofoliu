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
    period: "05/2026 to present",
    location: "Timișoara, Romania",
    desc: "Powered by AI, Driven by You. I contribute to building the QuizMaster platform, an end-to-end solution for automated content management.",
    includes: [
      "React and .NET 10 Web API development",
      "LLM implementation (Azure OpenAI) for automatic content generation",
      "Data vectorization and Vector Database integration for semantic search",
      "SOLID principles, Clean Architecture, and design patterns",
      "Increased productivity using Claude Code and GitHub Copilot",
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
    period: "04/2026 to present",
    location: "Timișoara, Romania",
    desc: "IT infrastructure setup and maintenance for the company, with fast technical support and internal process automation.",
    includes: [
      "Hardware and IT infrastructure setup and troubleshooting",
      "Proactive maintenance and internal systems administration",
      "Automation of manual workflows in collaboration with cross-functional teams",
    ],
    accent: "from-cyan-100 to-sky-50",
    iconColor: "text-cyan-600",
    border: "group-hover:border-cyan-200",
    numColor: "group-hover:text-cyan-600",
    bar: "group-hover:bg-cyan-500",
  },
];

const benefits = [
  { icon: Brain,       title: "Machine Learning and Computer Vision", desc: "LSTM models, MediaPipe, OpenCV, from data collection to real time production ready systems." },
  { icon: Server,      title: "Full stack Development",             desc: "Next.js, React, .NET, Supabase/PostgreSQL, end to end apps from database to UI." },
  { icon: Code2,       title: "Agile & Versioning",                 desc: "Git, GitHub, Jira, Scrum with organized workflows, code reviews, and team collaboration." },
  { icon: Smartphone,  title: "Bilingual RO/EN, fluent RU",          desc: "Effective communication in international teams, written and verbal." },
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
            <a href="#experience" className="hover:text-stone-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-stone-900 transition-colors">Projects</a>
            <a href="#about"    className="hover:text-stone-900 transition-colors">About</a>
            <a href="#education" className="hover:text-stone-900 transition-colors">Education</a>
            <a href="#contact"  className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
          <a
            href="/CV_DogaruEN.pdf"
            download
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroAnimated />

      {/* ── Experience ───────────────────────────────────────────────────── */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Experience</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Where I have worked<br />so far
            </h2>
            <p className="mt-5 text-stone-500 leading-relaxed">
              Hands on experience in AI/ML and IT infrastructure, gained across the following teams and companies.
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
                          Active
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
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">Period</p>
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
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Projects</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Technical projects<br />and freelance work
            </h2>
            <p className="mt-5 text-stone-500 leading-relaxed">
              From machine learning models trained from scratch to full stack apps with real databases and production ready websites.
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
                    View project <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
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
      <section id="about" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl border border-stone-200 bg-stone-100/50" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                <img
                  src="/me.webp"
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
                <span className="text-xs text-stone-600 font-medium">Available</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Label>About</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-6">
              I learn quickly and build
              <span className="italic text-cyan-600"> products that work</span>
            </h2>
            <div className="space-y-4 text-stone-500 leading-relaxed">
              <p>
                I'm Cătălin, a third-year Computer Science and Information Technology student at
                Politehnica University of Timișoara. I work as an IT Intern at Mind Automobile Parts
                Romania and as an AI Trainee at Access, contributing to an LLM-powered automation platform.
              </p>
              <p>
                In my free time I build machine learning and computer vision projects from scratch, starting from
                data collection and moving to real time models and full stack apps for freelance clients with real databases and users.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { val: "2",      label: "Professional experiences" },
                { val: "10+",    label: "Technical projects" },
                { val: "RO/EN/RU", label: "Languages" },
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
                Let's talk
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
      <section id="education" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Education & Skills</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              What I have studied<br />and what I master
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
                  <h3 className="text-lg font-bold text-stone-900">Education</h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">2023 to present</p>
                    <p className="font-semibold text-stone-900">Universitatea Politehnica Timișoara</p>
                    <p className="text-sm text-stone-500">Licență, Computer Science and Information Technology</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">2020 to 2023</p>
                    <p className="font-semibold text-stone-900">Liceul Teoretic „Ion Creangă", Chișinău</p>
                    <p className="text-sm text-stone-500">Baccalaureate Diploma</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-cyan-600" />
                  <p className="text-sm text-stone-600">Romanian (native) · English (advanced) · Russian (fluent)</p>
                </div>
              </div>
              <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-5">Technologies & Tools</h3>
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
                I'm looking for a role in<br />
                <span className="italic text-stone-400">software development</span>
              </h2>
              <p className="mt-6 text-stone-400 leading-relaxed max-w-xl mx-auto">
                I usually reply within a few hours. Let's discuss how I can contribute to your team.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/CV_DogaruEN.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
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
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Phone</p>
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
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Location</p>
                    <p className="text-sm text-stone-300">Timișoara, Romania</p>
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
          <p>© {new Date().getFullYear()} · Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>

    </div>
  );
}

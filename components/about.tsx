import {
  Target,
  Compass,
  Briefcase,
  Layers,
  Flame,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const panels = [
  {
    icon: Target,
    title: "Mission",
    body: "Engineer intelligent systems that connect software, AI, cloud, mobile, backend, and IoT into complete, dependable solutions.",
  },
  {
    icon: Compass,
    title: "Engineering Philosophy",
    body: "Clean architecture first. I design for clarity, scalability, and maintainability so systems evolve gracefully over time.",
  },
  {
    icon: Briefcase,
    title: "Current Role",
    body: "Full Stack Software Engineer building end-to-end products across web, mobile, and embedded platforms.",
  },
  {
    icon: Layers,
    title: "Areas of Expertise",
    body: "Web & Android development, backend engineering, distributed systems, applied AI, computer vision, and IoT automation.",
  },
  {
    icon: Flame,
    title: "What Motivates Me",
    body: "Turning complex, real-world problems into elegant systems that feel effortless and reliable to the people who use them.",
  },
  {
    icon: GraduationCap,
    title: "Learning Journey",
    body: "Continuously researching advanced system design, cloud architecture, and modern AI to keep engineering at the frontier.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 scroll-mt-20">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid animate-grid-pan opacity-40"
        aria-hidden
      />

      <div
        className="
      pointer-events-none
      absolute inset-0
      -z-10
      bg-gradient-to-b
      from-sky-50/60
      via-white
      to-white
    "
      />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Engineering Profile"
          title="About Me"
          description="A snapshot of how I think, what I build, and the principles that guide my engineering."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {panels.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.title}
                delay={i * 70}
                className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-sky-200
    bg-white/80
    backdrop-blur-xl
    p-7
    shadow-lg
    shadow-sky-200/20
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-sky-400
    hover:shadow-xl
    hover:shadow-sky-300/30
  "
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 blueprint-grid-sm transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex items-center justify-between">
                  <div
                    className="
      grid
      size-12
      place-items-center
      rounded-2xl
      bg-gradient-to-br
      from-sky-500
      to-cyan-500
      text-white
      shadow-lg
      shadow-sky-300/40
      transition-all
      duration-300
      group-hover:scale-110
      group-hover:rotate-6
    "
                  >
                    <Icon className="size-5" strokeWidth={2} />
                  </div>

                  <span
                    className="
      rounded-full
      bg-sky-100
      px-3
      py-1
      text-xs
      font-semibold
      text-sky-600
    "
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {p.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

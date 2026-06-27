import { GraduationCap, Briefcase, Rocket, Award, Trophy } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const experiences = [
  {
    icon: Briefcase,
    year: "Jun 2026 — Present",
    company: "OSI Digital",
    logo: "/images/osidigital.png",
    role: "Software Engineer - Java",
    location: "Makati, Philippines",
    type: "Full-time",
    side: "left",
    description: "",
  },
  {
    icon: Briefcase,
    year: "Jan 2024 — Present",
    company: "Freelance",
    logo: "/images/freelancer.png",
    role: "Freelancer - Full Stack Engineer",
    location: "Cebu, Philippines",
    type: "Freelance",
    side: "right",
    description: "",
  },
  {
    icon: Briefcase,
    year: "Feb 2023 — Feb 2026",
    company: "Bridgeculture Inc.",
    logo: "/images/bridgeculture.png",
    role: "Java - Full Stack Engineer",
    location: "Cebu, Philippines",
    type: "Full-time",
    side: "left",
    description: "",
  },
  {
    icon: Briefcase,
    year: "Feb 2025 — June 2025",
    company: "Full Scale",
    logo: "/images/fullscale.png",
    role: "Intern - Full Stack Developer",
    location: "Cebu, Philippines",
    type: "Internship",
    side: "right",
    description: "",
  },
  {
    icon: Briefcase,
    year: "Feb 2024 — June 2024",
    company: "Alliance Software Inc.",
    logo: "/images/alliance.png",
    role: "Intern - Full Stack Developer",
    location: "Cebu, Philippines",
    type: "Internship",
    side: "right",
    description: "",
  },
];

export function Journey() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
        aria-hidden
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50/70 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="My professional journey building scalable software across web, mobile, backend, and enterprise systems."
        />

        <div className="relative mt-14">
          {/* Timeline */}
          <div
            className="
              absolute
              left-[23px]
              top-2
              bottom-2
              w-[2px]
              bg-gradient-to-b
              from-sky-500
              via-cyan-400
              to-blue-500
              md:left-1/2
              md:-translate-x-1/2
            "
            aria-hidden
          />

          <ol className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const left = exp.side === "left";
              const Icon = exp.icon;
              return (
                <Reveal
                  key={exp.company + exp.role}
                  as="li"
                  delay={i * 60}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Timeline Node */}
                  <span
                    className="
    absolute
    left-0
    top-5
    z-20
    flex
    size-12
    items-center
    justify-center
    rounded-full
    border
    border-sky-200
    bg-white
    shadow-lg
    md:left-1/2
    md:-translate-x-1/2
  "
                  >
                    <Icon className="size-6 text-sky-600" />
                  </span>

                  {/* Left / Right */}
                  <div
                    className={
                      left
                        ? "ml-16 md:ml-0 md:pr-10 md:text-right"
                        : "ml-16 md:col-start-2 md:ml-0 md:pl-10"
                    }
                  >
                    <div
                      className="
                        rounded-3xl
                        border
                        border-sky-200
                        bg-white/80
                        backdrop-blur-xl
                        p-7
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-sky-400
                        hover:shadow-xl
                        hover:shadow-sky-200/40
                      "
                    >
                      {/* Header */}
                      <div
                        className={`flex items-center justify-between ${
                          left ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
                          {exp.year}
                        </span>

                        <span className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                          {exp.type}
                        </span>
                      </div>

                      {/* Company */}
                      <div
                        className={`mt-6 flex items-center gap-4 ${
                          left ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-24 w-24 object-contain"
                        />

                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {exp.company}
                          </h3>

                          <p className="font-semibold text-sky-600">
                            {exp.role}
                          </p>

                          <p className="text-sm text-slate-500">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-6 leading-7 text-slate-600">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

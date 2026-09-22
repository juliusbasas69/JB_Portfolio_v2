"use client";

import { useState } from "react";
import { Briefcase, X, MapPin, CalendarDays, ExternalLink } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

type Experience = {
  icon: typeof Briefcase;
  year: string;
  company: string;
  logo: string;
  role: string;
  location: string;
  type: string;
  side: "left" | "right";
  description: string;
  details: {
    responsibility: string[];
    contributions: string[];
    technologies: string[];
  };
};

const experiences: Experience[] = [
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
    details: { responsibility: [], contributions: [], technologies: [] },
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
    details: {
      responsibility: [
        "Develop and maintain full-stack web applications for clients",
        "Implement end-to-end features with a focus on performance, security, and usability",
      ],
      contributions: [
        "Built and delivered full-stack applications from scratch, handling both frontend UI and backend API development",
        "Implemented secure payment and email functionalities using Stripe and SMTP integrations",
        "Designed and developed reusable components and backend services to support scalable application features",
      ],
      technologies: [
        "Spring Boot",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Thymeleaf",
        "Tailwind CSS",
        "Stripe",
        "SMTP",
      ],
    },
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
    details: {
      responsibility: [
        "Develop and maintain web applications",
        "Contribute to core application functionalities",
        "Ensure code quality through testing and documentation",
      ],
      contributions: [
        "Developed ~50–60% of core features for BC Workflow and Cyzennt Workflow, contributing directly to system functionality and deployment readiness",
        "Implemented unit, integration, and functional testing, improving system reliability and reducing defects before release",
        "Created and maintained technical documentation for code, modules, and workflows, improving knowledge transfer and onboarding efficiency",
        "Mentored and supported new team members, accelerating onboarding and improving team productivity",
        "Optimized code and contributed to technical decision-making, improving maintainability and overall code quality",
        "Collaborated closely with the team in an agile environment, ensuring consistent progress and alignment on project goals",
      ],
      technologies: [
        "Spring Boot",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "PostgreSQL",
        "Thymeleaf",
        "Tailwind CSS",
      ],
    },
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
    details: {
      responsibility: [
        "Support full-stack development projects",
        "Complete assigned development tasks",
      ],
      contributions: [
        "Delivered backend and frontend features using C# and Next.js, supporting timely completion of sprint goals and improving feature rollout consistency",
        "Diagnosed and resolved bugs across the application, improving system stability and reducing recurring issues during testing cycles",
        "Collaborated with cross-functional team members to align on project updates, ensuring smoother development workflow and on-time task delivery",
        "Contributed to real-world application development using C# and Next.js, strengthening end-to-end feature implementation from backend to UI",
      ],
      technologies: ["Next.js", "C#", "ASP.NET", "Microsoft SQL"],
    },
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
    details: {
      responsibility: [
        "Assist in web application development",
        "Support application testing and debugging",
      ],
      contributions: [
        "Developed an end-to-end Hotel Booking System using ASP.NET MVC and C#, enabling streamlined booking and user management processes",
        "Collaborated with frontend and design team members, improving UI consistency and overall user experience",
        "Contributed to backend development and system integration, supporting smooth feature functionality across the application",
      ],
      technologies: ["ASP.NET MVC", "C#", "Microsoft SQL"],
    },
  },
];

export function Journey() {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[number] | null
  >(null);

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
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
                    {/* Card */}
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

                      {/* View Details */}
                      <div
                        className={`mt-6 flex ${
                          left ? "justify-start" : "justify-end"
                        }`}
                      >
                        <button
                          onClick={() => setSelectedExperience(exp)}
                          type="button"
                          className="
      group
      inline-flex
      items-center
      gap-2
      text-sm
      font-semibold
      text-sky-600
      transition-colors
      hover:text-sky-800
      cursor-pointer
    "
                        >
                          {left ? (
                            <>
                              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                                ←
                              </span>
                              Learn More
                            </>
                          ) : (
                            <>
                              Learn More
                              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                                →
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>

      {selectedExperience && (
        <div
          className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-slate-950/40
      p-4
      backdrop-blur-sm
    "
          onClick={() => setSelectedExperience(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="
        relative
        max-h-[90vh]
        w-full
        max-w-2xl
        overflow-y-auto
        rounded-3xl
        border
        border-sky-200
        bg-white/95
        p-6
        shadow-2xl
        shadow-sky-200/30
        backdrop-blur-xl
        sm:p-8
      "
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedExperience(null)}
              aria-label="Close"
              className="
          absolute
          right-5
          top-5
          flex
          size-10
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-slate-500
          shadow-sm
          transition-all
          hover:border-sky-200
          hover:bg-sky-50
          hover:text-sky-600
          cursor-pointer
        "
            >
              <X className="size-5" />
            </button>

            {/* Company Header */}
            <div className="pr-12">
              <div className="flex items-center gap-4">
                <img
                  src={selectedExperience.logo}
                  alt={selectedExperience.company}
                  className="h-20 w-20 object-contain"
                />

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-sky-600">
                    {selectedExperience.type}
                  </p>

                  <h2
                    id="experience-modal-title"
                    className="mt-1 text-2xl font-bold text-slate-900"
                  >
                    {selectedExperience.role}
                  </h2>

                  <p className="mt-1 font-semibold text-slate-600">
                    {selectedExperience.company}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-xl bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700">
                  <CalendarDays className="size-4" />
                  {selectedExperience.year}
                </span>

                <span className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600">
                  <MapPin className="size-4" />
                  {selectedExperience.location}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-slate-200" />

            {/* Responsibilities */}
            {selectedExperience.details.responsibility.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Responsibilities
                </h3>

                <ul className="mt-3 space-y-2">
                  {selectedExperience.details.responsibility.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-slate-600"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />

                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contributions */}
            {selectedExperience.details.contributions.length > 0 && (
              <div className="mt-7">
                <h3 className="text-lg font-bold text-slate-900">
                  Key Contributions
                </h3>

                <ul className="mt-3 space-y-2">
                  {selectedExperience.details.contributions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-slate-600"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-500" />

                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {selectedExperience.details.technologies.length > 0 && (
              <div className="mt-7">
                <h3 className="text-lg font-bold text-slate-900">
                  Technologies
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedExperience.details.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
            rounded-lg
            border
            border-sky-200
            bg-sky-50
            px-3
            py-1.5
            text-sm
            font-medium
            text-sky-700
          "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

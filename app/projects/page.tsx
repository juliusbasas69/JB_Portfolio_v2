import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
const professionalProjects = [
  {
    title: "Preschool Project",
    company: "BridgeCulture",
    type: "Web Application",
    description:
      "A content management platform for registering and organizing preschool and ESL educational materials for Cloudt, with batch processing capabilities for efficiently handling multiple content files.",
    technologies: ["Java", "HTML5", "CSS3", "Spring Boot", "PostgreSQL"],
    status: "Live",
    live: true,
    href: "#",
  },
  {
    title: "BC Workflow",
    company: "BridgeCulture",
    type: "Web Application",
    description:
      "An employee workflow platform that allows BridgeCulture employees to submit and manage leave requests, maternity and paternity applications, overtime requests, and other HR-related forms.",
    technologies: [
      "Java",
      "Spring Boot",
      "Slack API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    status: "Live",
    live: true,
    href: "#",
  },
  {
    title: "Cyzennt Workflow",
    company: "BridgeCulture",
    type: "Web Application",
    description:
      "An employee workflow platform that combines attendance management with HR processes, including leave requests, maternity and paternity applications, overtime requests, and other employee forms.",
    technologies: [
      "Java",
      "Spring Boot",
      "Slack API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    status: "Live",
    live: true,
    href: "#",
  },
  {
    title: "SM CIS Kiosk Replatform",
    company: "OSI Digital",
    type: "Enterprise Web Platform",
    description:
      "An enterprise customer information system re-platform supporting responsive web, customer-facing kiosk, staff dashboard, and administrative interfaces across desktop, tablet, and mobile screen sizes.",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
    status: "In Development",
    live: false,
    href: "#",
  },
];

const personalProjects = [
  {
    title: "JB Portfolio",
    type: "Web Application",
    description:
      "A personal portfolio website showcasing my projects, technical skills, experience, and software development journey.",
    technologies: ["Next.js", "Tailwind CSS"],
    status: "Live",
    live: true,
    href: "#",
  },
  {
    title: "Acadex",
    type: "Web Application",
    description:
      "A web-based academic management platform with an integrated online code editor and compiler for programming assignments, submission tracking, professor review, grading, authentication, and academic workflow management.",
    technologies: ["Angular", "Spring Boot", "Java"],
    status: "In Development",
    live: false,
    href: "#",
  },
  {
    title: "Build An Avatar",
    type: "Roblox Game",
    description:
      "A Roblox game where players build and customize mannequin avatars by collecting accessories, purchasing items, and generating income from their completed creations.",
    technologies: ["Roblox Studio", "Luau", "DataStore"],
    status: "In Development",
    live: false,
    href: "#",
  },
];

const freelanceProjects = [
  {
    title: "BorrowWhen",
    type: "Web Application",
    description:
      "An item lending platform that allows users to lend and borrow items with integrated payment processing.",
    technologies: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "PostgreSQL",
      "Stripe",
    ],
    status: "Completed",
    live: false,
    href: "#",
  },
  {
    title: "FuturePath",
    type: "Web Application",
    description:
      "An academic guidance platform designed to help students plan their academic path and monitor their progress.",
    technologies: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    status: "Completed",
    live: false,
    href: "#",
  },
  {
    title: "SPOTSelect",
    type: "Web Application",
    description:
      "A project proposal platform where users can submit proposals for evaluation by Officers, Managers, and the TBI Board, with feedback and notification workflows.",
    technologies: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "HTML",
      "CSS",
      "Thymeleaf",
      "PostgreSQL",
    ],
    status: "Completed",
    live: false,
    href: "#",
  },
  {
    title: "Enhanced Electrical Lamp with Smart Monitoring System",
    type: "IoT System",
    description:
      "A thesis-based Arduino system that automates lamp control and provides real-time monitoring of electrical usage, lamp status, and system performance.",
    technologies: [
      "Arduino",
      "C++",
      "Sensors",
      "Relay Module",
      "LCD",
      "Electrical Wiring",
    ],
    status: "Completed",
    live: false,
    href: "#",
  },
  {
    title: "Secure Contactor Access Control System",
    type: "IoT & Hardware",
    description:
      "A hardware-based security system designed to safely control a three-phase contactor using multi-factor authentication with password and fingerprint verification, including an administrative mode for managing registered users.",
    technologies: [
      "Arduino Mega",
      "SIM800L",
      "Fingerprint Sensor",
      "Keypad",
      "Relay",
      "Contactor",
      "LCD",
    ],
    status: "Completed",
    live: false,
    href: "#",
  },
];

const academicProjects = [
  {
    title: "ServiceConnect",
    type: "Web & Mobile Application",
    description:
      "A service booking platform where users can book services from verified providers, while provider employees can manage bookings and complete on-site services.",
    technologies: [
      "PHP",
      "Laravel",
      "Flutter",
      "Dart",
      "Firebase",
      "MySQL",
      "Google Maps API",
    ],
    status: "Completed",
    live: false,
    href: "#",
  },
];

function ProjectCard({
  project,
}: {
  project: {
    title: string;
    company?: string;
    type: string;
    description: string;
    technologies: string[];
    status: string;
    live: boolean;
    href: string;
  };
}) {
  return (
    <a
      href={project.href}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-3xl
        border
        border-sky-200
        bg-white/80
        p-6
        backdrop-blur-xl
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-400
        hover:shadow-xl
        hover:shadow-sky-200/40
      "
    >
      {/* Top gradient bar */}
      <span
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-sky-500
          to-cyan-500
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        {/* Project Icon */}
        <div
          className="
            grid
            size-12
            place-items-center
            rounded-2xl
            bg-gradient-to-br
            from-sky-100
            to-cyan-100
            text-sky-600
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:from-sky-500
            group-hover:to-cyan-500
            group-hover:text-white
          "
        >
          <FolderGit2
            className="size-5"
            strokeWidth={2}
          />
        </div>

        {/* Arrow */}
        <div
          className="
            grid
            size-9
            place-items-center
            rounded-xl
            border
            border-sky-200
            bg-sky-50
            text-sky-600
            transition-all
            duration-300
            group-hover:border-sky-300
            group-hover:bg-sky-100
          "
        >
          <ArrowUpRight
            className="
              size-4
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </div>
      </div>

      {/* Project Type + Status */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
          {project.type}
        </span>

        <span className="text-slate-300">•</span>

        <span
          className={`inline-flex items-center gap-1.5 text-xs font-medium ${
            project.live ? "text-emerald-600" : "text-slate-400"
          }`}
        >
          <span
            className={`size-1.5 rounded-full ${
              project.live ? "bg-emerald-500" : "bg-slate-400"
            }`}
          />

          {project.status}
        </span>
      </div>

      {/* Project Information */}
      <div className="mt-2">
        <h3 className="text-xl font-semibold text-slate-900">
          {project.title}
        </h3>

        {/* Company */}
        {project.company && (
          <p className="mt-1 text-sm font-medium text-sky-600">
            {project.company}
          </p>
        )}

        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-sky-200
              bg-sky-50
              px-3
              py-1.5
              text-xs
              font-medium
              text-sky-700
              transition-all
              duration-300
              group-hover:border-sky-300
              group-hover:bg-sky-100
            "
          >
            {technology}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main>
        <section
          id="projects"
          className="relative scroll-mt-20 py-20 sm:py-28"
        >
          {/* Blueprint Background */}
          <div
            className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
            aria-hidden
          />

          {/* Gradient Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50/70 via-white to-white" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Section Heading */}
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
                Projects
              </span>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Things I&apos;ve Built
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-500">
                A collection of professional work, personal projects, freelance
                work, and academic projects spanning web development, backend
                systems, game development, and IoT.
              </p>
            </div>

            {/* ========================= */}
            {/* Professional Work */}
            {/* ========================= */}
            <div className="mt-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                  Professional Work
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Projects I&apos;ve Contributed To
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  Systems and applications I&apos;ve worked on professionally as
                  part of a development team.
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {professionalProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ))}
              </div>
            </div>

            {/* ========================= */}
            {/* Personal Projects */}
            {/* ========================= */}
            <div className="mt-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                  Personal Projects
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Projects I&apos;ve Built
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  Applications, games, and systems I&apos;ve built independently
                  for learning, experimentation, and personal development.
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {personalProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ))}
              </div>
            </div>

            {/* ========================= */}
            {/* Freelance / Paid Projects */}
            {/* ========================= */}
            <div className="mt-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                  Freelance / Paid Projects
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Projects Built for Clients
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  Web applications and technical systems developed for
                  freelance, client, and paid project engagements.
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {freelanceProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ))}
              </div>
            </div>

            {/* ========================= */}
            {/* Academic / Capstone */}
            {/* ========================= */}
            <div className="mt-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                  Academic / Capstone Projects
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Academic Work
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  Academic and capstone projects developed as part of my
                  coursework and university studies.
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {academicProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

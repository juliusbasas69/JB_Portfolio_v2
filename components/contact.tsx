"use client";

import { useState, type FormEvent } from "react";
import { Mail, FileText, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@juliusbasas.dev",
    href: "mailto:hello@juliusbasas.dev",
    tone: "text-brand",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/juliusbasas",
    href: "https://github.com/",
    tone: "text-indigo",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/juliusbasas",
    href: "https://linkedin.com/",
    tone: "text-highlight",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/julius-basas-resume.pdf",
    tone: "text-teal",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid animate-grid-pan"
        aria-hidden
      />
      <div
        className="
  pointer-events-none
  absolute inset-0 -z-10
  blueprint-grid
  opacity-40
  [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]
  "
      />

      <div
        className="
  pointer-events-none
  absolute inset-0 -z-20
  bg-gradient-to-b
  from-sky-50/70
  via-white
  to-white
  "
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Meaningful Together."
          description="Have a project, role, or idea in mind? I'm always open to engineering challenges worth solving."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2 lg:content-start">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} delay={(i % 2) * 70}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
group flex h-full items-center gap-4
rounded-2xl
border border-sky-200
bg-white/80
backdrop-blur-xl
p-5
shadow-sm
transition-all duration-300
hover:-translate-y-1
hover:border-sky-400
hover:shadow-xl hover:shadow-sky-200/40
"
                  >
                    <span
                      className="
grid size-11 shrink-0 place-items-center
rounded-xl
bg-gradient-to-br
from-sky-100
to-cyan-100
text-sky-600
transition-all duration-300
group-hover:scale-110
group-hover:from-sky-500
group-hover:to-cyan-500
group-hover:text-white
"
                    >
                      <Icon className={`size-5 ${c.tone}`} strokeWidth={2} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-foreground">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-sky-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-600" />{" "}
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={80}>
            <div
              className="
rounded-3xl
border border-sky-200
bg-white/80
backdrop-blur-xl
p-6 sm:p-8
shadow-xl shadow-sky-200/30
"
            >
              {sent ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center gap-3 text-center">
                  <span
                    className="
grid size-16 place-items-center
rounded-2xl
bg-gradient-to-br
from-sky-500
to-cyan-500
text-white
shadow-lg
shadow-sky-300/40
"
                  >
                    <CheckCircle2 className="size-7" />
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Message ready to send
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                    Thanks for reaching out! I&apos;ll get back to you as soon
                    as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wider text-sky-700"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="
rounded-xl
border border-sky-200
bg-sky-50/60
px-4 py-3
text-sm
text-slate-800
placeholder:text-slate-400
outline-none
transition-all duration-300
focus:border-sky-500
focus:bg-white
focus:ring-4
focus:ring-sky-200/50
"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-sky-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="
rounded-xl
border border-sky-200
bg-sky-50/60
px-4 py-3
text-sm
text-slate-800
placeholder:text-slate-400
outline-none
transition-all duration-300
focus:border-sky-500
focus:bg-white
focus:ring-4
focus:ring-sky-200/50
"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold uppercase tracking-wider text-sky-700"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project Inquiry"
                      className="
      rounded-xl
      border border-sky-200
      bg-sky-50/60
      px-4 py-3
      text-sm
      text-slate-800
      placeholder:text-slate-400
      outline-none
      transition-all duration-300
      focus:border-sky-500
      focus:bg-white
      focus:ring-4
      focus:ring-sky-200/50
    "
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wider text-sky-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className="
rounded-xl
border border-sky-200
bg-sky-50/60
px-4 py-3
text-sm
text-slate-800
placeholder:text-slate-400
outline-none
transition-all duration-300
focus:border-sky-500
focus:bg-white
focus:ring-4
focus:ring-sky-200/50
"
                    />
                  </div>
                  <button
                    type="submit"
                    className="
group inline-flex items-center justify-center gap-2
rounded-xl
bg-gradient-to-r
from-sky-500
to-cyan-500
px-6 py-3
font-semibold
text-white
shadow-lg
shadow-sky-300/40
transition-all duration-300
hover:-translate-y-1
hover:shadow-sky-400/50
cursor-pointer
"
                  >
                    Send Message
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
        {/* References */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="References"
            title="People I've Worked With"
            description="Professional references are available upon request. Here are some people who can speak about my work ethic and technical abilities."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Alier Torrenueva",
                role: "Java Developer",
                company: "IBM",
              },
              {
                name: "Engr. Elmar Diez",
                role: "Mid - Java Developer",
                company: "Accenture",
              },
              {
                name: "Christian Lloyd Remo",
                role: "Senior Programmer Analyst",
                company: "Ascendion",
              },
              {
                name: "Karl Arboiz",
                role: "Custom Software Engineer",
                company: "Accenture",
              },
              {
                name: "Engr. Glaze Exclamador",
                role: "System Test Automation Engineer ",
                company: "Airnav Technology and Services Inc.",
              },
              {
                name: "Syvhell Umila",
                role: "Associate Software Engineer",
                company: "Infor",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="
          rounded-3xl
          border border-sky-200
          bg-white/80
          backdrop-blur-xl
          p-6
          shadow-lg shadow-sky-200/20
          transition-all duration-300
          hover:-translate-y-1
          hover:border-sky-400
          hover:shadow-xl hover:shadow-sky-300/30
        "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
              flex h-14 w-14 items-center justify-center
              rounded-full
              bg-gradient-to-br
              from-sky-500
              to-cyan-500
              text-lg
              font-bold
              text-white
              shadow-lg shadow-sky-300/40
            "
                  >
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {person.name}
                    </h3>

                    <p className="text-sm text-slate-600">{person.role}</p>

                    <p className="text-xs text-sky-600">{person.company}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-sky-100 pt-4">
                  <p className="text-sm text-slate-500">
                    Available as a professional reference upon request.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

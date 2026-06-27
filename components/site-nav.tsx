"use client";

import { useEffect, useState } from "react";
import { Menu, X, Hexagon, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "competencies", label: "Competencies" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            "glass flex items-center justify-between gap-4 rounded-2xl border border-sky-200/70 bg-white/70 px-4 py-3 backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "shadow-[0_12px_40px_rgba(56,189,248,0.18)]"
              : "shadow-[0_6px_24px_rgba(56,189,248,0.08)]",
          )}
        >
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2.5 rounded-xl px-2 py-1"
            aria-label="Julius Basas — home"
          >
            <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-300/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <Hexagon className="size-5" strokeWidth={2.25} />
            </span>
            <span className="flex flex-col text-left leading-none">
              <span className="font-heading text-sm font-bold tracking-wide text-slate-900">
                {" "}
                JULIUS BASAS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-sky-500">
                {" "}
                Full Stack Engineer
              </span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active === id
                      ? "bg-sky-100 text-sky-700 shadow-sm"
                      : "text-slate-500 hover:bg-sky-50 hover:text-sky-700",
                  )}
                >
                  {label}
                  {active === id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go("contact")}
              className="cursor-pointer hidden items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-400/50 sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              Let&apos;s Talk
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-sky-200
bg-white/70
backdrop-blur-xl
hover:bg-sky-50
hover:border-sky-400
transition-all text-foreground lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        <div className="absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {open && (
          <div className="glass mt-2 rounded-2xl border border-border p-2 lg:hidden">
            <ul className="grid gap-1">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className={cn(
                      "w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors",
                      active === id
                        ? "bg-accent text-brand"
                        : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                    )}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

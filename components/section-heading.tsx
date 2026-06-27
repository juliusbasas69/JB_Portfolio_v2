import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { Sparkles } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm">
        <Sparkles className="size-3.5 text-sky-500" />
        {eyebrow}
      </span>
      <h2
        className="
max-w-3xl
text-balance
text-4xl
font-bold
leading-tight
tracking-tight
text-slate-900
sm:text-5xl
"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-lg leading-relaxed text-slate-500",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

import {
  Laptop,
  Smartphone,
  Cloud,
  Webhook,
  Database,
  BrainCircuit,
  Cpu,
  BarChart3,
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  icon: typeof Laptop;
  px: number;
  py: number;
  tone: "brand" | "teal" | "indigo" | "highlight";
  float?: boolean;
};

const CENTER = { px: 50, py: 50 };

const nodes: Node[] = [
  {
    id: "laptop",
    label: "Web App",
    icon: Laptop,
    px: 14,
    py: 20,
    tone: "brand",
    float: true,
  },
  {
    id: "phone",
    label: "Android",
    icon: Smartphone,
    px: 50.1,
    py: 9,
    tone: "indigo",
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    px: 86,
    py: 20,
    tone: "highlight",
    float: true,
  },
  {
    id: "api",
    label: "APIs",
    icon: Webhook,
    px: 91,
    py: 52,
    tone: "brand",
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    px: 84,
    py: 84,
    tone: "teal",
    float: true,
  },
  {
    id: "ai",
    label: "AI",
    icon: BrainCircuit,
    px: 50.1,
    py: 92,
    tone: "indigo",
  },
  {
    id: "iot",
    label: "IoT",
    icon: Cpu,
    px: 16,
    py: 84,
    tone: "teal",
    float: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    px: 9,
    py: 52,
    tone: "highlight",
  },
];

const toneText: Record<Node["tone"], string> = {
  brand: "text-brand",
  teal: "text-teal",
  indigo: "text-indigo",
  highlight: "text-highlight",
};

const toneStyle: Record<
  Node["tone"],
  {
    icon: string;
    bg: string;
    border: string;
    glow: string;
    line: string;
    dot: string;
  }
> = {
  brand: {
    icon: "text-sky-600",
    bg: "bg-sky-100",
    border: "border-t-sky-500",
    glow: "hover:shadow-sky-300/40",
    line: "#38bdf8",
    dot: "#0ea5e9",
  },
  teal: {
    icon: "text-cyan-600",
    bg: "bg-cyan-100",
    border: "border-t-cyan-500",
    glow: "hover:shadow-cyan-300/40",
    line: "#06b6d4",
    dot: "#0891b2",
  },
  indigo: {
    icon: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-t-blue-500",
    glow: "hover:shadow-blue-300/40",
    line: "#3b82f6",
    dot: "#2563eb",
  },
  highlight: {
    icon: "text-violet-600",
    bg: "bg-violet-100",
    border: "border-t-violet-500",
    glow: "hover:shadow-violet-300/40",
    line: "#8b5cf6",
    dot: "#7c3aed",
  },
};

const toX = (p: number) => (p / 100) * 800;
const toY = (p: number) => (p / 100) * 600;

export function EcosystemDiagram() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl select-none">
      {/* Connection Lines */}
      <svg
        viewBox="0 0 800 600"
        className="absolute inset-0 z-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {nodes.map((n, i) => {
          const x2 = toX(n.px);
          const y2 = toY(n.py);

          const style = toneStyle[n.tone];

          const centerX = toX(CENTER.px);
          const centerY = toY(CENTER.py);

          const dx = x2 - centerX;
          const dy = y2 - centerY;

          const length = Math.sqrt(dx * dx + dy * dy);

          // Start line just outside Engineering Core
          const radius = 48;

          const x1 = centerX + (dx / length) * radius;
          const y1 = centerY + (dy / length) * radius;

          const pathId = `path-${n.id}`;

          return (
            <g key={n.id}>
              <path
                id={pathId}
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                fill="none"
                stroke={style.line}
                strokeWidth={1.5}
                strokeOpacity={0.25}
              />

              <path
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                fill="none"
                stroke={style.line}
                strokeWidth={2}
                strokeLinecap="round"
                className="animate-dash"
                style={{
                  animationDelay: `${i * 0.18}s`,
                }}
              />

              <circle r={3.5} fill={style.dot}>
                <animateMotion
                  dur={`${2.6 + i * 0.25}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Engineering Core */}
      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        {/* This hides the SVG behind the card */}
        <div className="relative rounded-3xl bg-background">
          <span className="absolute inset-0 scale-125 rounded-full bg-brand/10 blur-2xl" />

          <div className="glow-ring relative flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-sky-300 bg-gradient-to-b from-sky-50 to-white shadow-[0_0_35px_rgba(56,189,248,0.25)]">
            <Cpu className="size-7 text-sky-600" />

            <span className="px-1 text-center text-[11px] font-semibold leading-tight text-sky-800">
              {" "}
              Engineering
              <br />
              Core
            </span>
          </div>
        </div>
      </div>

      {/* Nodes */}
      {nodes.map((n) => {
        const Icon = n.icon;
        const style = toneStyle[n.tone];

        return (
          <div
            key={n.id}
            className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 ${
              n.float ? "animate-float" : "animate-float-slow"
            }`}
            style={{
              left: `${n.px}%`,
              top: `${n.py}%`,
            }}
          >
            <div
              className={`
    flex h-20 w-20 flex-col items-center justify-center gap-2
    rounded-2xl border border-border border-t-2
    ${style.border} border-sky-300
    bg-surface/95 backdrop-blur-sm
    shadow-[0_8px_24px_-14px_rgba(15,23,42,0.4)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-lg
    ${style.glow}
  `}
            >
              {" "}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.bg}`}
              >
                <Icon className={`size-5 ${style.icon}`} />
              </div>
              <span className="px-1 text-center text-[11px] font-medium leading-tight text-muted-foreground text-sky-700">
                {n.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

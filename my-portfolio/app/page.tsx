"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  TrendingUp,
  Code2,
  Layers3,
  LineChart,
  MousePointer2,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Brand icons                                                                */
/* -------------------------------------------------------------------------- */

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.85 0-2.13 1.45-2.13 2.95v5.67H9.36V8.97h3.41v1.56h.05c.48-.9 1.64-1.84 3.37-1.84 3.61 0 4.27 2.37 4.27 5.45v6.31zM5.34 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45H7.1V8.97H3.56v11.48z" />
    </svg>
  );
}

function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* External references                                                       */
/* -------------------------------------------------------------------------- */

const referenceLinks: Record<string, string> = {
  Python: "https://docs.python.org/3/",
  Pandas: "https://pandas.pydata.org/docs/user_guide/",
  NumPy: "https://numpy.org/doc/stable/",
  SQL: "https://www.w3schools.com/Sql/",
  Excel: "https://support.microsoft.com/en-us/excel/",
  "Power BI": "https://www.microsoft.com/en/power-platform/products/power-bi",
  Tableau: "https://www.tableau.com/",
  Matplotlib: "https://matplotlib.org/stable/",
  Seaborn: "https://seaborn.pydata.org/",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/docs/",
  ReactJS: "https://react.dev/",
  "Tailwind CSS": "https://tailwindcss.com/docs/",
  EDA: "https://www.ibm.com/think/topics/exploratory-data-analysis",
  "Chandigarh University": "https://www.cuchd.in/",
  Udemy: "https://www.udemy.com/",
  IBM: "https://www.ibm.com/",
  Coursera: "https://www.coursera.org/",
  "Infosys Springboard": "https://infyspringboard.onwingspan.com/",
};

function ReferenceLink({
  term,
  className = "",
  nested = false,
}: {
  term: string;
  className?: string;
  nested?: boolean;
}) {
  const href = referenceLinks[term];

  if (!href) return <>{term}</>;

  if (nested) {
    return (
      <span
        role="link"
        tabIndex={0}
        title={`Learn more about ${term}`}
        className={`${className} cursor-pointer`}
        aria-label={`Learn more about ${term}`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();

          const openedWindow = window.open(href, "_blank");

          if (openedWindow) {
            openedWindow.opener = null;
          } else {
            window.location.href = href;
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.stopPropagation();

            const openedWindow = window.open(href, "_blank");

            if (openedWindow) {
              openedWindow.opener = null;
            } else {
              window.location.href = href;
            }
          }
        }}
      >
        {term}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Learn more about ${term}`}
      className={className}
    >
      {term}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const skills = [
  {
    title: "Data Analytics",
    eyebrow: "01",
    description:
      "Cleaning, transforming and exploring real-world datasets to uncover patterns and actionable insights.",
    tools: ["Python", "Pandas", "NumPy", "SQL", "Excel"],
    icon: BarChart3,
  },
  {
    title: "BI & Visualization",
    eyebrow: "02",
    description:
      "Building analytical dashboards and visual stories that turn complex information into clear decisions.",
    tools: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
    icon: LineChart,
  },
  {
    title: "Web Development",
    eyebrow: "03",
    description:
      "Creating responsive, component-driven interfaces with attention to usability, performance and visual detail.",
    tools: ["HTML", "Tailwind CSS", "JavaScript", "TypeScript"],
    icon: Code2,
  },
];

const projects = [
  {
    number: "01",
    title: "Global War Casualties",
    category: "DATA ANALYTICS · BUSINESS INTELLIGENCE",
    description:
      "A full analytical pipeline examining reported casualty patterns across Russia–Ukraine and Israel–Palestine. Raw conflict data was cleaned, transformed and converted into analytical datasets before being presented through Power BI and Tableau.",
    technologies: ["Python", "Pandas", "Power BI", "Tableau", "Matplotlib"],
    stats: [
      ["2", "conflicts"],
      ["37K+", "events"],
      ["73K+", "reported deaths"],
    ],
    href: "https://global-war-casualties-project.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "Food Price Forecasting",
    category: "DATA ANALYTICS · FORECASTING",
    description:
      "Analyzed 25,000+ agricultural records covering 15+ crops and more than 10 years of historical data to understand price movements, production patterns and seasonal variation.",
    technologies: ["Python", "Pandas", "NumPy", "Seaborn"],
    stats: [
      ["25K+", "records"],
      ["15+", "crops"],
      ["90%+", "accuracy"],
    ],
    href: "https://food-price-forecasting-project.vercel.app/",
  },
  {
    number: "03",
    title: "COVID-19 Data Tracking System",
    category: "DATA ANALYTICS · EDA",
    description:
      "Processed and analyzed more than 100K COVID-19 records spanning 150+ countries, creating visual reports around infection trends, mortality and geographic differences.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    stats: [
      ["100K+", "records"],
      ["150+", "regions"],
      ["15+", "visuals"],
    ],
    href: "https://covid-19-data-tracker.vercel.app/",
  },
  {
    number: "04",
    title: "Hippo Store",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A responsive gaming marketplace built with a component-based frontend architecture for browsing game listings and discounted products.",
    highlights: [
      "Developed a responsive gaming marketplace using React.js and Tailwind CSS, delivering a modern UI for browsing 50+ game listings and discounted products.",
      "Designed and implemented 15+ reusable React components for product cards, navigation, categories, promotional sections, and interactive UI elements.",
      "Applied responsive design, Flexbox/Grid, and Tailwind utility classes to optimize the interface across desktop, tablet, and mobile screen sizes.",
      "Organized the application using a component-based and scalable frontend architecture, preparing the platform for future API integration, user authentication, cart management, and payment workflows.",
    ],
    technologies: ["HTML", "ReactJS", "Tailwind CSS", "JavaScript"],
    stats: [
      ["50+", "games"],
      ["15+", "components"],
      ["Responsive", "UI"],
    ],
    href: "https://hippo-store-gcjg.vercel.app/",
  },
  {
    number: "05",
    title: "Find My Lost",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive lost-and-found platform adopted by 750+ students at Chandigarh University for submitting and managing lost-item information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    stats: [
      ["750+", "students"],
      ["Responsive", "platform"],
      ["Live", "deployment"],
    ],
    href: "https://find-my-lost.vercel.app/",
  },
  {
    number: "06",
    title: "CU Feast",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive food discovery platform adopted by 750+ students at Chandigarh University for searching food outlets inside the campus.",
    technologies: ["HTML", "CSS", "JavaScript"],
    stats: [
      ["750+", "students"],
      ["Responsive", "platform"],
      ["Live", "deployment"],
    ],
    href: "https://cu-feast.vercel.app/",
  },
];

const certifications = [
  {
    title: "Complete Data Analyst Bootcamp From Basics To Advanced",
    provider: "Udemy",
    date: "June 2026",
    href: "https://www.udemy.com/certificate/UC-a5b7e72f-b69a-4bcc-9436-3db5a9de5d78/",
  },
  {
    title: "Data Visualization with R",
    provider: "IBM · Coursera",
    date: "November 2024",
    href: "https://www.coursera.org/account/accomplishments/verify/67JXE8VFH94M",
  },
  {
    title: "Introduction to H2O using Python",
    provider: "Infosys Springboard",
    date: "October 2024",
    href: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_13622433636815356000_shared/1-60818e25-eb2f-4c9d-a879-db1ce9edc476.pdf",
  },
  {
    title: "Data Visualization with Tableau",
    provider: "University of California, Davis · Coursera",
    date: "December 2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/U3GQA3GYAPE9",
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    provider: "IBM · Coursera",
    date: "July 2023",
    href: "https://www.coursera.org/verify/7YUK6N6LQKKT",
  },
  {
    title: "Build Dynamic User Interfaces (UI) for Websites",
    provider: "Google · Coursera",
    date: "July 2023",
    href: "https://www.coursera.org/verify/3MSDWCXPLSLT",
  },
];

/* -------------------------------------------------------------------------- */
/* Animated counter                                                           */
/* -------------------------------------------------------------------------- */

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 900;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(value * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <>
      {value % 1 === 0 ? Math.round(displayValue) : displayValue.toFixed(2)}
      {suffix}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function AboutDeveloperPage() {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#030712] text-slate-100 selection:bg-indigo-500/30">
      {/* ------------------------------------------------------------------ */}
      {/* Full-page ambient background                                      */}
      {/* ------------------------------------------------------------------ */}

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030712]">
        {/* Deep gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#07091a] to-[#030712]" />

        {/* Top transition glow — fills the area immediately below navbar */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[260px] rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/25 to-blue-600/15 blur-[100px]" />

        <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-indigo-600/20 blur-[150px] animate-[pulse_8s_ease-in-out_infinite]" />

        <div className="absolute top-[25%] -left-60 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[160px] animate-[pulse_10s_ease-in-out_infinite]" />

        <div className="absolute top-[55%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] animate-[pulse_9s_ease-in-out_infinite]" />

        <div className="absolute bottom-[-250px] left-[20%] w-[650px] h-[650px] rounded-full bg-violet-600/10 blur-[160px]" />

        {/* Very subtle full-page grid */}
        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative z-10 min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-[#030712] via-[#080b20] to-[#110820]">
        {/* Top atmospheric glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[260px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/20 to-blue-500/10 blur-[110px] pointer-events-none" />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.045]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(circle at 70% 35%, rgba(99,102,241,.18), transparent 30%), radial-gradient(circle at 25% 75%, rgba(168,85,247,.12), transparent 28%)",
          }}
        />

        {/* Subtle top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent shadow-[0_0_25px_rgba(99,102,241,.4)]" />

        <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center -translate-y-3">
            {/* Left */}
            <div className="animate-[fadeIn_0.8s_ease-out]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.045] border border-white/10 shadow-[0_0_35px_rgba(99,102,241,.08)] backdrop-blur-xl hover:bg-white/[0.08] hover:border-indigo-400/30 hover:shadow-[0_0_40px_rgba(99,102,241,.16)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Data Analyst · Developer
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                Hello, I&apos;m
              </p>

              <h1 className="mt-2 text-6xl md:text-7xl lg:text-[6.8rem] leading-[1.08] font-black tracking-[-0.055em] text-white relative z-10 overflow-visible">
                Tushar
                <span className="block w-fit pr-4 pb-3 overflow-visible bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(129,140,248,.18)]">
                  Pandey.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl md:text-2xl leading-relaxed text-slate-300">
                I build{" "}
                <span className="font-semibold text-white">
                  analytical experiences
                </span>{" "}
                that connect data, visualization and technology.
              </p>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-400">
                Computer Science graduate focused on data analytics,
                visualization, business intelligence and frontend development.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href="mailto:tushar2003oct30@gmail.com"
                  className="group relative inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-[0_0_30px_rgba(99,102,241,.25)] hover:shadow-[0_0_45px_rgba(129,140,248,.45)] hover:from-indigo-500 hover:to-purple-500 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <Mail size={16} className="relative" />

                  <span className="relative">Let&apos;s talk</span>

                  <ArrowRight
                    size={15}
                    className="relative group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/tusharpandey30/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.045] border border-white/10 text-slate-200 text-sm font-semibold shadow-lg backdrop-blur-xl hover:bg-white/[0.09] hover:border-indigo-400/40 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,.15)] active:translate-y-0 transition-all duration-300"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </a>

                <a
                  href="https://github.com/tusharpandey9991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.045] border border-white/10 text-slate-200 text-sm font-semibold shadow-lg backdrop-blur-xl hover:bg-white/[0.09] hover:border-purple-400/40 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,.15)] active:translate-y-0 transition-all duration-300"
                >
                  <GithubIcon size={17} />
                  GitHub
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-slate-500">
                <ArrowDown
                  size={16}
                  className="animate-bounce text-indigo-400"
                />
                <span className="text-xs uppercase tracking-[0.2em]">
                  Explore my work
                </span>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative block mt-10 lg:mt-0">
              <div className="relative mx-auto w-full max-w-[460px] h-[340px] sm:h-[420px] lg:h-[500px]">
                <div className="absolute left-1/2 -translate-x-1/2 origin-top scale-[0.68] sm:scale-[0.84] lg:scale-100 w-[460px] h-[500px]">
                  {/* Decorative orbital rings */}
                  <div className="absolute inset-5 rounded-[3rem] border border-indigo-400/20 rotate-6 shadow-[0_0_60px_rgba(99,102,241,.08)]" />

                  <div className="absolute inset-10 rounded-[3rem] border border-purple-400/20 -rotate-6 shadow-[0_0_60px_rgba(168,85,247,.08)]" />

                  <div className="absolute inset-16 rounded-[2.5rem] bg-indigo-500/5 blur-2xl animate-pulse" />

                  {/* Main developer card */}
                  <div className="absolute inset-16 rounded-[2.5rem] bg-white/[0.045] backdrop-blur-2xl border border-white/10 shadow-[0_25px_90px_rgba(0,0,0,.45)] flex items-center justify-center overflow-hidden hover:border-indigo-400/30 hover:shadow-[0_25px_100px_rgba(79,70,229,.18)] hover:-translate-y-1 transition-all duration-500">
                    <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-indigo-500/15 blur-3xl" />

                    <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-purple-500/15 blur-3xl" />

                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-indigo-500/[0.04]" />

                    <div className="relative text-center">
                      {/* Animated developer illustration */}
                      <div className="relative mx-auto w-44 h-44">
                        {/* Glow */}
                        <div className="absolute inset-3 rounded-full bg-indigo-500/25 blur-2xl animate-pulse" />

                        {/* Avatar circle */}
                        <div className="absolute inset-2 rounded-[2.2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 border border-indigo-300/20 shadow-2xl shadow-indigo-950/40 flex items-center justify-center overflow-hidden hover:scale-[1.03] transition-transform duration-500">
                          {/* Orbit ring */}
                          <div className="absolute inset-3 rounded-[1.8rem] border border-indigo-300/20" />
                          {/* Male tech developer SVG */}
                          <svg
                            viewBox="0 0 160 160"
                            className="relative w-32 h-32 animate-[float_4s_ease-in-out_infinite]"
                            aria-label="Animated professional technology developer"
                            role="img"
                          >
                            <defs>
                              {/* ========================================================= */}
                              {/* Core glows                                                */}
                              {/* ========================================================= */}

                              <radialGradient
                                id="developerCoreGlow"
                                cx="50%"
                                cy="43%"
                                r="58%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#818cf8"
                                  stopOpacity="0.34"
                                />
                                <stop
                                  offset="38%"
                                  stopColor="#6366f1"
                                  stopOpacity="0.18"
                                />
                                <stop
                                  offset="72%"
                                  stopColor="#7c3aed"
                                  stopOpacity="0.07"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#7c3aed"
                                  stopOpacity="0"
                                />
                              </radialGradient>

                              <radialGradient
                                id="developerBottomGlow"
                                cx="50%"
                                cy="20%"
                                r="80%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#6366f1"
                                  stopOpacity="0.18"
                                />
                                <stop
                                  offset="60%"
                                  stopColor="#8b5cf6"
                                  stopOpacity="0.06"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#8b5cf6"
                                  stopOpacity="0"
                                />
                              </radialGradient>

                              {/* ========================================================= */}
                              {/* Holographic image treatment                               */}
                              {/* ========================================================= */}

                              <linearGradient
                                id="developerImageTint"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#818cf8"
                                  stopOpacity="0.08"
                                />
                                <stop
                                  offset="32%"
                                  stopColor="#6366f1"
                                  stopOpacity="0.02"
                                />
                                <stop
                                  offset="68%"
                                  stopColor="#8b5cf6"
                                  stopOpacity="0.08"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#c084fc"
                                  stopOpacity="0.16"
                                />
                              </linearGradient>

                              <linearGradient
                                id="developerFade"
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#020617"
                                  stopOpacity="0"
                                />
                                <stop
                                  offset="68%"
                                  stopColor="#020617"
                                  stopOpacity="0.02"
                                />
                                <stop
                                  offset="86%"
                                  stopColor="#020617"
                                  stopOpacity="0.48"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#020617"
                                  stopOpacity="0.98"
                                />
                              </linearGradient>

                              <linearGradient
                                id="developerFrameGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#818cf8"
                                  stopOpacity="0.34"
                                />
                                <stop
                                  offset="50%"
                                  stopColor="#6366f1"
                                  stopOpacity="0.08"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#c084fc"
                                  stopOpacity="0.28"
                                />
                              </linearGradient>

                              {/* ========================================================= */}
                              {/* Laptop gradients                                          */}
                              {/* ========================================================= */}

                              <linearGradient
                                id="laptopScreenGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#312e81" />
                                <stop offset="45%" stopColor="#1e1b4b" />
                                <stop offset="100%" stopColor="#0f172a" />
                              </linearGradient>

                              <linearGradient
                                id="laptopBaseGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#1e293b" />
                                <stop offset="50%" stopColor="#0f172a" />
                                <stop offset="100%" stopColor="#020617" />
                              </linearGradient>

                              {/* ========================================================= */}
                              {/* Background tech halo                                     */}
                              {/* ========================================================= */}

                              <radialGradient
                                id="techHalo"
                                cx="50%"
                                cy="50%"
                                r="50%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#6366f1"
                                  stopOpacity="0.14"
                                />
                                <stop
                                  offset="55%"
                                  stopColor="#6366f1"
                                  stopOpacity="0.05"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#6366f1"
                                  stopOpacity="0"
                                />
                              </radialGradient>

                              {/* ========================================================= */}
                              {/* Image crop                                                */}
                              {/* ========================================================= */}

                              <clipPath id="developerPortraitClip">
                                <path
                                  d="
          M43 17
          C49 9 61 5 80 5
          C99 5 111 9 117 17
          L125 38
          L121 82
          C118 103 105 116 80 122
          C55 116 42 103 39 82
          L35 38
          Z
        "
                                />
                              </clipPath>

                              {/* ========================================================= */}
                              {/* Bottom fade mask                                          */}
                              {/* ========================================================= */}

                              <mask id="developerBottomFade">
                                <linearGradient
                                  id="developerMaskGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="0%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stopColor="white" />
                                  <stop offset="64%" stopColor="white" />
                                  <stop offset="82%" stopColor="#aaaaaa" />
                                  <stop offset="100%" stopColor="black" />
                                </linearGradient>

                                <rect
                                  x="20"
                                  y="4"
                                  width="120"
                                  height="124"
                                  fill="url(#developerMaskGradient)"
                                />
                              </mask>

                              {/* ========================================================= */}
                              {/* Glow filters                                              */}
                              {/* ========================================================= */}

                              <filter
                                id="developerGlow"
                                x="-80%"
                                y="-80%"
                                width="260%"
                                height="260%"
                              >
                                <feGaussianBlur stdDeviation="5" />
                              </filter>

                              <filter
                                id="smallGlow"
                                x="-100%"
                                y="-100%"
                                width="300%"
                                height="300%"
                              >
                                <feGaussianBlur stdDeviation="2.5" />
                              </filter>

                              <filter
                                id="laptopGlow"
                                x="-80%"
                                y="-80%"
                                width="260%"
                                height="260%"
                              >
                                <feGaussianBlur stdDeviation="3" />
                              </filter>
                            </defs>

                            {/* ========================================================= */}
                            {/* Ambient developer glow                                   */}
                            {/* ========================================================= */}

                            <circle
                              cx="80"
                              cy="68"
                              r="58"
                              fill="url(#developerCoreGlow)"
                              filter="url(#developerGlow)"
                              className="animate-pulse"
                            />

                            <circle
                              cx="80"
                              cy="95"
                              r="54"
                              fill="url(#developerBottomGlow)"
                            />

                            <circle
                              cx="80"
                              cy="73"
                              r="57"
                              fill="url(#techHalo)"
                            />

                            {/* ========================================================= */}
                            {/* Background circuit system                                 */}
                            {/* ========================================================= */}

                            <g
                              fill="none"
                              stroke="#6366f1"
                              strokeWidth="0.7"
                              opacity="0.28"
                            >
                              <path d="M17 47h20l6-6h10" />
                              <path d="M143 47h-20l-6-6h-10" />

                              <path d="M14 76h22l5-5h9" />
                              <path d="M146 76h-22l-5-5h-9" />

                              <path d="M24 101h17l8-8" />
                              <path d="M136 101h-17l-8-8" />

                              <path d="M37 29h13l6 7" />
                              <path d="M123 29h-13l-6 7" />
                            </g>

                            {/* Circuit nodes */}
                            <g fill="#818cf8">
                              <circle cx="17" cy="47" r="1.5" />
                              <circle cx="143" cy="47" r="1.5" />
                              <circle cx="14" cy="76" r="1.3" />
                              <circle cx="146" cy="76" r="1.3" />
                              <circle cx="24" cy="101" r="1.2" />
                              <circle cx="136" cy="101" r="1.2" />
                            </g>

                            <g fill="#c084fc">
                              <circle cx="50" cy="36" r="1.2" />
                              <circle cx="110" cy="36" r="1.2" />
                              <circle cx="49" cy="93" r="1.2" />
                              <circle cx="111" cy="93" r="1.2" />
                            </g>

                            {/* ========================================================= */}
                            {/* Portrait hologram platform                                */}
                            {/* ========================================================= */}

                            <rect
                              x="31"
                              y="15"
                              width="98"
                              height="104"
                              rx="31"
                              fill="#0f172a"
                              fillOpacity="0.16"
                              stroke="url(#developerFrameGradient)"
                              strokeWidth="1"
                              opacity="0.72"
                            />

                            <rect
                              x="37"
                              y="21"
                              width="86"
                              height="92"
                              rx="27"
                              fill="none"
                              stroke="#818cf8"
                              strokeWidth="0.7"
                              strokeDasharray="2 6"
                              opacity="0.22"
                            />

                            {/* Rotating inner HUD ring */}
                            <ellipse
                              cx="80"
                              cy="69"
                              rx="48"
                              ry="48"
                              fill="none"
                              stroke="#818cf8"
                              strokeWidth="0.65"
                              strokeDasharray="2 8"
                              opacity="0.18"
                              className="animate-[spin_20s_linear_infinite]"
                            />

                            <ellipse
                              cx="80"
                              cy="69"
                              rx="54"
                              ry="42"
                              fill="none"
                              stroke="#a855f7"
                              strokeWidth="0.6"
                              strokeDasharray="1 9"
                              opacity="0.12"
                              className="animate-[spin_25s_linear_infinite_reverse]"
                            />

                            {/* ========================================================= */}
                            {/* Main attached developer artwork                            */}
                            {/* ========================================================= */}

                            <g
                              clipPath="url(#developerPortraitClip)"
                              mask="url(#developerBottomFade)"
                              className="animate-[float_4s_ease-in-out_infinite]"
                            >
                              {/* Deep portrait backdrop */}
                              <rect
                                x="32"
                                y="4"
                                width="96"
                                height="124"
                                fill="#020617"
                                opacity="0.42"
                              />

                              {/* Your attached artwork */}
                              <image
                                href="/developer-avatar-transparent.png"
                                x="23"
                                y="-3"
                                width="114"
                                height="114"
                                preserveAspectRatio="xMidYMid meet"
                              />

                              {/* Holographic indigo/purple treatment */}
                              <rect
                                x="30"
                                y="4"
                                width="100"
                                height="118"
                                fill="url(#developerImageTint)"
                                opacity="0.72"
                                pointerEvents="none"
                              />

                              {/* Subtle scanlines */}
                              <g
                                stroke="#c4b5fd"
                                strokeWidth="0.35"
                                opacity="0.10"
                              >
                                <path d="M32 38h96" />
                                <path d="M32 43h96" />
                                <path d="M32 48h96" />
                                <path d="M32 53h96" />
                                <path d="M32 58h96" />
                                <path d="M32 63h96" />
                                <path d="M32 68h96" />
                                <path d="M32 73h96" />
                                <path d="M32 78h96" />
                                <path d="M32 83h96" />
                                <path d="M32 88h96" />
                                <path d="M32 93h96" />
                              </g>

                              {/* Soft center spotlight */}
                              <ellipse
                                cx="80"
                                cy="55"
                                rx="38"
                                ry="44"
                                fill="#818cf8"
                                opacity="0.055"
                                filter="url(#developerGlow)"
                              />
                            </g>

                            {/* ========================================================= */}
                            {/* Portrait edge glow                                        */}
                            {/* ========================================================= */}

                            <path
                              d="
      M43 17
      C49 9 61 5 80 5
      C99 5 111 9 117 17
      L125 38
      L121 82
      C118 103 105 116 80 122
      C55 116 42 103 39 82
      L35 38
      Z
    "
                              fill="none"
                              stroke="#818cf8"
                              strokeWidth="0.9"
                              opacity="0.20"
                            />

                            {/* ========================================================= */}
                            {/* HUD corner brackets                                      */}
                            {/* ========================================================= */}

                            <g
                              fill="none"
                              stroke="#a5b4fc"
                              strokeWidth="1"
                              opacity="0.48"
                            >
                              <path d="M39 38V29h9" />
                              <path d="M121 38V29h-9" />

                              <path d="M39 86v9h9" />
                              <path d="M121 86v9h-9" />
                            </g>

                            {/* Tiny status marks */}
                            <g>
                              <circle cx="46" cy="30" r="1.2" fill="#22c55e" />
                              <circle cx="51" cy="30" r="1.2" fill="#818cf8" />
                              <circle cx="114" cy="30" r="1.2" fill="#c084fc" />
                            </g>

                            {/* ========================================================= */}
                            {/* Left floating code control                                */}
                            {/* ========================================================= */}

                            <g className="animate-[float_3.5s_ease-in-out_infinite]">
                              <rect
                                x="20"
                                y="31"
                                width="21"
                                height="21"
                                rx="7"
                                fill="#0f172a"
                                stroke="#6366f1"
                                strokeWidth="1"
                                opacity="0.97"
                              />

                              <path
                                d="M28 37l-3 4 3 4M34 37l3 4-3 4M33 36l-2 10"
                                fill="none"
                                stroke="#a5b4fc"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>

                            {/* ========================================================= */}
                            {/* Right analytics control                                  */}
                            {/* ========================================================= */}

                            <g className="animate-[float_4.5s_ease-in-out_infinite_reverse]">
                              <rect
                                x="118"
                                y="45"
                                width="22"
                                height="22"
                                rx="7"
                                fill="#0f172a"
                                stroke="#a855f7"
                                strokeWidth="1"
                                opacity="0.97"
                              />

                              <path
                                d="M124 60V52M128 60V49M132 60V54M136 60V47"
                                stroke="#c4b5fd"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />

                              <path
                                d="M123 61h14"
                                stroke="#6366f1"
                                strokeWidth="1"
                              />
                            </g>

                            {/* ========================================================= */}
                            {/* Micro data particles                                     */}
                            {/* ========================================================= */}

                            <g className="animate-pulse">
                              <circle cx="46" cy="56" r="1.5" fill="#818cf8" />
                              <circle cx="113" cy="54" r="1.5" fill="#c084fc" />
                              <circle cx="42" cy="82" r="1.2" fill="#6366f1" />
                              <circle cx="118" cy="84" r="1.2" fill="#a855f7" />
                            </g>

                            {/* Particle connections */}
                            <g
                              fill="none"
                              stroke="#818cf8"
                              strokeWidth="0.7"
                              opacity="0.34"
                            >
                              <path d="M41 41h10" />
                              <path d="M118 55h-9" />
                              <path d="M42 82h10" />
                              <path d="M118 84h-9" />
                            </g>

                            {/* ========================================================= */}
                            {/* Laptop foreground                                       */}
                            {/* ========================================================= */}

                            {/* Laptop glow behind */}
                            <rect
                              x="52"
                              y="117"
                              width="56"
                              height="21"
                              rx="5"
                              fill="#6366f1"
                              opacity="0.22"
                              filter="url(#laptopGlow)"
                            />

                            {/* Laptop outer body */}
                            <path
                              d="M52 115h56l8 27H44l8-27Z"
                              fill="url(#laptopBaseGradient)"
                              stroke="#818cf8"
                              strokeWidth="2"
                            />

                            {/* Laptop screen bezel */}
                            <rect
                              x="57"
                              y="118"
                              width="46"
                              height="20"
                              rx="3"
                              fill="#020617"
                              stroke="#6366f1"
                              strokeWidth="1.1"
                            />

                            {/* Laptop display */}
                            <rect
                              x="59"
                              y="120"
                              width="42"
                              height="16"
                              rx="2"
                              fill="url(#laptopScreenGradient)"
                            />

                            {/* Screen glow */}
                            <rect
                              x="61"
                              y="122"
                              width="38"
                              height="12"
                              rx="1.5"
                              fill="#312e81"
                              opacity="0.38"
                            />

                            {/* Terminal/code lines */}
                            <path
                              d="M64 125h10M64 129h15M64 133h8"
                              stroke="#818cf8"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />

                            <path
                              d="M84 125h10M84 129h7M84 133h11"
                              stroke="#a78bfa"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />

                            {/* Terminal cursor */}
                            <rect
                              x="94"
                              y="131"
                              width="2"
                              height="3"
                              rx="0.5"
                              fill="#c4b5fd"
                              className="animate-pulse"
                            />

                            {/* Laptop hinge */}
                            <path
                              d="M62 118h36"
                              stroke="#c4b5fd"
                              strokeWidth="1"
                              opacity="0.4"
                            />

                            {/* Laptop base highlight */}
                            <path
                              d="M46 142h68"
                              stroke="#a5b4fc"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              opacity="0.58"
                            />

                            {/* ========================================================= */}
                            {/* Laptop data pulse                                       */}
                            {/* ========================================================= */}

                            <g className="animate-pulse">
                              <circle cx="54" cy="130" r="1" fill="#22c55e" />
                              <circle cx="108" cy="130" r="1" fill="#a855f7" />
                            </g>

                            {/* ========================================================= */}
                            {/* Orbiting data nodes                                     */}
                            {/* ========================================================= */}

                            <g
                              className="animate-[spin_14s_linear_infinite]"
                              style={{ transformOrigin: "80px 73px" }}
                            >
                              <circle cx="29" cy="73" r="2" fill="#818cf8" />

                              <circle cx="131" cy="73" r="2" fill="#c084fc" />
                            </g>

                            {/* ========================================================= */}
                            {/* Developer status indicator                               */}
                            {/* ========================================================= */}

                            <circle
                              cx="80"
                              cy="74"
                              r="45"
                              fill="none"
                              stroke="#6366f1"
                              strokeWidth="0.5"
                              opacity="0.08"
                            />

                            {/* ========================================================= */}
                            {/* Bottom technology floor                                 */}
                            {/* ========================================================= */}

                            <path
                              d="M43 147h74"
                              stroke="#6366f1"
                              strokeWidth="1"
                              opacity="0.18"
                              strokeLinecap="round"
                            />

                            <path
                              d="M56 151h48"
                              stroke="#a855f7"
                              strokeWidth="0.7"
                              opacity="0.13"
                              strokeLinecap="round"
                            />

                            <circle cx="43" cy="147" r="1.4" fill="#818cf8" />

                            <circle cx="117" cy="147" r="1.4" fill="#c084fc" />

                            {/* ========================================================= */}
                            {/* Decorative sparkles                                     */}
                            {/* ========================================================= */}

                            <g className="animate-pulse">
                              <path
                                d="M27 104l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z"
                                fill="#818cf8"
                                opacity="0.65"
                              />

                              <path
                                d="M134 95l1.3 3.5 3.5 1.3-3.5 1.3-1.3 3.5-1.3-3.5-3.5-1.3 3.5-1.3Z"
                                fill="#c084fc"
                                opacity="0.60"
                              />
                            </g>

                            {/* ========================================================= */}
                            {/* Final ambient ring                                       */}
                            {/* ========================================================= */}

                            <ellipse
                              cx="80"
                              cy="73"
                              rx="59"
                              ry="52"
                              fill="none"
                              stroke="#6366f1"
                              strokeWidth="0.55"
                              opacity="0.08"
                              strokeDasharray="1 10"
                              className="animate-[spin_30s_linear_infinite_reverse]"
                            />
                          </svg>
                          {/* Online status */}
                          <div className="absolute right-2 bottom-2 w-7 h-7 rounded-full bg-emerald-500 border-4 border-slate-950 shadow-[0_0_20px_rgba(16,185,129,.5)]">
                            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                          </div>
                        </div>

                        {/* Floating code symbol */}
                        <div className="absolute -left-3 top-3 w-9 h-9 rounded-xl bg-slate-900/90 backdrop-blur-xl shadow-lg border border-indigo-400/20 flex items-center justify-center animate-[float_3.5s_ease-in-out_infinite] hover:scale-110 hover:border-indigo-300/40 hover:shadow-[0_0_25px_rgba(99,102,241,.25)] transition-all">
                          <Code2 size={17} className="text-indigo-300" />
                        </div>

                        {/* Floating data symbol */}
                        <div className="absolute -right-3 top-12 w-9 h-9 rounded-xl bg-slate-900/90 backdrop-blur-xl shadow-lg border border-purple-400/20 flex items-center justify-center animate-[float_4.5s_ease-in-out_infinite_reverse] hover:scale-110 hover:border-purple-300/40 hover:shadow-[0_0_25px_rgba(168,85,247,.25)] transition-all">
                          <BarChart3 size={17} className="text-purple-300" />
                        </div>
                      </div>

                      <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
                        Tushar Pandey
                      </h2>

                      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                        Data · Code · Visualization
                      </p>
                    </div>
                  </div>

                  {/* Floating analytics card */}
                  <div className="absolute right-2 sm:-right-4 lg:-right-28 top-8 w-40 sm:w-48 rounded-2xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.35)] p-4 animate-[float_5s_ease-in-out_infinite] hover:-translate-y-2 hover:border-indigo-400/30 hover:shadow-[0_20px_70px_rgba(99,102,241,.18)] transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                        Analytics
                      </span>

                      <TrendingUp size={15} className="text-emerald-400" />
                    </div>

                    <div className="mt-3 flex items-end gap-1.5 h-12">
                      {[22, 35, 28, 48, 42, 58, 50, 72, 64, 84].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-purple-400 shadow-[0_0_8px_rgba(99,102,241,.15)]"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>

                    <p className="mt-2 text-xs text-slate-500">
                      Turning data into patterns
                    </p>
                  </div>

                  {/* Floating code card */}
                   <div className="absolute left-[-4px] top-[275px] w-28 sm:left-[-16px] sm:top-auto sm:bottom-10 sm:w-52 lg:left-[-112px] lg:bottom-20 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-indigo-400/10 text-white shadow-[0_20px_70px_rgba(0,0,0,.4)] p-2 sm:p-4 animate-[float_6s_ease-in-out_infinite_reverse] hover:-translate-y-2 hover:border-indigo-400/30 hover:shadow-[0_20px_70px_rgba(79,70,229,.18)] transition-all duration-300">
                    <div className="flex items-center gap-1 mb-2 sm:gap-1.5 sm:mb-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
                    </div>

                    <div className="font-mono text-[8px] leading-4 sm:text-[10px] sm:leading-5 text-slate-400">
                      <p>
                        <span className="text-purple-400">df</span>
                        .clean()
                      </p>

                      <p>
                        <span className="text-indigo-400">→</span> transform()
                      </p>

                      <p>
                        <span className="text-emerald-400">→</span> visualize()
                      </p>

                      <p>
                        <span className="text-blue-400">→</span> insight
                      </p>
                    </div>
                  </div>

                  {/* University information */}
                  <div className="absolute right-8 bottom-2 flex items-center gap-2 rounded-xl bg-slate-900/85 backdrop-blur-xl border border-white/10 shadow-lg px-3.5 py-2.5 hover:border-indigo-400/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(99,102,241,.15)] transition-all duration-300">
                    <MapPin size={14} className="text-indigo-400" />

                    <span className="text-xs font-medium text-slate-300">
                      <ReferenceLink
                        term="Chandigarh University"
                        className="hover:text-indigo-300 transition-colors"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Metrics                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative border-y border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.03] via-purple-500/[0.05] to-blue-500/[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="group py-9 md:py-11 md:border-r border-white/10 text-center hover:bg-white/[0.025] transition-all duration-300">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_15px_rgba(129,140,248,.3)] transition-all">
                <AnimatedNumber value={6} />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold">
                Featured Projects
              </p>
            </div>

            <div className="group py-9 md:py-11 md:border-r border-white/10 text-center hover:bg-white/[0.025] transition-all duration-300">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-purple-300 group-hover:drop-shadow-[0_0_15px_rgba(192,132,252,.3)] transition-all">
                <AnimatedNumber value={6} />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold">
                Certifications
              </p>
            </div>

            <div className="group py-9 md:py-11 md:border-r border-white/10 text-center hover:bg-white/[0.025] transition-all duration-300">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-300 group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,.3)] transition-all">
                <AnimatedNumber value={6.84} />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold">
                CGPA
              </p>
            </div>

            <div className="group py-9 md:py-11 text-center hover:bg-white/[0.025] transition-all duration-300">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_15px_rgba(129,140,248,.3)] transition-all">
                2025
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold">
                Graduate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* About                                                              */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
              01 / About
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              Curious about data.
              <span className="block text-slate-500">
                Serious about what it reveals.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-slate-400 leading-relaxed text-base md:text-lg">
            <p>
              I&apos;m a Computer Science &amp; Engineering graduate from
              <ReferenceLink
                term="Chandigarh University"
                className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
              />{" "}
              with a strong interest in{" "}
              <span className="font-semibold text-white">
                data analytics, visualization and practical technology.
              </span>
            </p>

            <p>
              I enjoy taking messy datasets and turning them into structured
              information: cleaning the data, exploring relationships,
              identifying patterns, creating visualizations and communicating
              the results clearly.
            </p>

            <p>
              My interest in frontend development complements my analytics work.
              It lets me think beyond the analysis itself and focus on how
              information is actually experienced by the person using it.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="group rounded-2xl bg-white/[0.035] backdrop-blur-xl border border-white/10 p-5 shadow-xl hover:bg-white/[0.065] hover:border-indigo-400/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(99,102,241,.12)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all">
                  <Database className="text-indigo-300" size={21} />
                </div>

                <h3 className="font-semibold text-white mt-4">Data first</h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Clean data, thoughtful analysis and evidence-driven
                  conclusions.
                </p>
              </div>

              <div className="group rounded-2xl bg-white/[0.035] backdrop-blur-xl border border-white/10 p-5 shadow-xl hover:bg-white/[0.065] hover:border-purple-400/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(168,85,247,.12)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-105 transition-all">
                  <Layers3 className="text-purple-300" size={21} />
                </div>

                <h3 className="font-semibold text-white mt-4">
                  Experience matters
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Clear interfaces and visual storytelling make analysis more
                  useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Skills                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative bg-gradient-to-br from-[#050816] via-[#080b1d] to-[#10071d] text-white py-24 overflow-hidden border-y border-white/10">
        <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

        <div className="absolute bottom-[-250px] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
              02 / Expertise
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">
              The toolkit behind the work.
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              A combination of analytical thinking, visualization and frontend
              development.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 mt-12">
            <div className="space-y-2">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const active = activeSkill === index;

                return (
                  <button
                    key={skill.title}
                    type="button"
                    onClick={() => setActiveSkill(index)}
                    className={`group relative w-full text-left rounded-2xl px-5 py-5 border overflow-hidden transition-all duration-300 ${
                      active
                        ? "bg-indigo-500/[0.12] border-indigo-400/50 shadow-[0_0_35px_rgba(99,102,241,.12)] -translate-y-0.5"
                        : "bg-white/[0.025] border-white/10 hover:bg-white/[0.055] hover:border-white/20 hover:-translate-y-0.5"
                    }`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-400 to-purple-400 transition-opacity ${
                        active
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-60"
                      }`}
                    />

                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                          active
                            ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_0_25px_rgba(99,102,241,.3)]"
                            : "bg-white/10 text-slate-400 group-hover:bg-white/15 group-hover:text-white"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="flex-1">
                        <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                          {skill.eyebrow}
                        </div>

                        <div className="font-semibold text-white mt-1">
                          {skill.title}
                        </div>
                      </div>

                      <ArrowRight
                        size={16}
                        className={`transition-all ${
                          active
                            ? "text-indigo-300 translate-x-1"
                            : "text-slate-600 group-hover:text-slate-300 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="group relative min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.045] backdrop-blur-xl p-8 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,.25)] hover:border-indigo-400/25 transition-all duration-500">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-500/15 blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />

              <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />

              {(() => {
                const skill = skills[activeSkill];
                const Icon = skill.icon;

                return (
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,.12)]">
                        <Icon size={25} className="text-indigo-300" />
                      </div>

                      <span className="font-mono text-xs text-slate-600">
                        0{activeSkill + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-3xl font-bold text-white">
                      {skill.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-8">
                      {skill.tools.map((tool) => (
                        <ReferenceLink
                          key={tool}
                          term={tool}
                          className="inline-flex px-3.5 py-2 rounded-lg bg-white/[0.06] border border-white/10 text-sm text-slate-300 hover:bg-indigo-500/10 hover:border-indigo-400/30 hover:text-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Other projects                                                     */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative bg-[#050816]/80 border-y border-white/10 py-24">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              03 / Selected Projects
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
              My Projects.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {projects
              .filter(() => true)
              .map((project) => {
                const content = (
                  <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-7 md:p-8 hover:bg-white/[0.065] hover:border-indigo-400/30 hover:shadow-[0_25px_70px_rgba(99,102,241,.12)] hover:-translate-y-2 transition-all duration-400 overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-indigo-500/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-xs text-slate-600 group-hover:text-indigo-400 transition-colors">
                          {project.number}
                        </span>

                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} project`}
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
                          >
                            <ExternalLink
                              size={16}
                              className="text-slate-500 group-hover:text-indigo-400 group-hover:scale-110 transition-all"
                            />
                          </a>
                        ) : (
                          <ArrowRight
                            size={16}
                            className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all"
                          />
                        )}
                      </div>

                      <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-400">
                        {project.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                        {project.description}
                      </p>

                      {project.highlights && (
                        <ul className="mt-4 space-y-2.5 text-sm text-slate-400 leading-relaxed list-disc list-outside ml-4">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      )}

                      <div className="grid grid-cols-3 gap-3 mt-7">
                        {project.stats.map(([value, label]) => (
                          <div key={label}>
                            <p className="text-lg font-bold text-white">
                              {value}
                            </p>

                            <p className="text-[10px] uppercase tracking-wider text-slate-600 mt-1">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-7">
                        {project.technologies.map((technology) => (
                          <ReferenceLink
                            key={technology}
                            term={technology}
                            className="inline-flex px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-medium text-slate-400 hover:border-indigo-400/30 hover:text-indigo-200 transition-all"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );

                if (!project.href) {
                  return <div key={project.title}>{content}</div>;
                }

                return (
                  <div
                    key={project.title}
                    role="link"
                    tabIndex={0}
                    aria-label={`Open ${project.title} project`}
                    className="cursor-pointer"
                    onClick={(event) => {
                      const target = event.target as HTMLElement;

                      if (target.closest("a")) {
                        return;
                      }

                      window.open(
                        project.href,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                    onKeyDown={(event) => {
                      if (event.target !== event.currentTarget) {
                        return;
                      }

                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        window.open(
                          project.href,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }
                    }}
                  >
                    {content}
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Education                                                          */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="absolute left-[-100px] top-20 w-72 h-72 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
              04 / Education
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
              Academic foundation.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 via-purple-400 to-transparent shadow-[0_0_15px_rgba(99,102,241,.4)]" />

            <div className="relative pl-14 group">
              <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-400/40 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(99,102,241,.2)] transition-all duration-300">
                <GraduationCap size={19} className="text-indigo-300" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-400">
                2021 — 2025
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                <ReferenceLink
                  term="Chandigarh University"
                  className="hover:text-indigo-200 transition-colors"
                />
              </h3>

              <p className="mt-2 text-slate-400">
                B.E. in Computer Science &amp; Engineering
              </p>

              <div className="inline-flex items-center gap-3 mt-6 px-4 py-3 rounded-xl bg-white/[0.035] backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/[0.065] hover:border-indigo-400/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(99,102,241,.1)] transition-all duration-300">
                <span className="text-sm text-slate-500">
                  Academic performance
                </span>

                <span className="h-5 w-px bg-white/10" />

                <span className="font-bold text-white">6.84 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Certifications                                                     */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative bg-gradient-to-br from-[#050816] via-[#080b1d] to-[#10071d] text-white py-24 overflow-hidden border-y border-white/10">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
              05 / Certifications
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">
              Learning doesn&apos;t stop at graduation.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {certifications.map((cert, index) => (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:bg-white/[0.075] hover:border-indigo-400/35 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(99,102,241,.12)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/40 group-hover:scale-105 transition-all duration-300">
                    <CheckCircle2 size={18} className="text-indigo-300" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-slate-600 group-hover:text-indigo-400 transition-colors">
                      CERT 0{index + 1}
                    </span>

                    <h3 className="mt-1 text-base font-semibold leading-snug text-white group-hover:text-indigo-200 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {cert.provider === "Udemy" ? (
                        <span>Udemy</span>
                      ) : cert.provider === "IBM · Coursera" ? (
                        <>
                          <span>IBM</span>
                          {" · "}
                          <span>Coursera</span>
                        </>
                      ) : cert.provider === "Infosys Springboard" ? (
                        <span>Infosys Springboard</span>
                      ) : cert.provider ===
                        "University of California, Davis · Coursera" ? (
                        <>
                          University of California, Davis ·{" "}
                          <span>Coursera</span>
                        </>
                      ) : (
                        cert.provider
                      )}{" "}
                      · {cert.date}
                    </p>
                  </div>

                  <ExternalLink
                    size={15}
                    className="text-slate-600 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Contact                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-slate-950 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-[100px] animate-pulse" />

          <div className="absolute -bottom-40 right-10 w-96 h-96 rounded-full bg-indigo-400/20 blur-[100px]" />

          <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-purple-400/10 blur-[120px]" />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
            06 / Let&apos;s Connect
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-black tracking-[-0.04em]">
            Let&apos;s build
            <span className="block text-indigo-200 drop-shadow-[0_0_25px_rgba(165,180,252,.2)]">
              something meaningful.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-7 text-base md:text-lg text-indigo-100/70 leading-relaxed">
            Interested in data analytics, visualization, dashboards or
            technology? I&apos;d be happy to connect and explore what we can
            build together.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <a
              href="mailto:tushar2003oct30@gmail.com"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,.2)] active:translate-y-0 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <Mail size={16} className="relative" />

              <span className="relative">Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/tusharpandey30/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,.1)] active:translate-y-0 transition-all duration-300"
            >
              <LinkedInIcon size={16} />
              LinkedIn
              <ArrowRight
                size={14}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>

            <a
              href="https://github.com/tusharpandey9991"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,.1)] active:translate-y-0 transition-all duration-300"
            >
              <GithubIcon size={17} />
              GitHub
              <ArrowRight
                size={14}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors">
              <MousePointer2 size={13} />
              Designed with data, code and curiosity.
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Local animations                                                    */}
      {/* ------------------------------------------------------------------ */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

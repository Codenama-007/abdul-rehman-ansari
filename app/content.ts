/**
 * Single source of truth for portfolio copy.
 * TODO(owner): fill in the `href` values in `socials` and the project links.
 * Anything with an empty `href` is hidden from the UI rather than linked to a
 * broken or invented URL.
 */

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Abdul Rehman Ansari",
  shortName: "Abdul Rehman",
  role: "Full-stack web developer",
  era: "Beyond Time",
  headline: "I build fast, accessible products for the web.",
  intro:
    "I work across the stack with Next.js, React, Node.js, and Python. From real-time chat interfaces to video platforms and social feeds, I like turning an idea into something people can actually click through.",
  about: [
    "I'm Abdul Rehman Ansari, a web developer focused on full-stack JavaScript and Python. My day-to-day tools are Next.js and React on the front end, with Node.js, MongoDB, and FastAPI behind them.",
    "Most of what I've learned has come from rebuilding products I use every day — a ChatGPT-style assistant, a video platform, and social apps — then refining the details that make them feel real: responsive layouts, sensible state, and clean APIs.",
  ],
  focus: [
    { label: "Focus", value: "Full-stack web applications" },
    { label: "Front end", value: "Next.js, React, HTML, CSS, JavaScript" },
    { label: "Back end", value: "Node.js, FastAPI, Python, MongoDB" },
    { label: "Projects", value: "Four product clones, built end to end" },
  ],
  principles: [
    "Responsive by default",
    "Accessible markup",
    "Clean, typed components",
    "APIs built to be consumed",
  ],
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, layout, and interaction.",
    skills: ["Next.js", "React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs, services, and server logic.",
    skills: ["Node.js", "FastAPI", "Python", "REST APIs"],
  },
  {
    title: "Data & tooling",
    description: "Storage, queries, and the workflow around it.",
    skills: ["MongoDB", "Git", "pnpm"],
  },
];

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  /** Live demo URL, or null until the owner supplies one. */
  href: string | null;
  /** Repository URL, or null until the owner supplies one. */
  repo: string | null;
};

export const projects: Project[] = [
  {
    name: "ChatGPT Clone",
    summary:
      "A conversational assistant interface with a Next.js client and a FastAPI backend for model calls and chat state.",
    stack: ["Next.js", "FastAPI", "Python"],
    href: null,
    repo: null,
  },
  {
    name: "YouTube Clone",
    summary:
      "A video platform with browsing, playback, and channel pages, backed by a Node.js API and MongoDB.",
    stack: ["React", "Node.js", "MongoDB"],
    href: null,
    repo: null,
  },
  {
    name: "Instagram Clone",
    summary:
      "A photo-sharing app with feeds, profiles, and interactions, built on a React front end and a Node.js API.",
    stack: ["React", "Node.js", "MongoDB"],
    href: null,
    repo: null,
  },
  {
    name: "Twitter Clone",
    summary:
      "A social feed with posts, likes, and profiles, using Next.js on the client and Node.js with MongoDB on the server.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    href: null,
    repo: null,
  },
];

export type SocialIcon = "github" | "linkedin" | "mail";

export type Social = {
  label: string;
  href: string;
  icon: SocialIcon;
};

/**
 * TODO(owner): add the real URLs. Empty `href` entries are filtered out of the
 * contact section, so nothing renders as a dead link.
 */
export const socials: Social[] = [
  { label: "GitHub", href: "", icon: "github" },
  { label: "LinkedIn", href: "", icon: "linkedin" },
  { label: "Email", href: "", icon: "mail" },
];

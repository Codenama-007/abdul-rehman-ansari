import { projects, type Project } from "@/app/content";
import { SectionHeading } from "@/app/components/section-heading";

const accents = [
  "from-[#e8a33d]/25",
  "from-[#5b8cff]/25",
  "from-[#e05c8a]/25",
  "from-[#3ecf8e]/25",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const links = [
    project.href ? { label: "Live site", href: project.href } : null,
    project.repo ? { label: "Source", href: project.repo } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-colors hover:border-line/0 hover:bg-surface">
      <div
        className={`relative flex h-32 items-end bg-gradient-to-br ${accents[index % accents.length]} to-transparent p-4 sm:h-36`}
      >
        <span
          aria-hidden="true"
          className="font-mono text-3xl font-semibold tracking-tight text-foreground/25"
        >
          {initials(project.name)}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-line/80 bg-background/50 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-background/60 px-2 py-1 font-mono text-[0.7rem] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-line/70 pt-4">
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted">
              Links coming soon — ask the owner for the repo or demo URL.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Products rebuilt end to end."
          description="Each one started as a familiar interface and became an exercise in state, APIs, and layout that holds up on a phone."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

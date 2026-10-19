import { projects, type Project } from "@/app/content";
import { ArrowUpRightIcon } from "@/app/components/icons";
import { TribalPanel } from "@/app/components/patterns";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;
  const links = [
    project.href ? { label: "Live site", href: project.href } : null,
    project.repo ? { label: "Source", href: project.repo } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : undefined}>
        <div className="overflow-hidden rounded-xl border border-line shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
          <div className="aspect-[4/3]">
            <TribalPanel
              variant={index}
              label={`Decorative tribal geometry for ${project.name}`}
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className={flip ? "lg:order-1" : undefined}>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            {String(index + 1).padStart(2, "0")} / {project.name}
          </p>

          <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
            {project.name}
          </h3>

          <p className="mt-3 max-w-[72ch] text-base leading-relaxed text-muted">
            {project.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-xl border border-line bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground/90"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            {links.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border-[1.5px] border-line-strong px-4 text-sm font-semibold text-sand transition-[transform,background-color,border-color] duration-200 hover:scale-[1.03] hover:border-secondary hover:bg-secondary/10"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="inline-flex items-center gap-2 rounded-xl border border-dashed border-line px-4 py-2.5 font-mono text-xs text-muted">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-terracotta"
                />
                Links pending — add them in app/content.ts
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-y scroll-mt-20 border-t border-line"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Products rebuilt end to end."
            description="Each one started as a familiar interface and became an exercise in state, APIs, and layout that holds up on a phone."
          />
        </Reveal>

        <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

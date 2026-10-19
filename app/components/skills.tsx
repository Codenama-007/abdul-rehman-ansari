import { skillGroups } from "@/app/content";
import { SectionHeading } from "@/app/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I reach for."
          description="A working set, not a checklist — each of these shows up in at least one of the projects below."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-line bg-surface/60 p-5 sm:p-6"
            >
              <h3 className="text-base font-semibold">{group.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">
                {group.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line/80 px-3 py-1.5 text-xs text-foreground/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

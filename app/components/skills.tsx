import { skillGroups } from "@/app/content";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";

/**
 * Asymmetric 12-column kente grid: 5 / 4 / 3 spans at `lg`.
 * Deliberately not three equal columns.
 */
const groupSpans = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
];

const groupAccents = [
  "from-primary/25",
  "from-teal/40",
  "from-terracotta/30",
];

export function Skills() {
  return (
    <section id="skills" className="section-y scroll-mt-20 border-t border-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A working set, woven together."
            description="Each of these shows up in at least one of the projects below — no filler entries."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {skillGroups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={groupIndex * 120}
              className={`h-full md:col-span-1 ${groupSpans[groupIndex] ?? "lg:col-span-4"}`}
            >
              <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface/70 shadow-[0_2px_12px_rgba(0,0,0,0.45)] transition-[transform,box-shadow] duration-200 hover:scale-[1.03] hover:shadow-[0_14px_34px_rgba(0,0,0,0.55)]">
                <div
                  aria-hidden="true"
                  className={`h-1 w-full bg-gradient-to-r ${groupAccents[groupIndex] ?? "from-primary/25"} to-transparent`}
                />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {group.title}
                    </h3>
                    <span className="font-mono text-[0.7rem] text-muted">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {group.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <li
                        key={skill}
                        className="animate-rise rounded-xl border border-line bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground/90"
                        style={{ animationDelay: `${skillIndex * 120}ms` }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/app/content";
import { CheckIcon } from "@/app/components/icons";
import { WeaveMark } from "@/app/components/patterns";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";

export function About() {
  return (
    <section
      id="about"
      className="section-y scroll-mt-20 border-t border-line"
    >
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Ancestral pattern panel — the visual half of the zig-zag */}
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line bg-surface/70">
            <div
              aria-hidden="true"
              className="kente-grid absolute inset-0 opacity-70"
            />
            <div
              aria-hidden="true"
              className="tribal-edge absolute inset-x-0 top-0 h-8 opacity-60"
            />

            <div className="relative grid aspect-[4/3] place-items-center p-8">
              <WeaveMark className="h-28 w-28 text-secondary/70" />
              <div
                aria-hidden="true"
                className="absolute inset-10 rounded-full border border-dashed border-line-strong"
              />
            </div>

            <p className="relative border-t border-line bg-background/60 px-5 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              Ancestral geometry · advanced interfaces
            </p>
          </div>
        </Reveal>

        {/* Copy half */}
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Rooted in craft, building for what comes next."
            />
          </Reveal>

          <div className="mt-6 space-y-4">
            {profile.about.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 120}>
                <p className="max-w-[72ch] text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.principles.map((principle, index) => (
              <Reveal key={principle} delay={index * 120}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-line bg-surface/60 px-4 py-3.5 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-6">{principle}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

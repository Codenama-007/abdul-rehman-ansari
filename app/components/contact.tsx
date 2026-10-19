import { socials } from "@/app/content";
import { ArrowUpRightIcon, socialIcons } from "@/app/components/icons";
import { WeaveMark } from "@/app/components/patterns";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";

export function Contact() {
  const available = socials.filter((social) => social.href.length > 0);

  return (
    <section
      id="contact"
      className="section-y scroll-mt-20 border-t border-line"
    >
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line bg-surface/80 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="tribal-edge absolute inset-x-0 top-0 h-6 opacity-50"
            />

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something worth using."
                description="I'm open to freelance work and full-time roles. Tell me what you're building and what you need from the stack."
              />

              <div>
                {available.length > 0 ? (
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                    {available.map((social) => {
                      const Icon = socialIcons[social.icon];
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-[1.5px] border-line-strong px-5 text-sm font-semibold text-sand transition-[transform,background-color,border-color] duration-200 hover:scale-[1.03] hover:border-secondary hover:bg-secondary/10"
                        >
                          <Icon className="h-4 w-4" />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  /* Empty state: icon + descriptive text + action */
                  <div className="rounded-xl border border-dashed border-line bg-background/40 p-6 text-center lg:text-left">
                    <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/25 text-amber lg:mx-0">
                      <WeaveMark className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-base font-semibold text-foreground">
                      Contact links pending
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-muted">
                      Add GitHub, LinkedIn and email URLs in{" "}
                      <code className="font-mono text-xs text-secondary">
                        app/content.ts
                      </code>{" "}
                      and they will appear here.
                    </p>
                    <a
                      href="#projects"
                      className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border-[1.5px] border-line-strong px-4 text-sm font-semibold text-sand transition-[transform,background-color,border-color] duration-200 hover:scale-[1.03] hover:border-secondary hover:bg-secondary/10"
                    >
                      See the work
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

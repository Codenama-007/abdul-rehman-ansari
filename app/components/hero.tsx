import { profile } from "@/app/content";
import { HoloMask } from "@/app/components/patterns";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container-page grid items-center gap-12 py-[clamp(3rem,7vw,6rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:min-h-[calc(100dvh-4rem)]">
        {/* Text column */}
        <div>
          <p
            className="animate-rise font-mono text-xs uppercase tracking-[0.3em] text-secondary"
            style={{ animationDelay: "0ms" }}
          >
            Portfolio / {profile.era}
          </p>

          <h1
            className="animate-rise mt-5 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-balance"
            style={{ animationDelay: "120ms" }}
          >
            Hi, I&apos;m {profile.shortName}.{" "}
            <span className="bg-gradient-to-r from-secondary via-amber to-terracotta bg-clip-text text-transparent">
              {profile.role}.
            </span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-[72ch] text-base leading-relaxed text-muted"
            style={{ animationDelay: "240ms" }}
          >
            {profile.intro}
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-amber transition-[transform,background-color,box-shadow] duration-200 hover:scale-[1.03] hover:bg-primary-deep hover:shadow-[0_10px_30px_rgba(106,13,173,0.45)] active:translate-y-px"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-[1.5px] border-line-strong px-6 text-sm font-semibold text-sand transition-[transform,background-color,border-color] duration-200 hover:scale-[1.03] hover:border-secondary hover:bg-secondary/10"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Visual column */}
        <div
          className="animate-rise relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          style={{ animationDelay: "240ms" }}
        >
          <div className="relative aspect-square">
            <div
              className="animate-orbit absolute inset-0"
              style={{ animationDuration: "110s" }}
            >
              <HoloMask />
            </div>
            <div className="animate-rhythm absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(255,191,0,0.22),transparent_65%)]" />
          </div>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line/60 sm:grid-cols-2">
            {profile.focus.map((item) => (
              <div key={item.label} className="bg-surface/90 px-4 py-3.5">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-secondary">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-foreground/90">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

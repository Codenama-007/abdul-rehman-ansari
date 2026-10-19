import { profile } from "@/app/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(232,163,61,0.16),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              Available for work
            </p>

            <h1 className="mt-6 text-[clamp(2rem,8vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-balance">
              Hi, I&apos;m {profile.shortName}.{" "}
              <span className="text-accent">{profile.role}.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-background transition-colors hover:bg-[#f0b558]"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold transition-colors hover:bg-surface"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-xs text-muted">
                  stack.ts
                </span>
              </div>

              <dl className="mt-5 space-y-3">
                {profile.focus.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 border-t border-line/70 pt-3 first:border-0 first:pt-0 sm:grid-cols-[5.5rem_1fr] sm:gap-3"
                  >
                    <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-6 text-muted">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

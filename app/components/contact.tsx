import { socials, type SocialIcon } from "@/app/content";
import { SectionHeading } from "@/app/components/section-heading";

const icons: Record<SocialIcon, React.ReactNode> = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.1 10.1 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.19 1.45-2.19 2.96V21h-4V9Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
};

export function Contact() {
  const available = socials.filter((social) => social.href.length > 0);

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something worth using."
              description="I'm open to freelance work and full-time roles. The quickest way to reach me is email — tell me what you're building and what you need."
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              {available.length > 0 ? (
                available.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-5 text-sm font-semibold transition-colors hover:bg-background"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      {icons[social.icon]}
                    </svg>
                    {social.label}
                  </a>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-line px-5 py-4 text-sm leading-6 text-muted">
                  <p className="font-medium text-foreground">
                    Contact links pending
                  </p>
                  <p className="mt-1">
                    Add GitHub, LinkedIn, and email URLs in{" "}
                    <code className="font-mono text-xs text-accent">
                      app/content.ts
                    </code>{" "}
                    and they will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

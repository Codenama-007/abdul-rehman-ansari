import { profile } from "@/app/content";
import { SectionHeading } from "@/app/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="About"
            title="Comfortable across the stack, careful about the details."
          />

          <div className="space-y-4">
            {profile.about.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-sm leading-7 text-muted sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Responsive by default",
                "Accessible markup",
                "Clean, typed components",
                "APIs built to be consumed",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-line/70 bg-surface/60 px-4 py-3 text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

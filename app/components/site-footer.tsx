import { profile } from "@/app/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center text-xs text-muted sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and
          Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center rounded-lg px-2 transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

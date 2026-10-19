import { profile } from "@/app/content";
import { ArrowUpIcon } from "@/app/components/icons";
import { WeaveMark } from "@/app/components/patterns";

// Cache Components rejects `new Date()` during prerender, so resolve the year
// once at module load (build time) instead of during render.
const buildYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-line text-secondary">
            <WeaveMark className="h-4 w-4" />
          </span>
          <p className="font-mono text-xs leading-6 text-muted">
            © {buildYear} {profile.name}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Next.js &amp; Tailwind CSS
          </p>
        </div>

        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-200 hover:text-secondary"
        >
          Back to top
          <ArrowUpIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}

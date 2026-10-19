"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/app/content";
import { CloseIcon, MenuIcon } from "@/app/components/icons";
import { WeaveMark } from "@/app/components/patterns";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Scroll spy: the section crossing the middle of the viewport owns the indicator.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 rounded-xl"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-violet text-amber">
            <WeaveMark className="h-4 w-4" />
          </span>
          <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
            <span className="sm:hidden">{profile.shortName}</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-xl px-3.5 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-secondary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-secondary transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line-strong text-foreground transition-colors duration-200 hover:bg-surface md:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="container-page flex flex-col py-2"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center rounded-xl px-3 text-base transition-colors duration-200 hover:bg-surface ${
                    isActive ? "font-medium text-secondary" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

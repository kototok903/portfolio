"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeftIcon } from "lucide-react";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  pathname: string;
};

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

export default function Header({ pathname }: HeaderProps) {
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState(
    isHome ? navItems[0]?.id : "",
  );

  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const anchorY = Math.min(window.innerHeight * 0.4, 360);
      const active = sections.find((section, index) => {
        const rect = section.getBoundingClientRect();
        const next = sections[index + 1]?.getBoundingClientRect();

        return rect.top <= anchorY && (!next || next.top > anchorY);
      });

      setActiveSection(active?.id ?? sections[0]?.id ?? "");
    };

    let scheduled = false;
    const scheduleUpdate = () => {
      if (scheduled) return;

      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        updateActiveSection();
      });
    };

    updateActiveSection();
    document.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      document.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [isHome]);

  const currentByPath = useMemo(
    () =>
      new Set(
        navItems
          .filter(item => item.subItems?.some(sub => sub.href === pathname))
          .map(item => item.id),
      ),
    [pathname],
  );

  const isActive = (id: string) =>
    isHome ? activeSection === id : currentByPath.has(id);

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 hidden border-b backdrop-blur-md sm:block">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2 sm:px-10"
        aria-label="Main navigation"
      >
        {!isHome ? (
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-muted-foreground"
            asChild
          >
            <a href="/" aria-label="Back home">
              <ArrowLeftIcon aria-hidden />
            </a>
          </Button>
        ) : (
          <div className="size-8" />
        )}

        <ul className="flex items-center gap-7 font-mono text-[13px]">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={sectionHref(item.id, isHome)}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors",
                  isActive(item.id) && "text-foreground",
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div />
      </nav>
    </header>
  );
}

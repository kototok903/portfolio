"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"

import { navItems } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type HeaderProps = {
  pathname: string
}

const themeColors = {
  light: "#ebebeb",
  dark: "#1c2433",
} as const

type Theme = keyof typeof themeColors

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`
}

function updateThemeColor(theme: Theme) {
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute("content", themeColors[theme])
}

export default function Header({ pathname }: HeaderProps) {
  const isHome = pathname === "/"
  const [activeSection, setActiveSection] = useState(
    isHome ? navItems[0]?.id : ""
  )

  useEffect(() => {
    if (!isHome) return

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const updateActiveSection = () => {
      const anchorY = Math.min(window.innerHeight * 0.4, 360)
      const active = sections.find((section, index) => {
        const rect = section.getBoundingClientRect()
        const next = sections[index + 1]?.getBoundingClientRect()

        return rect.top <= anchorY && (!next || next.top > anchorY)
      })

      setActiveSection(active?.id ?? sections[0]?.id ?? "")
    }

    let scheduled = false
    const scheduleUpdate = () => {
      if (scheduled) return

      scheduled = true
      requestAnimationFrame(() => {
        scheduled = false
        updateActiveSection()
      })
    }

    updateActiveSection()
    document.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    window.addEventListener("hashchange", scheduleUpdate)

    return () => {
      document.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      window.removeEventListener("hashchange", scheduleUpdate)
    }
  }, [isHome])

  const currentByPath = useMemo(
    () =>
      new Set(
        navItems
          .filter((item) =>
            item.subItems?.some((subItem) => subItem.href === pathname)
          )
          .map((item) => item.id)
      ),
    [pathname]
  )

  const isActive = (id: string) =>
    isHome ? activeSection === id : currentByPath.has(id)

  const toggleTheme = () => {
    const root = document.documentElement
    const nextTheme: Theme = root.classList.contains("dark") ? "light" : "dark"

    root.classList.toggle("dark", nextTheme === "dark")
    localStorage.setItem("theme", nextTheme)
    updateThemeColor(nextTheme)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 sm:px-3">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between bg-background/75 p-3 shadow-lg backdrop-blur-sm sm:mt-6 sm:rounded-lg"
        aria-label="Main navigation"
      >
        <div className="flex w-9 justify-start">
          {isHome ? (
            <div className="size-9" aria-hidden />
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
              asChild
            >
              <a href="/" aria-label="Back home">
                <ArrowLeftIcon aria-hidden />
              </a>
            </Button>
          )}
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-1 text-base sm:gap-x-4">
          {navItems.map((item) => (
            <li className="relative" key={item.id}>
              {item.subItems ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "group text-base font-normal text-muted-foreground",
                        isActive(item.id) && "bg-accent text-foreground"
                      )}
                    >
                      {item.name}
                      <ChevronDownIcon
                        className="transition-transform group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <a href={sectionHref(item.id, isHome)}>
                          {isHome && <ArrowDownIcon aria-hidden />}
                          {item.name}
                        </a>
                      </DropdownMenuItem>
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.href}
                          className={cn(
                            pathname === subItem.href &&
                              "bg-accent text-foreground"
                          )}
                          asChild
                        >
                          <a href={subItem.href}>{subItem.name}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  variant="ghost"
                  className={cn(
                    "text-base font-normal text-muted-foreground",
                    isActive(item.id) && "bg-accent text-foreground"
                  )}
                  asChild
                >
                  <a href={sectionHref(item.id, isHome)}>{item.name}</a>
                </Button>
              )}
            </li>
          ))}
        </ul>

        <div className="flex w-9 justify-end">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <SunIcon className="dark:hidden" aria-hidden />
            <MoonIcon className="hidden dark:block" aria-hidden />
          </Button>
        </div>
      </nav>
    </header>
  )
}

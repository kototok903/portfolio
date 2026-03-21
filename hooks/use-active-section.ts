"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { navItems } from "@/lib/data"

const sectionIds = navItems.map((item) => item.id)

// Maps sub-page paths to their parent nav item id
// e.g. "/resume" → "intro", "/projects" → "projects"
const subPageToSection = new Map(
  navItems.flatMap((item) =>
    (item.subItems ?? []).map((sub) => [sub.href, item.id] as const)
  )
)

export function useActiveSection() {
  const pathname = usePathname()
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(subPageToSection.get(pathname) ?? null)
      return
    }

    const observers: IntersectionObserver[] = []
    const visibleSections = new Map<string, number>()

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio)
          } else {
            visibleSections.delete(id)
          }

          // Pick the section with the highest visibility
          let best: string | null = null
          let bestRatio = 0
          for (const [sId, ratio] of visibleSections) {
            if (ratio > bestRatio) {
              best = sId
              bestRatio = ratio
            }
          }
          setActiveId(best)
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-80px 0px 0px 0px" }
      )

      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  return activeId
}

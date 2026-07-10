
export type NavSubItem = {
  name: string
  href: string
}

export type NavItem = {
  name: string
  id: string
  href?: string
  subItems?: NavSubItem[]
}

export const navItems: readonly NavItem[] = [
  { name: "work", id: "work" },
  { name: "projects", id: "projects" },
  { name: "skills", id: "skills" },
  { name: "contact", id: "contact" },
]

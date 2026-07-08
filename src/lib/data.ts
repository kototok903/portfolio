
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
  {
    name: "About",
    id: "intro",
    subItems: [
      { name: "Resume", href: "/resume" },
    ],
  },
  {
    name: "Projects",
    id: "projects",
    subItems: [
      { name: "All Projects", href: "/projects" },
    ],
  },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact-form" },
]

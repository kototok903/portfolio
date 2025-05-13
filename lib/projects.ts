import codegram from '@/public/images/projects/codegram-screenshot.png'
import { StaticImageData } from 'next/image'

export type ProjectData = {
  title: string
  description: string
  tags?: string[]
  imageUrl?: StaticImageData
  githubUrl?: string
  link?: string
}

export const projectsData: ProjectData[] = [
  {
    title: "Codegram",
    description:
      "All-in-one schedule management solution. Automatically schedule your week with AI using preferences, event, and task data. Create group calendars to automatically find availability.",
    tags: [
      "react",
      "typescript",
      "next-js",
      "tailwind-css",
      "shadcn-ui",
      "webrtc",
      "express-js",
      "monaco-editor",
    ],
    imageUrl: codegram,
    githubUrl: "https://github.com/Bardemic/Codegram",
    link: undefined,
  },
]
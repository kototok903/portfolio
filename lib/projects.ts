import codegram from '@/public/images/projects/codegram-screenshot.png'
import { StaticImageData } from 'next/image'

export type ProjectData = {
  title: string
  description: string
  tags?: string[]
  image?: StaticImageData
  githubUrl?: string
  link?: string
}

export const projectsData: ProjectData[] = [
  {
    title: "Codegram",
    description:
      "Codegram is an online tutoring platform that is capable of matching students in need of programming assistance with experts in the related field. They share a synchronized code editor with webcam, audio, and programming language support functionality to enhance the virtual tutoring experience.",
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
    image: codegram,
    githubUrl: "https://github.com/Bardemic/Codegram",
    link: undefined,
  },
]
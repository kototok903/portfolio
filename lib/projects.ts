import { StaticImageData } from 'next/image'
import codegramImg from '@/public/images/projects/codegram-screenshot.png'
import closeticsImg from '@/public/images/projects/closetics-screenshot-combo2.png'
import realSortImg from '@/public/images/projects/real-sort-screenshot.png'
import simpleEditImg from '@/public/images/projects/simple-edit-screenshot.png'
import sokobanImg from '@/public/images/projects/sokoban-screenshot.png'

export type ProjectData = {
  title: string
  description: string
  tags?: string[]
  image?: StaticImageData
  githubUrl?: string
  link?: string
  linkText?: string
}

export const projectsData: ProjectData[] = [
  {
    title: "Codegram",
    description:
      "Codegram is an online tutoring platform that is capable of matching students in need of programming assistance with experts in the related field. They share a synchronized code editor with webcam, audio, and programming language support functionality to enhance the virtual tutoring experience.",
    tags: [
      "typescript",
      "react",
      "next-js",
      "tailwind-css",
      "shadcn-ui",
      "express-js",
      "websocket",
      "webrtc",
      "monaco-editor",
    ],
    image: codegramImg,
    githubUrl: "https://github.com/Bardemic/Codegram",
    link: undefined,
    linkText: undefined,
  },
  {
    title: "Closetics",
    description:
      "Closetics is a unique Android app that blends clothes wearing statistics with social media. Designed for fashion enthusiasts, it helps you track your clothing habits, discover outfit trends, and share your style with a community of like-minded users.",
    tags: [
      "java",
      "android-studio",
      "spring-boot",
      "mysql",
      "websocket",
      "stripe",
    ],
    image: closeticsImg,
    githubUrl: "https://github.com/Niall-Sharma/Closetics",
    link: undefined,
    linkText: undefined,
  },
  {
    title: "Real Sort",
    description:
      "Real Sort is a program for Sorting Algorithm Visualization written in Java. It features:<br>&ensp;• 10+ sorting algorithms with different variations<br>&ensp;• Convenient playback controls<br>&ensp;• Multiple color themes",
    tags: [
      "java",
      "java-swing",
    ],
    image: realSortImg,
    githubUrl: "https://github.com/kototok903/real-sort",
    link: undefined,
    linkText: undefined,
  },
  {
    title: "Simple Edit",
    description:
      "Simple Edit is a fast, lightweight image editor. Made for Windows using C# and .NET Framework. It has a variety of available features like blur and sharpening, different filters and color modes, autocorrection, and pixel sorting.",
    tags: [
      "csharp",
      "dotnet-framework",
    ],
    image: simpleEditImg,
    githubUrl: "https://github.com/kototok903/simple-edit",
    link: undefined,
    linkText: undefined,
  },
  {
    title: "Sokoban",
    description:
      "Sokoban is a challenging puzzle game where you need to push all the boxes to their designated spots. Made in Haskell using CodeWorld graphics library. Contains 6 levels with varying difficulty.",
    tags: [
      "haskell",
      "code-world",
    ],
    image: sokobanImg,
    githubUrl: "https://github.com/kototok903/sokoban",
    link: "https://code.world/run.html?mode=haskell&dhash=DlrZTBCzPf5fFB_FDuBgLXQ",
    linkText: "Play in browser",
  },
]
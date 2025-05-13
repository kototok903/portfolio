import { StaticImageData } from 'next/image'
import cIcon from '@/public/svgs/c.svg'
import gitIcon from '@/public/svgs/git.svg'
import githubIcon from '@/public/svgs/github.svg'
import javaIcon from '@/public/svgs/java.svg'
import jsIcon from '@/public/svgs/javascript.svg'
import htmlIcon from '@/public/svgs/html.svg'
import cssIcon from '@/public/svgs/css.svg'
import mysqlIcon from '@/public/svgs/mysql.svg'
import nextjsIcon from '@/public/svgs/next-js.svg'
import reactIcon from '@/public/svgs/react.svg'
import shadcnuiIcon from '@/public/svgs/shadcnui.svg'
import tsIcon from '@/public/svgs/typescript.svg'
import tailwindIcon from '@/public/svgs/tailwind-css.svg'
import pythonIcon from '@/public/svgs/python.svg'
import expressIcon from '@/public/svgs/express-original.svg'

export type TagData = {
  name: string
  icon?: StaticImageData
}

export const tagsData: { [tag: string]: TagData } = {
  "c": {
    name: "C",
    icon: cIcon
  },
  "cpp": {
    name: "C++",
    icon: cIcon
  },
  "git": {
    name: "Git",
    icon: gitIcon
  },
  "github": {
    name: "GitHub",
    icon: githubIcon
  },
  "next-js": {
    name: "Next.JS",
    icon: nextjsIcon
  },
  "java": {
    name: "Java",
    icon: javaIcon
  },
  "javascript": {
    name: "JavaScript",
    icon: jsIcon
  },
  "html": {
    name: "HTML",
    icon: htmlIcon
  },
  "css": {
    name: "CSS",
    icon: cssIcon
  },
  "typescript": {
    name: "TypeScript",
    icon: tsIcon
  },
  "react": {
    name: "React",
    icon: reactIcon
  },
  "python": {
    name: "Python",
    icon: pythonIcon
  },
  "mysql": {
    name: "MySQL",
    icon: mysqlIcon
  },
  "go": {
    name: "Go",
    icon: cIcon
  },
  "haskell": {
    name: "Haskell",
    icon: cIcon
  },
  "express-js": {
    name: "Express.js",
    icon: expressIcon
  },
  "webrtc": {
    name: "WebRTC",
    icon: cIcon
  },
  "websocket": {
    name: "WebSocket",
    icon: cIcon
  },
  "shadcn-ui": {
    name: "Shadcn/UI",
    icon: shadcnuiIcon
  },
  "tailwind-css": {
    name: "Tailwind CSS",
    icon: tailwindIcon
  },
}
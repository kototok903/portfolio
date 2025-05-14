import { StaticImageData } from 'next/image'
import cIcon from '@/public/svgs/c.svg'
import cppIcon from '@/public/svgs/cpp.svg'
import csharpIcon from '@/public/svgs/csharp.svg'
import gitIcon from '@/public/svgs/git.svg'
import githubIcon from '@/public/svgs/github.svg'
import javaIcon from '@/public/svgs/java.svg'
import jsIcon from '@/public/svgs/javascript.svg'
import htmlIcon from '@/public/svgs/html.svg'
import cssIcon from '@/public/svgs/css-new.svg'
import mysqlIcon from '@/public/svgs/mysql.svg'
import nextjsIcon from '@/public/svgs/next-js.svg'
import reactIcon from '@/public/svgs/react.svg'
import shadcnuiIcon from '@/public/svgs/shadcnui.svg'
import tsIcon from '@/public/svgs/typescript.svg'
import tailwindIcon from '@/public/svgs/tailwind-css.svg'
import pythonIcon from '@/public/svgs/python.svg'
import expressIcon from '@/public/svgs/express-original.svg'
import goIcon from '@/public/svgs/go.svg'
import haskellIcon from '@/public/svgs/haskell.svg'
import androidIcon from '@/public/svgs/android.svg'
import androidStudioIcon from '@/public/svgs/android-studio.svg'
import dotnetIcon from '@/public/svgs/dotnet.svg'
import microsoftIcon from '@/public/svgs/microsoft.svg'
import webrtcIcon from '@/public/svgs/webrtc.svg'
import websocketIcon from '@/public/svgs/websocket.svg'
import stripeIcon from '@/public/svgs/stripe.svg'
import springIcon from '@/public/svgs/spring.svg'
import springBootIcon from '@/public/svgs/spring-boot.svg'

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
    icon: cppIcon
  },
  "csharp": {
    name: "C#",
    icon: csharpIcon
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
  "java-swing": {
    name: "Java Swing",
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
    icon: goIcon
  },
  "haskell": {
    name: "Haskell",
    icon: haskellIcon
  },
  "code-world": {
    name: "CodeWorld",
    icon: haskellIcon
  },
  "express-js": {
    name: "Express.js",
    icon: expressIcon
  },
  "webrtc": {
    name: "WebRTC",
    icon: webrtcIcon
  },
  "websocket": {
    name: "WebSocket",
    icon: websocketIcon
  },
  "shadcn-ui": {
    name: "Shadcn/UI",
    icon: shadcnuiIcon
  },
  "tailwind-css": {
    name: "Tailwind CSS",
    icon: tailwindIcon
  },
  "android": {
    name: "Android",
    icon: androidIcon
  },
  "android-studio": {
    name: "Android Studio",
    icon: androidStudioIcon
  },
  "monaco-editor": {
    name: "Monaco Editor",
    icon: microsoftIcon
  },
  "dotnet-framework": {
    name: ".NET Framework",
    icon: dotnetIcon
  },
  "stripe": {
    name: "Stripe",
    icon: stripeIcon
  },
  "spring": {
    name: "Spring",
    icon: springIcon
  },
  "spring-boot": {
    name: "Spring Boot",
    icon: springBootIcon
  },
}
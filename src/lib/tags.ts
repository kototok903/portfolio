import cIcon from "@/assets/svgs/c.svg?url"
import cppIcon from "@/assets/svgs/cpp.svg?url"
import csharpIcon from "@/assets/svgs/csharp.svg?url"
import gitIcon from "@/assets/svgs/git.svg?url"
import githubIcon from "@/assets/svgs/github.svg?url"
import javaIcon from "@/assets/svgs/java.svg?url"
import jsIcon from "@/assets/svgs/javascript.svg?url"
import htmlIcon from "@/assets/svgs/html.svg?url"
import cssIcon from "@/assets/svgs/css-new.svg?url"
import mysqlIcon from "@/assets/svgs/mysql.svg?url"
import nextjsIcon from "@/assets/svgs/next-js.svg?url"
import reactIcon from "@/assets/svgs/react.svg?url"
import shadcnuiIcon from "@/assets/svgs/shadcnui.svg?url"
import tsIcon from "@/assets/svgs/typescript.svg?url"
import tailwindIcon from "@/assets/svgs/tailwind-css.svg?url"
import pythonIcon from "@/assets/svgs/python.svg?url"
import expressIcon from "@/assets/svgs/express-original.svg?url"
import goIcon from "@/assets/svgs/go.svg?url"
import haskellIcon from "@/assets/svgs/haskell.svg?url"
import androidIcon from "@/assets/svgs/android.svg?url"
import androidStudioIcon from "@/assets/svgs/android-studio.svg?url"
import dotnetIcon from "@/assets/svgs/dotnet.svg?url"
import microsoftIcon from "@/assets/svgs/microsoft.svg?url"
import webrtcIcon from "@/assets/svgs/webrtc.svg?url"
import websocketIcon from "@/assets/svgs/websocket.svg?url"
import stripeIcon from "@/assets/svgs/stripe.svg?url"
import springIcon from "@/assets/svgs/spring.svg?url"
import springBootIcon from "@/assets/svgs/spring-boot.svg?url"

export type TagData = {
  name: string
  icon?: string
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
  "rust": {
    name: "Rust",
  },
  "webassembly": {
    name: "WebAssembly",
  },
  "vite": {
    name: "Vite",
  },
  "canvas": {
    name: "Canvas",
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

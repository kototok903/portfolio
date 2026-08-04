import cIcon from "@/assets/svgs/c.svg?url";
import cppIcon from "@/assets/svgs/cpp.svg?url";
import csharpIcon from "@/assets/svgs/csharp.svg?url";
import gitIcon from "@/assets/svgs/git.svg?url";
import githubIcon from "@/assets/svgs/github.svg?url";
import javaIcon from "@/assets/svgs/java.svg?url";
import jsIcon from "@/assets/svgs/javascript.svg?url";
import htmlIcon from "@/assets/svgs/html.svg?url";
import cssIcon from "@/assets/svgs/css-new.svg?url";
import mysqlIcon from "@/assets/svgs/mysql.svg?url";
import nextjsIcon from "@/assets/svgs/next-js.svg?url";
import nodeIcon from "@/assets/svgs/node-js.svg?url";
import postgresIcon from "@/assets/svgs/postgresql.svg?url";
import reactIcon from "@/assets/svgs/react.svg?url";
import shadcnuiIcon from "@/assets/svgs/shadcnui.svg?url";
import tsIcon from "@/assets/svgs/typescript.svg?url";
import tailwindIcon from "@/assets/svgs/tailwind-css.svg?url";
import pythonIcon from "@/assets/svgs/python.svg?url";
import expressIcon from "@/assets/svgs/express-original.svg?url";
import goIcon from "@/assets/svgs/go.svg?url";
import haskellIcon from "@/assets/svgs/haskell.svg?url";
import androidIcon from "@/assets/svgs/android.svg?url";
import androidStudioIcon from "@/assets/svgs/android-studio.svg?url";
import anthropicIcon from "@/assets/svgs/anthropic.svg?url";
import dotnetIcon from "@/assets/svgs/dotnet.svg?url";
import epubIcon from "@/assets/svgs/epub.svg?url";
import geminiIcon from "@/assets/svgs/gemini.svg?url";
import microsoftIcon from "@/assets/svgs/microsoft.svg?url";
import openaiIcon from "@/assets/svgs/openai.svg?url";
import pdfJsIcon from "@/assets/svgs/pdf-js.svg?url";
import pdfLibIcon from "@/assets/svgs/pdf-lib.svg?url";
import webrtcIcon from "@/assets/svgs/webrtc.svg?url";
import websocketIcon from "@/assets/svgs/websocket.svg?url";
import stripeIcon from "@/assets/svgs/stripe.svg?url";
import springIcon from "@/assets/svgs/spring.svg?url";
import springBootIcon from "@/assets/svgs/spring-boot.svg?url";
import cockroachDbIcon from "@/assets/svgs/cockroachdb.svg?url";
import viteIcon from "@/assets/svgs/vite.svg?url";
import rustIcon from "@/assets/svgs/rust.svg?url";
import webassemblyIcon from "@/assets/svgs/webassembly.svg?url";
import bunIcon from "@/assets/svgs/bun.svg?url";
import clickhouseIcon from "@/assets/svgs/clickhouse.svg?url";
import temporalIcon from "@/assets/svgs/temporal.svg?url";
import eventsIcon from "@/assets/svgs/events.svg?url";
import redisIcon from "@/assets/svgs/redis.svg?url";
import awsS3Icon from "@/assets/svgs/aws-s3.svg?url";
import vercelIcon from "@/assets/svgs/vercel-light.svg?url";
import xmlIcon from "@/assets/svgs/xml.svg?url";
import zipIcon from "@/assets/svgs/zip.svg?url";

export const TAG_NAMES = [
  "c",
  "cpp",
  "csharp",
  "git",
  "github",
  "next-js",
  "java",
  "java-swing",
  "javascript",
  "html",
  "css",
  "typescript",
  "rust",
  "webassembly",
  "vite",
  "canvas",
  "react",
  "python",
  "mysql",
  "go",
  "haskell",
  "code-world",
  "express-js",
  "webrtc",
  "websocket",
  "shadcn-ui",
  "tailwind-css",
  "android",
  "android-studio",
  "monaco-editor",
  "dotnet-framework",
  "stripe",
  "spring",
  "spring-boot",
  "node",
  "postgres",
  "cockroachdb",
  "bun",
  "sse",
  "clickhouse",
  "temporal",
  "redis",
  "aws-s3",
  "pdf-js",
  "pdf-lib",
  "vercel-functions",
  "ai-sdk",
  "openai",
  "anthropic",
  "gemini",
  "indexeddb",
  "epub",
  "xml",
  "zip",
] as const;

export type TagName = (typeof TAG_NAMES)[number];

export type TagData = {
  name: string;
  icon?: string;
};

export const tagsData: Record<TagName, TagData> = {
  c: {
    name: "C",
    icon: cIcon,
  },
  cpp: {
    name: "C++",
    icon: cppIcon,
  },
  csharp: {
    name: "C#",
    icon: csharpIcon,
  },
  git: {
    name: "Git",
    icon: gitIcon,
  },
  github: {
    name: "GitHub",
    icon: githubIcon,
  },
  "next-js": {
    name: "Next.JS",
    icon: nextjsIcon,
  },
  java: {
    name: "Java",
    icon: javaIcon,
  },
  "java-swing": {
    name: "Java Swing",
    icon: javaIcon,
  },
  javascript: {
    name: "JavaScript",
    icon: jsIcon,
  },
  html: {
    name: "HTML",
    icon: htmlIcon,
  },
  css: {
    name: "CSS",
    icon: cssIcon,
  },
  typescript: {
    name: "TypeScript",
    icon: tsIcon,
  },
  rust: {
    name: "Rust",
    icon: rustIcon,
  },
  webassembly: {
    name: "WebAssembly",
    icon: webassemblyIcon,
  },
  vite: {
    name: "Vite",
    icon: viteIcon,
  },
  canvas: {
    name: "Canvas",
  },
  react: {
    name: "React",
    icon: reactIcon,
  },
  python: {
    name: "Python",
    icon: pythonIcon,
  },
  mysql: {
    name: "MySQL",
    icon: mysqlIcon,
  },
  go: {
    name: "Go",
    icon: goIcon,
  },
  haskell: {
    name: "Haskell",
    icon: haskellIcon,
  },
  "code-world": {
    name: "CodeWorld",
    icon: haskellIcon,
  },
  "express-js": {
    name: "Express.js",
    icon: expressIcon,
  },
  webrtc: {
    name: "WebRTC",
    icon: webrtcIcon,
  },
  websocket: {
    name: "WebSocket",
    icon: websocketIcon,
  },
  "shadcn-ui": {
    name: "Shadcn/UI",
    icon: shadcnuiIcon,
  },
  "tailwind-css": {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  android: {
    name: "Android",
    icon: androidIcon,
  },
  "android-studio": {
    name: "Android Studio",
    icon: androidStudioIcon,
  },
  "monaco-editor": {
    name: "Monaco Editor",
    icon: microsoftIcon,
  },
  "dotnet-framework": {
    name: ".NET Framework",
    icon: dotnetIcon,
  },
  stripe: {
    name: "Stripe",
    icon: stripeIcon,
  },
  spring: {
    name: "Spring",
    icon: springIcon,
  },
  "spring-boot": {
    name: "Spring Boot",
    icon: springBootIcon,
  },
  node: {
    name: "Node.js",
    icon: nodeIcon,
  },
  postgres: {
    name: "PostgreSQL",
    icon: postgresIcon,
  },
  cockroachdb: {
    name: "CockroachDB",
    icon: cockroachDbIcon,
  },
  bun: {
    name: "Bun",
    icon: bunIcon,
  },
  sse: {
    name: "SSE",
    icon: eventsIcon,
  },
  clickhouse: {
    name: "Clickhouse",
    icon: clickhouseIcon,
  },
  temporal: {
    name: "Temporal",
    icon: temporalIcon,
  },
  redis: {
    name: "Redis",
    icon: redisIcon,
  },
  "aws-s3": {
    name: "AWS S3",
    icon: awsS3Icon,
  },
  "pdf-js": {
    name: "PDF.js",
    icon: pdfJsIcon,
  },
  "pdf-lib": {
    name: "pdf-lib",
    icon: pdfLibIcon,
  },
  "vercel-functions": {
    name: "Vercel Functions",
    icon: vercelIcon,
  },
  "ai-sdk": {
    name: "AI SDK",
    icon: vercelIcon,
  },
  openai: {
    name: "OpenAI",
    icon: openaiIcon,
  },
  anthropic: {
    name: "Anthropic",
    icon: anthropicIcon,
  },
  gemini: {
    name: "Gemini",
    icon: geminiIcon,
  },
  indexeddb: {
    name: "IndexedDB",
  },
  epub: {
    name: "EPUB",
    icon: epubIcon,
  },
  xml: {
    name: "XML",
    icon: xmlIcon,
  },
  zip: {
    name: "ZIP",
    icon: zipIcon,
  },
};

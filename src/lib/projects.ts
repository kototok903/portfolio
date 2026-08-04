import type { ImageMetadata } from "astro";
import codegramImg from "@/assets/images/projects/codegram-screenshot.png";
import closeticsImg from "@/assets/images/projects/closetics-screenshot-combo2.png";
import connectionsInfoImg from "@/assets/images/projects/connections-info-screenshot.png";
import novtranImg from "@/assets/images/projects/novtran-screenshot-light.png";
import pdfEditorImg from "@/assets/images/projects/pdf-editor-screenshot-dark.png";
import realSortImg from "@/assets/images/projects/real-sort-screenshot.png";
import simpleEditImg from "@/assets/images/projects/simple-edit-screenshot.png";
import sokobanImg from "@/assets/images/projects/sokoban-screenshot.png";
import sortForgeImg from "@/assets/images/projects/sortforge-screenshot-flipped.png";
import type { TagName } from "@/lib/tags";

export type ProjectData = {
  title: string;
  description: string;
  tags?: TagName[];
  image?: ImageMetadata;
  displayFilename?: string;
  githubUrl?: string;
  links?: {
    href: string;
    label: string;
  }[];
};

export const projectsData: ProjectData[] = [
  {
    title: "PDF Editor",
    description:
      "A privacy-focused, client-only PDF editor for adding text, images, and signatures; reorganizing and merging pages; searching documents; editing metadata; and performing lossless or lossy compression. PDF rendering and editing happen locally in the browser using PDF.js, pdf-lib, and WebAssembly-based compression engines.",
    tags: [
      "typescript",
      "react",
      "vite",
      "tailwind-css",
      "shadcn-ui",
      "pdf-js",
      "pdf-lib",
      "webassembly",
    ],
    image: pdfEditorImg,
    displayFilename: "pdf-editor.ts",
    githubUrl: "https://github.com/kototok903/pdf-editor",
    links: [
      {
        href: "https://pdf.kototok.dev/",
        label: "Try it",
      },
    ],
  },
  {
    title: "Connections Info",
    description:
      "An enhanced wrapper for NYT Connections with configurable research links for every word, historical puzzle navigation, guess history, and shareable results. A React client talks to a cache-aware Vercel Function that validates and normalizes puzzle data.",
    tags: [
      "typescript",
      "react",
      "vite",
      "tailwind-css",
      "shadcn-ui",
      "vercel-functions",
    ],
    image: connectionsInfoImg,
    displayFilename: "connections-info.ts",
    githubUrl: "https://github.com/kototok903/connections-info",
    links: [
      {
        href: "https://connections-info.kototok.dev/",
        label: "Play",
      },
    ],
  },
  {
    title: "SortForge",
    description:
      "SortForge is an interactive sorting algorithm visualizer featuring 20 algorithms, fast forward and rewind, and sound synthesis. Rust engine in WebAssembly emits events, and the React frontend handles timing and animation. Live event generation is available to simulate large arrays.",
    tags: [
      "rust",
      "webassembly",
      "react",
      "typescript",
      "vite",
      "tailwind-css",
      "canvas",
    ],
    image: sortForgeImg,
    displayFilename: "sortforge.rs",
    githubUrl: "https://github.com/kototok903/sort-forge",
    links: [
      {
        href: "https://sort-forge.kototok.dev/",
        label: "Try it",
      },
    ],
  },
  {
    title: "Novtran",
    description:
      "A local-first workspace for translating long-form fiction with AI. Users organize text into chunks, stream structured translations and contextual notes, review each result, and import or export projects. It supports OpenAI, Anthropic, and Google models while keeping projects and API keys in the browser.",
    tags: [
      "typescript",
      "react",
      "vite",
      "tailwind-css",
      "shadcn-ui",
      "ai-sdk",
      "openai",
      "anthropic",
      "gemini",
      "indexeddb",
    ],
    image: novtranImg,
    displayFilename: "novtran.ts",
    githubUrl: "https://github.com/kototok903/novtran",
    links: [
      {
        href: "https://novtran.vercel.app/",
        label: "Try it",
      },
    ],
  },
  {
    title: "novfmt",
    description:
      "A lightweight Go tool for maintaining EPUB files. It can merge multiple volumes, inspect and modify metadata and navigation, and perform single or rules-based text rewrites with dry-run and non-destructive output options.",
    tags: ["go", "epub", "xml", "zip"],
    displayFilename: "novfmt.go",
    githubUrl: "https://github.com/kototok903/novfmt",
  },
  {
    title: "Codegram",
    description:
      "Codegram is an online tutoring platform that is capable of matching students in need of programming assistance with experts in the related field. They share a synchronized code editor with webcam, audio, and programming language support functionality to enhance the virtual tutoring experience.",
    tags: [
      "javascript",
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
    displayFilename: "codegram.js",
    githubUrl: "https://github.com/Bardemic/Codegram",
  },
  {
    title: "Closetics",
    description:
      "Closetics is a unique Android app that blends clothes wearing statistics with social media. Designed for fashion enthusiasts, it helps you track your clothing habits, discover outfit trends, and share your style with a community of like-minded users.",
    tags: [
      "java",
      "android",
      "android-studio",
      "spring-boot",
      "mysql",
      "websocket",
      "stripe",
    ],
    image: closeticsImg,
    displayFilename: "closetics.java",
    githubUrl: "https://github.com/Niall-Sharma/Closetics",
  },
  {
    title: "Simple Edit",
    description:
      "Simple Edit is a fast, lightweight image editor. Made for Windows using C# and .NET Framework. It has a variety of available features like blur and sharpening, different filters and color modes, autocorrection, and pixel sorting.",
    tags: ["csharp", "dotnet-framework"],
    image: simpleEditImg,
    displayFilename: "simple-edit.cs",
    githubUrl: "https://github.com/kototok903/simple-edit",
  },
  {
    title: "Real Sort",
    description:
      "Real Sort is a program for Sorting Algorithm Visualization written in Java. It features:<br>&ensp;• 12 sorting algorithms with different variations<br>&ensp;• Convenient playback controls<br>&ensp;• Multiple color themes",
    tags: ["java", "java-swing"],
    image: realSortImg,
    displayFilename: "real-sort.java",
    githubUrl: "https://github.com/kototok903/real-sort",
  },
  {
    title: "Sokoban",
    description:
      "Sokoban is a challenging puzzle game where you need to push all the boxes to their designated spots. Made in Haskell using CodeWorld graphics library. Contains 7 levels with varying difficulty.",
    tags: ["haskell", "code-world"],
    image: sokobanImg,
    displayFilename: "sokoban.hs",
    githubUrl: "https://github.com/kototok903/sokoban",
    links: [
      {
        href: "https://code.world/run.html?mode=haskell&dhash=DLmyERHj_RJnjXTqd1Ga35A",
        label: "Play in browser",
      },
    ],
  },
];

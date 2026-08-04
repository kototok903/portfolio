import type { ImageMetadata } from "astro";
import codegramImg from "@/assets/images/projects/codegram-screenshot.png";
import closeticsImg from "@/assets/images/projects/closetics-screenshot-combo2.png";
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
    title: "SortForge",
    description:
      "SortForge is an interactive sorting algorithm visualizer featuring 20+ algorithms, fast forward and rewind, and sound synthesis. Rust engine in WebAssembly emits events, and the React frontend handles timing and animation. Live event generation is available to simulate large arrays.",
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
    displayFilename: "codegram.ts",
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
    title: "Real Sort",
    description:
      "Real Sort is a program for Sorting Algorithm Visualization written in Java. It features:<br>&ensp;• 10+ sorting algorithms with different variations<br>&ensp;• Convenient playback controls<br>&ensp;• Multiple color themes",
    tags: ["java", "java-swing"],
    image: realSortImg,
    displayFilename: "real-sort.java",
    githubUrl: "https://github.com/kototok903/real-sort",
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
    title: "Sokoban",
    description:
      "Sokoban is a challenging puzzle game where you need to push all the boxes to their designated spots. Made in Haskell using CodeWorld graphics library. Contains 6 levels with varying difficulty.",
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

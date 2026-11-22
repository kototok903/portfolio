import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // The one public address: canonical URLs, the sitemap and link previews use it.
  site: "https://www.stasbronevskiy.com",
  // One spelling per page (/projects, not /projects/), matching the site's links.
  trailingSlash: "never",
  adapter: vercel(),
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://website-demo-blush-ten.vercel.app",
  integrations: [tailwind(), sitemap()],
});

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://stefanofa.it",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    compress(),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});

// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel(),
  vite: {
    envPrefix: "PUBLIC_",
    // build: {
    //   rollupOptions: {
    //     input: {
    //       lib: "lib/supabaseClient.js",
    //     },
    //   },
    // },
  },
});

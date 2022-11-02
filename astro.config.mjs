import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: "https://thakrisp.github.io",
  base: "/",

  integrations: [tailwind()],
});

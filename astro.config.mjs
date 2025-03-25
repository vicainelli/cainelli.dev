import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // integrations: [tailwind()],

  vite: {
    css: {
      transformer: "lightningcss",
    },
    plugins: [tailwindcss()]
  }
});

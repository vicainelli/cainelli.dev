import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      resolve: {
          alias: {
              "@": "/src",
          },
      },
      css: {
          transformer: "lightningcss",
      },
      plugins: [tailwindcss()],
	},

  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'dracula' },
  })],
});

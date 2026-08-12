import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare(),
	env: {
		schema: {
			SPOTIFY_CLIENT_ID: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			SPOTIFY_CLIENT_SECRET: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			SPOTIFY_REFRESH_TOKEN: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
		},
	},
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

	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "dracula" },
		}),
	],
});

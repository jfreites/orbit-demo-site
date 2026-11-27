// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { contentRefresh } from "@jfreites/orbit-cms/site/integrations";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
	// Dominio final. Lo usan canonical y og:image. En Netlify, URL viene del entorno.
	site: process.env.URL ?? "https://monteocre.example",
	integrations: [
		// Solo en `astro dev`: el CMS hace POST /_refresh?secret=… al publicar
		contentRefresh({ secret: env.REFRESH_SECRET }),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});

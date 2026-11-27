import { siteCollections } from "@orbit-cms/core/site/astro";
import { cmsLoader } from "@orbit-cms/core/loader";

/*
 * Fuente del contenido:
 * - CMS_URL + CMS_TOKEN definidos (apps/demo/.env o variables de Netlify) → CMS
 * - si no → JSON locales de src/data
 * Los componentes y los esquemas son los mismos en ambos casos.
 */
const cms =
	import.meta.env.CMS_URL && import.meta.env.CMS_TOKEN
		? { url: import.meta.env.CMS_URL as string, token: import.meta.env.CMS_TOKEN as string }
		: null;

// El demo solo usa páginas y ajustes (sin colecciones)
export const collections = siteCollections({
	loader: cms ? (content) => cmsLoader({ ...cms, content }) : undefined,
});

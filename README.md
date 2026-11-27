# Monte Ocre — sitio de ejemplo de `@jfreites/orbit-cms`

Sitio Astro de una **marca ficticia** (estudio de arquitectura y paisaje) hecho con el paquete
`@jfreites/orbit-cms`. Muestra lo mínimo que necesita un sitio gestionado por orbit-cms: el sitio solo pone su
marca; los bloques, el layout, los esquemas y la lectura del contenido vienen del paquete.

## Qué pone el sitio y qué pone el paquete

| Archivo | Qué hace |
|---|---|
| `src/styles/site.css` | La **marca**: importa Tailwind y los estilos del paquete, y define los tokens (colores, tipografías, radios, remates) |
| `src/content.config.ts` | De dónde sale el contenido: con `CMS_URL` + `CMS_TOKEN` del **CMS** (`cmsLoader`), si no de los **JSON** de `src/data` |
| `src/pages/[...slug].astro` | Cada página: `SitePage` (layout, header, footer, SEO) + `BlockRenderer` (los bloques) |
| `src/pages/404.astro` | Página de error con los textos de los ajustes del sitio |
| `src/data/` | Contenido de respaldo en el formato neutral (el mismo que entrega el CMS) |
| `public/` | Logo, favicon e imágenes del contenido de respaldo |
| `astro.config.mjs` | `contentRefresh`: en `astro dev`, el CMS avisa al publicar y la página se recarga |

Todo lo demás (11 bloques, componentes, header/footer por defecto, validación con zod) es de `@jfreites/orbit-cms`.

## Usarlo

Node 24.22.3 (`mise.toml`) y pnpm.

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # → dist/
```

Sin `.env` el sitio usa `src/data`. Para leer del CMS, copia `.env.example` a `.env` con `CMS_URL` y el
token de solo lectura del sitio (en el CMS: *Administración → Sitios → Tokens de lectura*). Con el CMS local
en HTTPS (lerd/mkcert) los scripts `dev` ya pasan `NODE_OPTIONS=--use-system-ca`; para `build`:
`NODE_OPTIONS=--use-system-ca pnpm build`.

## El paquete

[`@jfreites/orbit-cms`](https://www.npmjs.com/package/@jfreites/orbit-cms), desde npm, con versión fija en
`package.json`. Para actualizarlo: cambia la versión y corre `pnpm install`.

## Publicar (Netlify)

`netlify.toml` ya está listo: `pnpm build`, carpeta `dist`. Con `CMS_URL` y `CMS_TOKEN` en las variables del
sitio, cada build lee el contenido publicado; el build hook del sitio va en el CMS (*Sitios → Publicación*).

## Créditos

Fotos de Unsplash, íconos de Lucide y tipografías OFL: ver `CREDITS.md`.

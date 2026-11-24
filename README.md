# CityChurch Miami

Sitio web de [citychurch.miami](https://citychurch.miami), hecho con [Astro](https://astro.build) y publicado gratis en GitHub Pages.

## Dónde cambiar cosas

| Quiero cambiar... | Archivo |
|---|---|
| Hora o lugar del domingo, enlaces de Church Center, redes sociales, listas de YouTube | `src/data/site.ts` |
| El texto de una página (español e inglés están juntos) | `src/views/<Página>.astro` |
| Colores, tipografías, botones | `src/styles/global.css` |
| Fotos | `public/img/` (formato `.webp`, una versión grande y una `-sm`) |
| Logos e íconos | `public/brand/` |

Páginas: `Home`, `About` (Acerca), `Jesus`, `Teaching` (Enseñanza), `Community` (Comunidad), `Houses` (Iglesias en casa), `FirstTime` (Primera vez).

Rutas en español en la raíz (`/acerca/`), en inglés bajo `/en/` (`/en/about/`).

## Publicar

Cada cambio que se sube a la rama `main` se publica solo (GitHub Actions → Pages) en uno o dos minutos.

## Trabajar en la computadora

```bash
npm install
npm run dev      # vista previa en http://localhost:4321
npm run build    # genera el sitio en dist/
```

## Notas

- Los formularios y donaciones abren en ventana de Church Center (`?open-in-church-center-modal=true`).
- No usar guiones largos en los textos.
- "CityChurch" siempre en una sola palabra.

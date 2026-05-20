# Planetarios — Contexto del Proyecto

## Descripción General

**Planetarios** es el sitio web de una consultora estratégica chilena dedicada a la antropología de los negocios. Propone cambios al modelo de negocio de empresas para adaptarse a transformaciones sociales. Contacto: `rrios@planetarios.cl`, `(+56 9) 98202681`, Santiago de Chile.

---

## Stack Tecnológico

| Capa            | Tecnología                          | Versión   |
| --------------- | ----------------------------------- | --------- |
| Framework       | Next.js (App Router)                | 16.2.6    |
| UI              | React                               | 19.2.4    |
| Lenguaje        | TypeScript                           | ^5        |
| Estilos         | Tailwind CSS v4 (`@tailwindcss/postcss`) | ^4    |
| Carrusel        | Swiper                              | ^12.1.4   |
| Compilador      | babel-plugin-react-compiler          | 1.0.0     |
| Linting         | ESLint + eslint-config-next          | ^9        |
| Build output    | **Static export** (`output: 'export'`) |         |

- **Imágenes**: `unoptimized: true` (compatible con static export). Patrón remoto permitido: `figma.com/api/mcp/asset/**`.
- **Idioma HTML**: `es` (español).

---

## Estructura de Carpetas

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx          # Layout raíz (fonts, metadata)
│   ├── page.tsx            # Página principal (Home)
│   ├── globals.css         # Variables CSS, @font-face, reset
│   └── favicon.ico
├── assets/
│   ├── fonts/texta/        # Familia tipográfica "Texta Narrow" (32 archivos OTF)
│   └── logos/
│       ├── associates/     # Logos de empresas asociadas (2)
│       ├── clients/        # Logos de clientes (5 archivos: svg, png, webp)
│       └── planetarios/    # Logo de marca (negro + color, SVG)
├── constants/
│   ├── brand-logos.ts      # Arrays CLIENT_LOGOS, ASSOCIATE_LOGOS, PLANETARIOS_LOGOS
│   ├── fonts.ts            # Google Fonts: Josefin Sans (heading), JetBrains Mono (mono)
│   └── seo-info.ts         # PAGES_INFO: mapa de slugs → {title, description, image}
├── ui/
│   ├── home/
│   │   ├── home-page.tsx             # Orquestador: Swiper vertical con 3 slides
│   │   ├── home-hero.tsx             # Hero con título "QUÉ ES PLANETARIOS CONSULTORA"
│   │   ├── home-highlight-strips.tsx # 3 tiras de color con títulos destacados
│   │   └── home-clients-section.tsx  # Sección de clientes y asociados
│   └── shared/
│       ├── site-navbar.tsx           # Navbar con logo + 3 links
│       ├── footer.tsx                # Footer con logo color + contacto
│       └── highlight-strip-card.tsx  # Componente reutilizable de tira de color
└── utils/
    └── get-shared-metadata.ts        # Helper de metadata SEO/OpenGraph por slug
```

---

## Sistema de Diseño / Tokens

### Colores de Marca (CSS custom properties)

| Variable            | Valor                        | Uso                  |
| ------------------- | ---------------------------- | -------------------- |
| `--brand-purple`    | `#762add`                    | Título destacado     |
| `--brand-lime`      | `#c1e61e`                    | Strip "Contribución" |
| `--brand-blue`      | `#00b0f9`                    | Strip "Obsolescencia"|
| `--brand-yellow`    | `#ffe940`                    | Strip "Juvenólogos" + CTA navbar |
| `--surface-muted`   | `rgba(217,217,217,0.28)`     | Fondo sección clientes |
| `--surface-footer`  | `#d9d9d9`                    | Fondo footer         |
| `--background`      | `#ffffff`                    | Fondo general        |
| `--foreground`      | `#000000`                    | Texto general        |

### Tipografías

| Variable CSS       | Familia           | Origen         | Uso              |
| ------------------ | ----------------- | -------------- | ---------------- |
| `--font-body`      | Texta Narrow      | Local (OTF)    | Cuerpo de texto  |
| `--font-heading`   | Josefin Sans      | Google Fonts   | Títulos          |
| `--font-mono`      | JetBrains Mono    | Google Fonts   | CTAs / código    |

- Pesos de Texta Narrow cargados: 400, 500, 700.
- Pesos de Josefin Sans: 400, 700.
- Clases CSS helper: `.font-heading`, `.font-body-prototype`, `.font-mono`.

### Layout

| Variable           | Valor    |
| ------------------ | -------- |
| `--header-height`  | `100px`  |
| `--home-width`     | `1280px` |

- Max-width general: `max-w-[80rem]` (1280px).
- Breakpoints usados (Tailwind): `sm`, `md`, `lg`, `xl`.

---

## Páginas Definidas (SEO)

| Slug             | Título                     |
| ---------------- | -------------------------- |
| `home`           | PlanetaRios                |
| `valueModel`     | Modelo de valor            |
| `studioNature`   | Naturaleza del estudio     |
| `generations`    | Las generaciones           |
| `paradigmShift`  | Cambio de paradigma        |
| `studioContent`  | Contenido del estudio      |
| `dataSouces`     | Fuentes                    |
| `nomenclature`   | Nomenclatura               |
| `methodology`    | Metodología                |

> **Nota**: Solo la página `home` está implementada actualmente. El resto está definido en `seo-info.ts` pero sin rutas ni componentes.

---

## Componentes Clave

### `HomePage` (`use client`)
- Usa **Swiper** en dirección vertical con 3 slides fullscreen:
  1. **HomeHero** — Título principal + párrafo descriptivo.
  2. **HomeHighlightStrips** — 3 tarjetas `HighlightStripCard` con colores de marca.
  3. **HomeClientsSection + Footer** — Logos de clientes/asociados + pie de página.

### `HighlightStripCard`
- Componente reutilizable con posicionamiento absoluto en desktop (XL) y flujo normal en móvil.
- Props detalladas: `alignment`, `backgroundColor`, dimensiones del bar y offsets de título/CTA.
- Helper interno `pxToRem()` para convertir valores de diseño.

### `SiteNavbar`
- Logo negro de Planetarios + 3 links: "MODELO DE VALOR", "GENERACIONES DE TURNO" (CTA amarillo con pill), "NOSOTROS".
- Todos los `href` son `#` (sin navegación real aún).

---

## Clientes y Asociados

**Clientes**: Lucky Strike, La Tercera, Televisa, ENAP.  
**Asociados**: Observatorio Conciencia Empresarial, Alexis Camhi.

---

## Convenciones del Proyecto

- **Path alias**: `@/*` → `./src/*`
- **Tabs** para indentación (visible en archivos fuente).
- Componentes exportados como **named exports** (no default, excepto `page.tsx`).
- Archivos de constantes en `src/constants/`, componentes UI en `src/ui/` organizados por dominio.
- CSS global con custom properties + Tailwind v4 (sin `tailwind.config`; configuración en `@theme`).

---

## Scripts

```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build estático (output: export)
npm run start  # Servidor de producción
npm run lint   # ESLint
```

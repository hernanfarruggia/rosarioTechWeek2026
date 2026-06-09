# Claude Design — Rosario TechWeek 2026

Design system de la web de la **Rosario TechWeek**, II edición (19–23 octubre 2026).
Define tokens, tipografía, componentes, motion y convenciones para construir un landing
**clean, minimalista, 100% scroll con parallax**.

> **Identidad:** negro / blanco como base, con highlights **naranja** y **azul**.
> El lenguaje estructural (eyebrows monoespaciados, cards con acento, headlines con palabra
> resaltada, big stats, metadata en footers) viene del deck de sponsoreo 2026, pero adaptado
> a la marca TechWeek (negro/blanco, **no** navy del Hub).

---

## 1. Principios

1. **Minimalismo con jerarquía.** Mucho aire, pocos elementos, tipografía que manda.
2. **Scroll como narrativa.** Una sola página; cada sección es un "capítulo".
3. **Parallax sutil, nunca protagonista.** El movimiento da profundidad, no distrae ni perjudica la lectura.
4. **Contraste alternado.** Las secciones alternan tema **oscuro** y **claro**; el contraste marca el ritmo.
5. **Accesibilidad primero.** Contraste AA, `prefers-reduced-motion` siempre respetado, foco visible.
6. **Sin ruido comercial en la web.** No se muestran precios, entradas ni montos de sponsors (se manejan offline).

---

## 2. Tokens de color

Definidos como variables CSS. En el repo viven en `src/app/globals.css` dentro de `@theme inline`
(Tailwind v4). Se mantienen los nombres actuales `--color-primary` / `--color-secondary`.

### Neutros
| Token | Valor | Uso |
|---|---|---|
| `--color-black` | `#0a0a0a` | Fondo de secciones tema **dark** |
| `--color-white` | `#ffffff` | Fondo de secciones tema **light** |
| `--color-ink` | `#111111` | Texto principal sobre claro |
| `--color-paper` | `#f5f5f5` | Variante de fondo claro / cards light |
| `--color-gray-400` | `#9aa0aa` | Texto mutado sobre oscuro |
| `--color-gray-500` | `#6b7280` | Texto secundario |
| `--color-gray-600` | `#3a3f47` | Bordes / detalles sobre claro |

### Acentos
| Token | Valor | Uso |
|---|---|---|
| `--color-orange` (`--color-primary`) | `#ff6a00` | Highlight principal, CTAs solid, acentos de card, índices |
| `--color-orange-soft` | `#ff8a3d` | Gradiente del highlight, hover |
| `--color-blue` (`--color-secondary`) | `#1081dd` | Acento secundario (links, datos, variante de highlight) |

### Superficies y bordes (semánticos, por tema)
| Token | Valor | Uso |
|---|---|---|
| `--surface-dark` | `color-mix(in srgb, #fff 5%, transparent)` | Card translúcida sobre negro |
| `--border-dark` | `color-mix(in srgb, #fff 12%, transparent)` | Borde de card / pill sobre negro |
| `--surface-light` | `color-mix(in srgb, #000 3%, transparent)` | Card translúcida sobre blanco |
| `--border-light` | `color-mix(in srgb, #000 10%, transparent)` | Borde de card / pill sobre blanco |

> **Regla de contraste:** naranja sobre negro y sobre blanco pasa AA para texto grande/bold
> (headlines y números). No usar naranja para body text largo.

---

## 3. Tipografía

Tres familias, cada una con un rol claro. En el repo se cargan con `next/font`
(`Space_Grotesk`, `JetBrains_Mono`, `Roboto_Flex`); en el mockup, vía Google Fonts CDN.

| Rol | Familia | Token | Uso |
|---|---|---|---|
| **Display** | Space Grotesk (500/700) | `--font-display` | Titulares (h1/h2/h3), números de stats |
| **Mono** | JetBrains Mono (400/500) | `--font-mono` | Eyebrows, índices, labels, metadata de footer |
| **Body** | Roboto Flex (300–700) | `--font-sans` | Párrafos, texto de UI, inputs |

### Escala fluida (`clamp`)
| Token | Valor | Uso |
|---|---|---|
| `--text-display` | `clamp(2.5rem, 6vw, 5.5rem)` | Titular hero / aperturas de sección |
| `--text-h2` | `clamp(2rem, 4.5vw, 3.75rem)` | Títulos de sección |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.75rem)` | Títulos de card |
| `--text-stat` | `clamp(2.5rem, 5vw, 4.5rem)` | Números grandes |
| `--text-eyebrow` | `0.75rem` | Eyebrow / labels (mono, uppercase, `letter-spacing: .15em`) |
| body | `1rem`–`1.125rem`, `line-height 1.6` | Párrafos |

**Reglas:** Display siempre bold y apretado (`line-height ~1.05`, `letter-spacing -.01em`).
Mono siempre uppercase para labels. Una sola palabra por titular en color (ver `Highlight`).

---

## 4. Espaciado, radius y grid

- **Spacing scale (rem):** `0.5 · 1 · 1.5 · 2 · 3 · 4 · 6 · 8`.
- **Ritmo de sección:** padding vertical `clamp(5rem, 12vh, 9rem)`; container `max-width: 1200px`, padding lateral `1.5rem` (mobile) → `2rem`.
- **Radius:** `--radius-pill: 999px` (eyebrows/botones pill), `--radius-card: 16px` (cards), `--radius-sm: 8px` (inputs).
- **Grid de cards:** 1 col (mobile) → 2/3 col (desktop) con `gap: 1.5rem`.

---

## 5. Componentes

Catálogo de primitivos. En el repo se implementan en `src/components/ui/` como componentes
React tipados; acá se describe anatomía, props y variantes. Los que aplican aceptan
`theme: 'dark' | 'light'`.

### `SectionShell`
Contenedor de cada sección. Owns: fondo del tema, capa decorativa (grid + glow), container,
fila de eyebrow con índice + page-counter, y el `id` (anchor de scroll).
```
props: { id, index: "01", eyebrow: "QUÉ ES", total?: "09", theme, children }
```
Anatomía: `[ {index} — {eyebrow} ............ {index}/{total} ]` arriba; contenido debajo.

### `Eyebrow` / Badge
Pill monoespaciada uppercase con borde fino e índice naranja.
```
props: { index?, label, theme, variant?: 'pill' | 'plain' }
```

### `Card`
Superficie translúcida con borde fino, **barra de acento naranja arriba** e índice mono `— 01`.
```
props: { index?, title?, accent?: boolean (default true), theme, children }
```

### `StatNumber`
Número grande (display) + label mono debajo. Opción `accent` para pintarlo naranja.
```
props: { value: "1.500", label: "INSCRIPTOS", accent? }
```

### `Highlight`
`<span>` que resalta **una** palabra del titular. Naranja por defecto; variante azul.
```
props: { children, color?: 'orange' | 'blue' }
```
Uso: `Conocimiento, <Highlight>networking</Highlight> y negocios.`

### `Heading`
Titular grotesk bold. `size` mapea a la escala tipográfica.
```
props: { as?: 'h1'|'h2'|'h3', size?: 'display'|'h2'|'h3', theme, children }
```

### `CTAButton`
Botón/anchor. Reemplaza el `Button.tsx` actual (sin el hack de padding).
```
props: { variant?: 'solid'|'outline'|'ghost', size?: 'sm'|'md'|'lg',
         href?, target?, onClick?, type?, disabled?, theme, children }
```
- **solid:** fondo naranja, texto negro.
- **outline:** transparente, borde por tema, texto del tema; hover → borde naranja.
- **ghost:** solo texto + flecha; hover subraya en naranja.

### `Parallax`
Wrapper de motion para profundidad en scroll.
```
props: { speed?: number (-0.3..0.3), children }
```
Internamente: `useScroll({ target, offset:['start end','end start'] })` + `useTransform` sobre `y`.
Respeta `useReducedMotion()` (amplitud 0).

### `Reveal`
Aparición on-scroll (evolución de `FadeUp`). `opacity 0→1`, `y 24→0`.
```
props: { delay?, y?, children }
```

---

## 6. Motion & parallax

- **Solo `transform` y `opacity`** (GPU). Nunca animar layout.
- **Amplitudes recomendadas:** glow/decorativos `speed 0.05–0.15`; capas de hero `0.1 / 0.2`.
  El texto principal se mueve poco o nada (legibilidad).
- **Reveal:** stagger de `60–120ms` entre cards.
- **Reduced motion (obligatorio):** con `prefers-reduced-motion: reduce`, parallax → 0 y reveals
  aparecen sin animar. Vive en los primitivos, así toda sección lo hereda.
- **Mobile:** amplitud reducida o desactivada bajo `~768px`.

---

## 7. Sistema de fondo por sección

No hay un fondo global fijo: **cada sección define su tema** vía prop (`dark`/`light`), alternando.
Cada `SectionShell` pinta:
1. **Base** del tema (`--color-black` o `--color-white`).
2. **Grid sutil** (`.bg-grid`): líneas a 4% de opacidad (blancas en dark, negras en light), con
   `mask-image` radial que difumina los bordes.
3. **Glow naranja** (`.bg-glow`): radial naranja con blur, `pointer-events:none`, con parallax lento.

```css
.bg-grid  { background-image: linear-gradient(...1px) ; background-size: 64px 64px;
            mask-image: radial-gradient(circle at 50% 30%, #000, transparent 80%); }
.bg-glow  { background: radial-gradient(40% 30% at 70% 20%, rgba(255,106,0,.18), transparent 70%);
            filter: blur(40px); }
```

---

## 8. Convenciones

- **Naming de tokens:** `--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--surface-*`, `--border-*`.
- **El tema lo define la sección**, no el OS. No usar `prefers-color-scheme`.
- **Un solo highlight por titular.** Más de una palabra en color pierde fuerza.
- **Mono = labels, Display = titulares/números, Sans = lectura.** No mezclar roles.
- **Sin pricing/montos/entradas en la web.** Las CTAs comerciales llevan al formulario de contacto.

### Cómo agregar una sección nueva
1. Crear `src/components/sections/NuevaSeccion.tsx` envuelta en `SectionShell` con `index`, `eyebrow`, `theme` (alternando respecto a la anterior).
2. Componer con los primitivos (`Card`, `StatNumber`, `Heading`, `Highlight`, `CTAButton`).
3. Mover la copy a `src/content/site.ts`.
4. Sumar el anchor a `Navigation.tsx`.
5. Si tiene CTA comercial, rutearla por el deep-link del form (`interest`).

---

## 9. Implementación de referencia

- **Mockup visual:** `mockup.html` (autocontenido, abrir en navegador).
- **Spec de cambios en el repo:** `REDESIGN_SPEC.md`.
- **Catálogo vivo (a futuro):** ruta `/style-guide` que renderiza tokens + todos los primitivos.

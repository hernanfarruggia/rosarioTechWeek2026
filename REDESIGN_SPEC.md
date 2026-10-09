# Redesign Spec — Rosario TechWeek 2026

Descripción accionable de **todos los cambios** para llevar el repo (web 2025) al rediseño 2026,
siguiendo `DESIGN_SYSTEM.md` ("Claude Design"). Esta etapa **no implementa** los cambios: este
documento es la guía para hacerlo después desde Claude Code.

- **Stack actual:** Next.js 15 (App Router, `src/app`), React 19, TypeScript, Tailwind v4, framer-motion, lucide-react.
- **Edición nueva:** II edición, **19–25 octubre 2026**.
- **Regla transversal:** **sin precios, entradas ni montos de sponsors** en ningún lado.

---

## 1. Mapa de secciones (9)

Base **negro/blanco alternado** (prop `theme`). Mismo lenguaje visual del deck en ambos temas.

| # | Sección | Componente | Anchor | Tema | Contenido |
|---|---|---|---|---|---|
| 1 | Hero | `Hero.tsx` | `#hero` | dark | Hook fuerte + titular grotesk con palabra naranja + subtitle. 3 CTAs: **Ver agenda** (Luma), **Ser sponsor** (deep-link form `interest:sponsor`), **Sumar evento** (deep-link `interest:venue`). Parallax en capas (titular vs CTAs). |
| 2 | ¿Qué es? | `About.tsx` | `#que-es` | light | Concepto de Tech Week (visibilizar, celebrar, potenciar, conectar) + objetivos + público. Cards. |
| 3 | Pilares | `Pillars.tsx` | `#pilares` | dark | 3 Cards con índice mono: **Conocimiento**, **Networking**, **Negocios**. |
| 4 | Edición anterior | `PreviousEdition.tsx` | `#edicion-2025` | light | Stats 2025: **32** eventos · **14** locaciones · **40** empresas · **1.500** inscriptos · **15** menciones en prensa · **+$125M** impacto económico (métrica de resultado, no pricing). Muro de logos sponsors 2025. Links a notas de prensa. **Placeholder reel vertical 9:16**. |
| 5 | Sponsors | `Sponsors.tsx` | `#sponsors` | dark | **Por qué sumarse**: visibilidad de marca, conexión con el ecosistema, impacto regional. CTA → form `interest:sponsor`. **Sin tiers ni precios.** |
| 6 | Hosts | `Hosts.tsx` | `#anfitriones` | light | Ser **venue** (`interest:venue`), **speaker** (`interest:speaker`), **sumar evento** al calendario. Cards + CTA. |
| 7 | Prensa | `Press.tsx` | `#prensa` | dark | Acreditación de prensa: qué ofrecemos (media kit, accesos, entrevistas) + CTA → form `interest:press`. |
| 8 | Equipo | `Team.tsx` | `#equipo` | light | Miembros del Hub organizador (fotos `public/team/*`), nombre + rol en mono. |
| 9 | Contacto | `Contact.tsx` | `#contacto` | dark | **PRESERVAR** form + `/api/contact` + redes. Restyle a tema dark. |

> La alternancia exacta es ajustable: el tema es una prop, cambiar una sección es una línea.
> Recomendación actual arriba (dark/light/dark/light…), respetando Hero y Contacto en dark.

### Copy de referencia (del deck / declaración de interés)
- **Hero hook:** "Ya dimos el primer paso. Es tiempo de **acelerar**." / "Potenciando el ecosistema tecnológico y emprendedor de Rosario."
- **¿Qué es?:** "Una serie de eventos a lo largo de varios días para **visibilizar, celebrar y potenciar** el ecosistema tecnológico y emprendedor de una ciudad."
- **Objetivos:** posicionar Rosario como hub regional; conectar emprendedores/inversores/corporaciones/gobiernos; dar visibilidad al talento local; fomentar alianzas; impulsar colaboración y aprendizaje.
- **Edición anterior:** "¿Qué ocurrió en la edición 2025?" — primera Tech Week de Rosario.
- **Prensa 2025:** nota de **La Capital** ("Rosario muestra todo su potencial de innovación, startups y tecnología") + cobertura TV. *(URLs a cargar por el usuario.)*

---

## 2. Qué se QUITA

- Datos/secciones con **pricing**: tiers de sponsors con montos ($1M/$3M/$5M), cualquier precio de entradas.
- Componentes que ya no van: `src/components/sections/Agenda.tsx`, `Attendees.tsx`, `VisitRosario.tsx`.
- Utilidades CSS muertas en `globals.css`: `.glitch`, animaciones float no usadas, bloque `@media (prefers-color-scheme)`.
- `@import` de Google Fonts en `globals.css` (se migra a `next/font`).
- `Button.tsx` y `FadeUp.tsx` una vez migrados sus usos a `CTAButton` y `Reveal`.

## 3. Qué se PRESERVA (no tocar lógica)

- **`src/app/api/contact/route.ts`** — integración Brevo, recipients, validación. **Intacto.**
- **`src/components/sections/Contact.tsx`** — campos `name, email, phone, organization, interest (sponsor|speaker|venue|attendee|press|other), message`, estado, `useEffect` que sincroniza `message`/`interest`, y `fetch('/api/contact')`. **Solo restyle de clases** + swap `Button`→`CTAButton`.
- **Deep-link de CTAs al form** — `handleContactFormUpdate(interest)` / prop `btnAction` en `page.tsx`, que pre-cargan `interest` y scrollean a `#contacto`. Rutear las CTAs nuevas por acá.
- Assets en `public/` (logos sponsors, fotos equipo, `logo.svg`, `1.jpeg`, `2.jpeg`).

## 4. Cambios técnicos (a futuro)

1. **`globals.css`** — reemplazar `@theme` por los tokens de `DESIGN_SYSTEM.md` (neutros + acentos + superficies + escala tipográfica + radius). Mantener aliases `--color-primary/secondary`. Agregar utilidades `.bg-grid` / `.bg-glow`. Quitar bloque light/dark de OS.
2. **`layout.tsx`** — cargar fuentes con `next/font` (Space Grotesk, JetBrains Mono, Roboto Flex) como variables CSS. Actualizar **metadata a 2026**.
3. **`src/content/site.ts`** (nuevo) — capa de contenido tipada: `meta`, `hero`, `about`, `pillars`, `previous{stats,sponsors,press,reelUrl?}`, `sponsors`, `hosts`, `pressSection`, `team`, `contact{socials}`. Migrar acá los arrays de sponsors y team. CTAs con `interest?`.
4. **`src/components/ui/`** (nuevos) — primitivos: `SectionShell`, `Eyebrow`, `Card`, `StatNumber`, `Highlight`, `Heading`, `CTAButton`, `Parallax`, `Reveal`.
5. **`src/components/sections/`** — reescribir las 9 secciones con los primitivos.
6. **`Navigation.tsx`** — anchors nuevos (`#que-es`, `#pilares`, `#edicion-2025`, `#sponsors`, `#anfitriones`, `#prensa`, `#equipo`, `#contacto`) + restyle (transparente → sólido al scroll).
7. **`src/app/style-guide/page.tsx`** (nuevo, `robots: noindex`) — catálogo vivo de tokens y primitivos.
8. **`StructuredData.tsx` + `sitemap.ts`** — leer edición/fechas desde `site.meta` (2026).

## 5. Pasos de implementación (el form nunca se rompe)

1. Tokens + fuentes (aditivo) — `globals.css` + `layout.tsx`. Mantener aliases.
2. Utilidades de fondo (`.bg-grid`, `.bg-glow`).
3. Primitivos en `src/components/ui/` (solo adiciones).
4. `src/content/site.ts` (migrar arrays + copy).
5. Construir secciones **una por una** y swapear en `page.tsx` (Hero → About → Pillars → PreviousEdition → Sponsors → Hosts → Press → Team). Verificar build y anchor del form tras cada swap.
6. **Contacto al final:** restyle de clases + `Button`→`CTAButton`. Verificar submit real (200 de `/api/contact`).
7. `Navigation` (anchors + restyle).
8. Cleanup: borrar componentes/utilidades muertas, actualizar metadata/StructuredData/sitemap a 2026.
9. `/style-guide` + linkear desde `DESIGN_SYSTEM.md`.

## 6. Verificación

- `npm run dev`: alternancia negro/blanco correcta, parallax suave, reduced-motion respetado (DevTools → Rendering).
- `/style-guide`: todos los primitivos renderizan en ambos temas.
- **Form:** con `BREVO_API_KEY` en `.env.local`, enviar y confirmar `200` + mail. Probar deep-links "Ser sponsor"/"Speaker"/"Prensa" → pre-cargan `interest` y scrollean a `#contacto`.
- `npm run build` sin errores; revisar responsive en todas las secciones.

## 7. Pendientes del usuario (contenido)

- URLs de notas de prensa (La Capital + otras) para la sección Edición anterior.
- Archivo o embed del **reel vertical 9:16** (queda placeholder hasta entonces).
- Confirmar lista final de logos de sponsors 2025 a mostrar (hoy hay 28 en `public/sponsors/*`).
- Confirmar equipo organizador 2026 (hoy 8 miembros activos; `martin` está comentado).

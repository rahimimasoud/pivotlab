# PivotLab brand guide

The prism is the brand. A single input — a candidate with existing experience — passes through PivotLab and emerges as multiple bright career pathways. Every visual decision should reinforce that metaphor: clarity, geometry, refraction.

---

## Logo

### Files
| File | Use |
|---|---|
| `logos/pivotlab-logo.svg` | Nav, footer, documents, email |
| `logos/pivotlab-logo.png` | Raster contexts, third-party platforms |
| `logos/pivotlab-logo.jpg` | White-background only contexts |
| `logos/pivotlab-favicon.svg` | Browser favicon |
| `logos/apple-touch-icon.png` | iOS home screen (180x180) |
| `logos/og-image.png` | Social cards (1200x630) |

### Minimum sizes
| Context | Minimum height |
|---|---|
| Nav bar | 32 px |
| Footer | 28 px |
| Email header | 80 px (use SVG or PNG) |
| Print | 20 mm |

Below 80 px tall, the dashed depth lines in the full logo become too fine to read. At those sizes, switch to the favicon mark (prism only, no wordmark, no dashed lines).

### Clear space
Maintain clear space equal to the cap-height of the wordmark "P" on all four sides of the logo. Never crowd it against a container edge.

### Logo container
The logo container must have zero border-radius. The prism is geometric — soft corners contradict it.

### Background use
- On white or `--color-surface-muted`: use the default black-stroke version.
- On `--color-ink` (dark): the logo can be used in white (`filter: invert(1)` in CSS, or a white-stroke SVG variant).
- Never place the logo on a patterned, photographic, or heavily saturated background.

---

## Colour tokens

All tokens live in `:root` in `styles.css`. Use them everywhere. Never hard-code a colour value.

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0E0E10` | Primary text, logo strokes, dark backgrounds |
| `--color-surface` | `#FFFFFF` | Page background, card backgrounds |
| `--color-surface-muted` | `#F5F4F1` | Alternating section bands, footer |
| `--color-border` | `rgba(14,14,16,0.12)` | All dividers, card borders, input borders |
| `--color-text-secondary` | `#5A5A5F` | Body copy, labels, captions |
| `--color-accent` | `#2E6F6A` | CTAs, hover states, eyebrow labels, the diverging rays |
| `--color-accent-soft` | `#E4EFEE` | Accent backgrounds, avatar fills, icon fills |
| `--color-accent-warm` | `#C9722D` | Reserved for a future secondary accent. Do not introduce until needed. |

### Do not
- Add a third accent colour.
- Use gradients anywhere.
- Use `#000000` pure black in place of `--color-ink` — the slight softness is intentional.
- Place text on the accent colour unless contrast is verified at WCAG AA (4.5:1 for body, 3:1 for large text).

---

## Typography

Font: **Inter** (Google Fonts), weights 400 and 500 only.

| Role | Weight | Size | Letter-spacing | Case |
|---|---|---|---|---|
| Eyebrow labels | 500 | 11 px | 0.1 em | Uppercase |
| h1 | 500 | clamp(36px, 4.5vw, 60px) | -0.02 em | Sentence case |
| h2 | 500 | clamp(30px, 3.5vw, 50px) | -0.02 em | Sentence case |
| Nav links | 400 | 14 px | 0.01 em | Sentence case |
| Body copy | 400 | 15–17 px | 0 | Sentence case |
| Captions / labels | 500 | 11–12 px | 0.04–0.1 em | Sentence case or uppercase |
| Buttons | 500 | 14 px | 0.01 em | Sentence case |

### Do not
- Use weight 600, 700, or bold anywhere.
- Use all-caps on body copy or headings.
- Use title case on headings or CTAs.
- Load additional font weights or families without updating this document.

---

## Spacing

Base unit: **8 px**. All spacing should be a multiple of 8.

| Context | Desktop | Mobile |
|---|---|---|
| Section vertical padding | 96 px | 64 px |
| Section horizontal padding | 80 px | 24 px |
| Card padding | 28 px | 24 px |
| Nav height | 64 px | 56 px |

---

## Border radius

| Element | Radius |
|---|---|
| Buttons, inputs | 8 px |
| Cards | 12 px |
| Icon containers | 6–8 px |
| Logo container | 0 px (geometric, never rounded) |
| Pill / tag elements | 4 px |

---

## Line work

The prism logo uses thin strokes and dashed back-face edges. Echo this in the UI:

- **Dividers:** `0.5px solid var(--color-border)`
- **Card borders:** `0.5px solid var(--color-border)`
- **Decorative rules:** `1px dashed var(--color-border)` at 55% opacity
- **Step connector:** `1px dashed rgba(14,14,16,0.12)`
- **Accent lines:** `1.5px solid var(--color-accent)` used sparingly (e.g. quote left-border, step hover indicator)

---

## Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary (`btn-black`) | `--color-ink` | White | None | `--color-accent` background |
| Secondary (`btn-ghost`) | Transparent | `--color-ink` | 0.5px ink | `--color-accent-soft` bg, accent border and text |
| On-dark (`btn-white`) | White | `--color-ink` | None | `--color-accent-soft` bg, accent text |

### Do not
- Add gradients or drop shadows to buttons.
- Use rotation or translate transforms on button hover. Transitions should be colour and opacity only.
- Use pill-shaped (1584 px radius) buttons.

---

## Motion

Scroll reveal uses a `cubic-bezier(0.22,1,0.36,1)` easing — gentle deceleration, no bounce.
Hero entrance uses a simple `fadeUp` (16 px translateY, 0.5 s).
All transitions: `0.15–0.2 s`.
Always respect `prefers-reduced-motion`.

---

## The do-not list

1. No gradients anywhere.
2. No box shadows (except the CTA section's subtle concentric pulse, which is opacity-only).
3. No rounded corners on the logo container.
4. No all-caps body copy or title-case headings.
5. No font weights other than 400 and 500.
6. No third accent colour until `--color-accent-warm` is formally introduced.
7. No rotation transforms on interactive elements.
8. No full-bleed vivid section backgrounds (the only dark band is the CTA section, `--color-ink`).
9. No star ratings, testimonial carousels, or social proof elements until real data exists.
10. Never display the industry or partner logo strips until partnerships are formally confirmed.

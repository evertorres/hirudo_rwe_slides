---
name: Syntropic Telemetry
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c4c6d3'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8e909d'
  outline-variant: '#444652'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#1a3e92'
  on-primary-container: '#95aeff'
  inverse-primary: '#3a5aae'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#004e34'
  on-tertiary-container: '#2fc88e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#1e4195'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a high-precision, technical aesthetic tailored for elite longevity science, clinical biohacking instrumentation, and deep learning analytics. It serves an audience of computational biologists, biotech investors, longevity physicians, and advanced data engineers.

The visual direction merges **Dark Tech** and **Precision Cybernetics**:
- High-contrast telemetry displays set against void-depth obsidian surfaces.
- Linear vector conduits, isometric wireframe cues, and faint orthogonal grid patterns.
- Subtle luminescent gradients and volumetric edge glows that evoke cleanroom diagnostics and active server architecture.
- Absolute rejection of non-functional ornament, emojis, or frivolous illustration; visual interest is created purely through structured quantitative data, typographic hierarchy, dynamic telemetry indicators, and structural framing lines.

## Colors

The color architecture enforces strict functional roles across all presentation templates:

- **Primary (`#1A3E92` - Deep Command Blue)**: Represents active data streams, structural anchors, primary presentation actions, focus callouts, and raw computational telemetry.
- **Secondary (`#6366F1` - Deep Indigo)**: Drives multi-agent AI features, algorithmic flow models, dimensional backdrops, and gradient transitions paired with the primary hue.
- **Tertiary (`#10B981` - Kinetic Emerald)**: Reserved exclusively for positive physiological signals, cellular longevity indicators, metabolic biomarker baselines, and validated project outcomes.
- **Neutral System**:
  - `Surface Void` (`#0B0F19`): Main stage canvas for 16:9 presentation slides.
  - `Surface Tier 1` (`#0F172A`): Structural column containers, table tracks, and subdued background cards.
  - `Surface Tier 2` (`#1E293B`): Elevated KPI cards, diagnostic blocks, and modal overlays.
  - `Border / Grid Keyline` (`#334155` at 40-70% alpha): Structural grid alignments and divider planes.
  - `Text High-Contrast` (`#F8FAFC`): Critical headlines and numerical outputs.
  - `Text Muted / Data` (`#94A3B8`): Body context, technical readouts, and axes markings.

## Typography

The type system balances commanding structural impact with clinical machine precision:

- **Headline Family (Space Grotesk)**: Chosen for its geometric, futuristic stance and razor-sharp terminals. Headings are concise, bold, and modern, bringing authority to slide titles, sector dividers, and primary thesis statements.
- **Body & Telemetry Family (JetBrains Mono)**: A developer-grade monospaced face providing tabular figure stability, high readability for long-form case studies, and absolute precision for health metrics, blood panel markers, and algorithmic code snippets.
- **Type Hierarchy Rules**:
  - All labels, metadata, and slide pagination tags must appear in uppercase with increased letter-spacing (`0.08em` to `0.15em`).
  - Slide narrative titles utilize `display` or `headline-xl` paired with an adjoining category kicker set in `label-md` colored in `#1A3E92`.
  - Telemetry outputs and statistical readouts must maintain mono spacing to ensure alignment across vertical visual columns.

## Layout & Spacing

The presentation canvas uses a rigid 16:9 widescreen master ratio (1920x1080 canvas standard). 

- **Grid Architecture**: 
  - Standard 12-column coordinate grid with `1.5rem` (24px) gutters and `3.5rem` (56px) outer bounding margins to safeguard display overscan on auditorium projectors and external monitors.
  - 48px baseline vertical rhythm unit to synchronize textual flow and graphic telemetry cards.
- **Top / Bottom Slide Frame**:
  - Global header strip (Height: 48px) containing presenter meta, deck status, and breadcrumb indicator.
  - Global footer strip (Height: 36px) reserving space for dynamic timestamp, biohacking lab module reference, and numeric coordinate counter (e.g., `SLD_04 // SEC_BIO_01`).
- **Master Variations**:
  - **Cover / Title**: Centered or split-axis hero frame with dominant indigo-blue radial field, expansive display type, and project clearance badge.
  - **Agenda / Overview**: 4-part horizontal modular runway detailing chronological flow.
  - **Metrics & Telemetry Showcase**: 3-up or 4-up metric dashboard anchored by prominent delta badges and linear chart containers.
  - **Project Case Study**: Asymmetric 7:5 split layout; architectural diagram or UI showcase on the left, quantified clinical results on the right.
  - **Section Divider**: High-impact, minimal visual breather utilizing oversized numeric coordinates, bold category titles, and high-contrast glowing divider lines.

## Elevation & Depth

Visual depth is achieved through ambient technological luminescence and strict tonal layering rather than traditional drop shadows:

- **Level 0 (Canvas Void)**: Base `#0B0F19` background. Overlayed with a 64px orthogonal vector grid pattern rendered in `#1E293B` at 15% opacity to establish structural precision.
- **Level 1 (Structural Track)**: Background `#0F172A` with a 1px uniform perimeter line of `#1E293B`. Used for grouping related telemetry data and structural slide zones.
- **Level 2 (Data Card & Metric Core)**: `#1E293B` face with a 1px border colored `#334155` (70% opacity). When active or highlighted, the card boundary incorporates a subtle linear gradient border transition from `#1A3E92` to `#6366F1`.
- **Glow & Atmospheric Lighting**:
  - Strategic, soft radial atmospheric glows (`rgba(26, 62, 146, 0.08)` and `rgba(99, 102, 241, 0.06)`) positioned behind data visualizations or featured portfolio screenshots to give the illusion of backlit laboratory screens.
  - Zero heavy dark shadows; elements rely on luminance and edge delineation for layering.

## Shapes

The shape system is controlled, surgical, and minimal:

- **Corner Radii (`roundedness: 1`)**:
  - Standard cards and surfaces feature subtle 4px (`0.25rem`) rounded corners to avoid organic softness while softening raw brutalism.
  - Inner tags, telemetry chips, and status pills retain crisp 2px or 4px corners. Fully circular or pill-shaped designs are forbidden, maintaining an engineered instrument aesthetic.
- **Geometric Accents**:
  - Sub-cards occasionally incorporate a 45-degree chamfered corner (8px diagonal notch) on the top-right corner to indicate specialized telemetry inputs.
  - Decorative crosshairs (`+`) rendered at key intersections of the structural layout lines to reinforce scientific accuracy.

## Components

### Buttons & Interactive Presentation Triggers
- **Primary Button**: Solid fill using Command Blue (`#1A3E92`) with `#0B0F19` text, `label-md` uppercase typography, and 4px border radius. Hover state features a deep blue drop glow (`0 0 16px rgba(26, 62, 146, 0.4)`).
- **Secondary Action**: Translucent container (`#0F172A`), 1px border in `#334155`, text in `#F8FAFC`.

### Data Cards & Longevity Telemetry Blocks
- Surface set to `#1E293B` with 1px border `#334155`.
- Internal padding: `space-lg` (24px).
- Upper metadata track: Displays parameter code (e.g., `PARAM // HRV_RMSSD`) in `label-sm` muted text, accompanied by an active status dot (`#10B981` or `#1A3E92`).
- Center value: Set in Space Grotesk `headline-xl` for absolute metric legibility.
- Footer track: Linear sparkline or tabular baseline comparison formatted in JetBrains Mono `body-sm`.

### Status Badges & Diagnostic Chips
- Micro-containers with 2px borders, 4px vertical padding, and 8px horizontal padding.
- Color variations correspond strictly to system states:
  - Blue: Technical architecture, computation, model confidence.
  - Emerald: Biomarker stabilization, healthy longevity metrics, validated KPI growth.
  - Indigo: Algorithmic prediction, neural inference, pipeline orchestration.

### Slide Deck Navigation & HUD Header/Footer
- Fixed slide-deck navigation elements positioned in the header rail: segmented step indicator displaying active slide index with progressive blue progress bars.
- Category indicators structured as monospaced tags: `[01 // SYSTEM_ARCHITECTURE]`.

### Data Tables & Spec Grids
- Alternating row fills (`#0B0F19` and `#0F172A`) with subtle 1px divider lines in `#1E293B`.
- Numeric cells strictly right-aligned; column headers left-aligned in uppercase `label-md` with neutral `#94A3B8` styling.
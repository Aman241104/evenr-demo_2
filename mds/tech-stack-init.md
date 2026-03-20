# Tech Stack Initialization: Zing Bliss Events (Prestige Edition)

This document specifies the technical configurations for the "Ivory & Verdant" luxury event planning website.

---

## 1. Core Framework: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (Alpha/Experimental features where applicable for performance).
- **Language**: TypeScript (Strict Mode).
- **Package Manager**: `npm`.

---

## 2. Animation Engine: GSAP (GreenSock)
- **Plugins**: 
  - `ScrollTrigger`: For scroll-synced reveals.
  - `ScrollToPlugin`: For smooth navigation.
  - `@gsap/react`: Official GSAP hooks for React (useGSAP).
- **Motion Patterns**:
  - `TextReveal`: Staggered letter/word entrance.
  - `ParallaxImage`: Scroll-synced image scaling/movement.
  - `MagneticElement`: Hover-triggered "attraction" to the cursor.

---

## 3. Styling: Tailwind CSS v4 (Modern Theme Engine)
- **Theme Variables**:
  - `primary`: `#004B23` (Verdant Green - Brand Logo)
  - `secondary`: `#F5F5F0` (Ivory Paper)
  - `accent`: `#D4AF37` (Heritage Gold)
- **Custom Utilities**:
  - `text-prestige`: Custom serif font with high-contrast tracking.
  - `mask-reveal`: Custom clip-path animations for image reveals.

---

## 4. Initialization Command
To initialize the project, run:
```bash
npx create-next-app@latest . \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm \
  --yes
```

---

## 5. Directory Structure (Atomic Design)
```text
src/
├── app/          # App Router (Pages & API)
├── components/
│   ├── atoms/     # Buttons, Icons, RevealText
│   ├── molecules/ # Cards, Navigation Items
│   ├── organisms/ # Navbar, Footer, Hero Section
│   └── templates/ # Page Layouts
├── lib/          # GSAP Utils, Formatting
├── hooks/        # Custom Animation Hooks
└── styles/       # Tailwind v4 globals.css
```

---
*Created for Zing Bliss Events — Prestige Edition*

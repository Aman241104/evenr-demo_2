# Prestige Refinement Plan: Sensory Excellence

Building on the bespoke editorial foundation, this plan introduces "silent ambassadors" of brand quality—subtle, high-fidelity details that signal 2026 luxury standards.

---

## 1. The "Ghost" Navigation (Intent-Based UI)
*Goal: Remove visual clutter until the user explicitly needs it.*
- **Logic**: The `Navbar` will now be a "Ghost" navbar. It is transparent/invisible by default and only slides down with a frosted glass effect when the user scrolls *up* (intent to navigate) or when the mouse reaches the top of the screen.

## 2. Image "Bloom" Interaction (Grayscale to Color)
*Goal: Reward the user's attention.*
- **Implementation**: Gallery images and hero visuals will start with a high-contrast grayscale filter. As they enter the viewport or are hovered over, they will "bloom" into full color using a smooth GSAP transition, signaling that the content is being "unlocked."

## 3. Kinetic Typographic Layers (Variable Depth)
*Goal: Create a living environment.*
- **Variable Font Weight**: Introduce a variable font (like *Playfair Display Variable*) and animate the weight/optical size on scroll using GSAP ScrollTrigger.
- **Micro-Marquee Footer**: Add an ultra-slow, elegant brand marquee in the `Footer` to create atmospheric motion.

## 4. Cursor "Lens" Logic (Inversion)
*Goal: Interaction as a tool.*
- **Mix-Blend-Mode**: Update the `CustomCursor` to use `mix-blend-mode: difference` so it inverts the background color, creating a "lens" effect over text and imagery.
- **View Labels**: When hovering over gallery items, the cursor will expand and display a delicate "VIEW" or "RECORD" label.

## 5. Momentum Physics (Weighted Scroll)
*Goal: Signal "expensive" quality through physics.*
- **Lenis Refinement**: Adjust the `SmoothScroll` provider to have a "heavy" momentum (lower duration, higher easing), preventing accidental flick-scrolling and forcing a more deliberate appreciation of the editorial layout.

---

## Immediate Next Steps:
1.  **Refactor Custom Cursor**: Implement `mix-blend-mode` and "VIEW" labels.
2.  **Implement Grayscale Bloom**: Update `BentoCard` and `MaskSlideImage`.
3.  **Refactor Navbar**: Implement "Ghost" logic (scroll-up reveal).

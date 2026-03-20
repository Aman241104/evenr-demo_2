# Bespoke Refinement Plan: De-AI the Visual Narrative

The objective is to shift **Zing Bliss Events** from a "polished template" look to a "bespoke editorial" experience. This plan focuses on intentional asymmetry, tactile depth, and human-centric design signals.

---

## 1. Tactile Materiality (The "Paper" Feel)
*Goal: Remove the "flat digital" look with organic texture.*
- **Global Noise Overlay**: Add a subtle, animated SVG grain filter over the entire site.
- **Material Transitions**: Instead of simple wipes, use page transitions that mimic physical material (e.g., a paper fold or a high-contrast ink bleed).

## 2. Editorial Typography (The "Magazine" Logic)
*Goal: Use typography as a structural element, not just for information.*
- **Asymmetrical Headers**: Break the centered layout. Use oversized serif headers that are partially cut off or overlap with other elements.
- **Micro-Kerning**: Apply intentional letter-spacing shifts to highlight key brand words.
- **Ink-Trap Aesthetics**: If possible, swap to a font with more "human" character or adjust line-heights to feel like a high-end publication.

## 3. The "Anti-Grid" Layout
*Goal: Break the predictability of standard rows and columns.*
- **Broken Gallery**: Shift the `BentoGallery` from a rigid grid to an overlapping "Broken Grid" where images have varying margins and scales.
- **Layered Elements**: Use `z-index` and `mix-blend-mode: difference` to overlap text and imagery, creating visual depth.

## 4. Purposeful Motion (Human Error/Intent)
*Goal: Move away from "perfectly smooth" algorithmic motion.*
- **Variable Easing**: Use more aggressive `expo.inOut` or `custom` eases that have a "snappy yet weighted" feel.
- **Cursor Fluidity**: Refine the custom cursor to have a slight "drag" or "liquid" lag, making it feel more organic.
- **Randomized Staggers**: Add slight randomness to text reveal staggers so they don't feel perfectly linear.

## 5. Intentional Assets
*Goal: Move away from generic stock looks.*
- **Custom Overlays**: Add "lens flare" or "film dust" overlays to hero images to mimic analog photography.
- **Monochrome Accents**: Use high-contrast black/white sections with single verdant green focus points.

---

## Immediate Next Steps:
1.  **Implement Noise Grain**: Create a global CSS noise overlay.
2.  **Refactor Home Hero**: Shift to an asymmetrical layout with overlapping typography.
3.  **Update Bento Gallery**: Introduce "Broken Grid" offsets.

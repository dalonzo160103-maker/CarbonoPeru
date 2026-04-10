```markdown
# Design System Documentation: Velocity & Precision

## 1. Overview & Creative North Star: "The Velocity Apex"
This design system is engineered to transform a standard e-commerce interface into a high-performance digital machine. The Creative North Star is **The Velocity Apex**—a concept rooted in the moment a racing driver hits the perfect line through a corner: high tension, absolute precision, and raw power.

To move beyond the "template" look, we abandon the safety of symmetrical grids and soft edges. We embrace **Kinetic Asymmetry**—where elements feel like they are moving at 300km/h. We achieve this through overlapping "carbon" layers, aggressive italicized typography that leans into the future, and a total rejection of rounded corners. This is not a store; it is a digital pit lane for the elite.

---

## 2. Colors & Surface Architecture
The palette is a high-contrast study in "After-Dark" racing. It utilizes deep blacks and asphalt grays to provide a foundation for the "Racing Red" pulse.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be created through tonal shifts. A section does not "end" with a line; it transitions from `surface` (#131313) to `surface-container-low` (#1C1B1B). This mimics the seamless integration of automotive body panels.

### Surface Hierarchy & Nesting
Treat the UI as a mechanical assembly. Use the surface-container tiers to create functional depth:
*   **Base Layer:** `surface` (#131313) for the main canvas.
*   **The "Carbon" Layer:** `surface-container-lowest` (#0E0E0E) for deep, recessed content areas or "textured" backgrounds.
*   **The "Machined" Layer:** `surface-container-high` (#2A2A2A) for interactive cards that need to "rise" toward the user.

### Glass & Gradient (The "Heat" Rule)
To prevent the dark mode from feeling "flat," use Glassmorphism for floating navigation and overlays. Use `surface_bright` at 60% opacity with a `20px` backdrop blur. 
*   **Signature Gradients:** Apply a subtle linear gradient to main CTAs (transitioning from `primary_container` #E4002B to `on_primary_fixed_variant` #930018). This simulates the "glow" of hot brake discs or LED taillights.

---

## 3. Typography: The Aero Scale
Typography is our primary tool for conveying speed. We pair the technical precision of **Inter** with the aggressive, wide stance of **Space Grotesk**.

*   **Display & Headlines (Space Grotesk):** Must always be bold and **italicized**. The lean of the text creates a visual "slipstream" effect. Use `display-lg` for hero statements, ensuring tight letter spacing (-0.02em) to mimic high-pressure engineering.
*   **Body & Utility (Inter):** Use for technical specs and descriptions. It must remain upright and clean to provide a sober, "data-driven" contrast to the aggressive headings.
*   **The "Telemetry" Label:** Use `label-md` in all-caps with increased letter spacing (+0.1em) for category tags or product SKUs, mimicking the readouts on a racing steering wheel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "soft" for this brand. We use **Physical Stacking**.

*   **The Layering Principle:** Instead of a drop shadow, place a `surface-container-highest` (#353534) card on top of a `surface-container-lowest` (#0E0E0E) background. The contrast in value creates a "hard" lift.
*   **Ambient Shadows:** If a component must float (e.g., a high-end turbocharger image), use a shadow tinted with `primary_container` at 5% opacity. The blur should be massive (64px) to create a "glow" rather than a "shadow."
*   **Ghost Borders:** For accessibility in form fields, use the `outline_variant` token at **15% opacity**. It should be barely felt, like a reflection on a windshield.

---

## 5. Components: The Machined Aesthetic

### Buttons (The "Ignition" Variant)
*   **Structure:** 0px border radius. No exceptions.
*   **Primary:** `primary_container` (#E4002B) background. Text is `on_primary_container`. On hover, the background shifts to a bright `primary` (#FFB3AF) to simulate "lighting up."
*   **Tertiary:** Transparent background with a `primary_container` bottom-heavy underline (2px) to denote "active" speed.

### Input Fields
*   **Style:** No 4-sided boxes. Use a `surface-container-highest` background with a 2px bottom-border in `outline_variant`. 
*   **Focus State:** The bottom border transforms into `primary_container` (#E4002B), glowing with a subtle red outer shadow.

### Cards & Lists (The "Gridless" Card)
*   **Rule:** Forbid divider lines.
*   **Execution:** Separate products in a list using alternating backgrounds (`surface-container-low` vs `surface-container-lowest`) or a significant `32px` vertical gap.
*   **Image Treatment:** Products should be "cut-outs" (PNGs) that overlap the edges of their containers, breaking the box and creating a 3D, high-end editorial feel.

### Additional Component: The "Performance Gauge"
*   **Purpose:** For product technical specs (Horsepower, Torque).
*   **Design:** A horizontal bar using `primary_container` as the fill and `surface-container-highest` as the track. Use sharp, vertical "ticks" to indicate data points.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use 0px radius for everything. Sharpness equals precision.
*   **Do** use aggressive negative space. Let the products breathe like they are on a showroom floor.
*   **Do** lean into italics for anything related to "Action" or "Speed."
*   **Do** use high-quality, high-contrast photography with "Asphalt" textures.

### Don't:
*   **Don't** use a standard 12-column grid. Try pushing a headline off-center or overlapping an image over two sections.
*   **Don't** use "Soft" colors. If it's not deep black, asphalt gray, or racing red, it doesn't belong.
*   **Don't** use standard icons. Use custom, thin-stroke (1px or 1.5px) technical icons that look like blueprints.
*   **Don't** use "Spring" or "Bounce" animations. Use "Linear" or "Ease-In" transitions that feel mechanical and heavy.

---

**Director’s Final Note:** This system is about the "uncompromising." Every pixel should feel like it was designed to withstand high G-forces. If a design element feels "safe" or "comfortable," delete it and sharpen the edges.```
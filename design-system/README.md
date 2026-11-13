# Monochrome design system

The gallery's reusable visual foundation lives in `tokens.css`, `global.css`, and `primitives.module.css`. Copy this directory into another CSS Modules app, import `global.css` once at the root, and put `data-theme="light"` or `data-theme="dark"` on the app shell. All semantic colors and layout values use the `--ds-` prefix, so the design does not depend on Tailwind or a component library.

Import `styles` from `design-system` to compose the atomic primitives: `page`, `container`, `stack`, `cluster`, `split`, `eyebrow`, `display`, `heading`, `body`, `muted`, `rule`, `button`, `buttonSolid`, `iconButton`, `textLink`, and `surface`. For example, `<main className={styles.page} data-theme="dark">` provides the theme context, while `<div className={styles.container}>` sets the consistent content width.

Use component-local CSS Modules for artwork-specific composition. Change semantic tokens in `tokens.css` to reskin the system; avoid hardcoded colors and spacing in feature components. The tokens include both palettes, a fluid type scale, spacing, motion, and focus behavior. Reduced-motion preferences are handled globally.

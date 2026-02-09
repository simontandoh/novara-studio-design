# Performance Notes

## Summary
The pass below targets Lighthouse 90+ by reducing initial JS work, preventing layout shift, and tightening asset loading without changing the design.

## Changes
- Code splitting: routes now load with `React.lazy` and `Suspense` to reduce initial JS payload.
- Background optimization: the WebGL space background is lazy-loaded only when needed.
- Font loading: preloaded primary font weights for faster first render.
- CLS prevention: fixed logo dimensions and stabilized testimonial height.
- Scroll behavior: removed mandatory scroll snapping to reduce scroll-jank on mobile.
- Reduced motion: added global `prefers-reduced-motion` handling to avoid costly animations.

## Follow-ups (optional)
- Convert `ttf` fonts to `woff2` for a smaller payload.
- Replace any large imagery with responsive formats where possible.

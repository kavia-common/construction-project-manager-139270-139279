# Figma Screens Integration

This folder contains React components converted from static HTML/CSS extracted from Figma:
- NarrowAds.jsx (from assets/narrow-ads-7-2.html)
- SaleAds.jsx (from assets/sale-ads-13-23.html)
- Banners.jsx (from assets/banners-screen-2-2.html)

Shared logic/styles:
- Scaling hook: src/hooks/useCanvasScaler.js (ported from assets/app.js)
- Design tokens and utilities: src/styles/figma/common.css

Usage:
- The App has simple in-app routing to preview screens:
  - /figma/narrow-ads
  - /figma/sale-ads
  - /figma/banners
- Or import components directly:
  import NarrowAds from './components/figmaScreens/NarrowAds';

Assets:
- Image assets are referenced via /assets/... and must be available under the CRA public folder.
- If not already copied, place images from /assets/figmaimages/* into construction_frontend/public/assets/ with the same filenames.

Notes:
- Layouts are absolutely positioned to match Figma coordinates and wrapped with a scaler that preserves aspect ratio on smaller viewports.
- If you customize the design width, pass a new designWidth to useCanvasScaler.

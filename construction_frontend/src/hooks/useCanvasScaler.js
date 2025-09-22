import { useEffect, useCallback } from 'react';

/**
 * PUBLIC_INTERFACE
 * useCanvasScaler
 * A React hook that applies a scale transform to an element to fit a fixed-width design canvas inside the viewport.
 * - Mirrors logic from assets/app.js
 * - Ensures wrapper height adjusts to scaled canvas for vertical scroll
 *
 * Params:
 * - designWidth: number (the original canvas width in px, default 1523)
 * - containerId: string (id of scaler container element)
 * - canvasId: string (id of the canvas element whose height informs the wrapper height)
 *
 * Usage:
 *   useCanvasScaler({ designWidth: 1523, containerId: 'scale-container', canvasId: 'root-frame' });
 */
export default function useCanvasScaler({
  designWidth = 1523,
  containerId = 'scale-container',
  canvasId = 'root-frame',
} = {}) {
  const applyScale = useCallback(() => {
    const scaler = document.getElementById(containerId);
    if (!scaler) return;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const scale = Math.min(1, vw / designWidth);
    scaler.style.transform = `scale(${scale})`;
    scaler.style.transformOrigin = 'top left';

    const canvas = document.getElementById(canvasId);
    if (canvas && scaler.parentElement) {
      scaler.parentElement.style.height = `${canvas.offsetHeight * scale}px`;
    }
  }, [canvasId, containerId, designWidth]);

  useEffect(() => {
    // Initial application
    applyScale();
    // Bind listeners
    window.addEventListener('resize', applyScale);
    window.addEventListener('orientationchange', applyScale);
    // Cleanup
    return () => {
      window.removeEventListener('resize', applyScale);
      window.removeEventListener('orientationchange', applyScale);
    };
  }, [applyScale]);
}

# Hooks

- useCanvasScaler: Scales a fixed-size design canvas to fit the viewport width and adjusts the wrapper height. Ported from `assets/app.js`.

Usage:
```
import useCanvasScaler from './useCanvasScaler';

function Screen() {
  useCanvasScaler({ designWidth: 1523, containerId: 'scale-container', canvasId: 'root-frame' });
  return <div id="scale-container"><div id="root-frame">...</div></div>;
}
```

import React, { useEffect } from 'react';
import useCanvasScaler from '../../hooks/useCanvasScaler';
import '../../styles/figma/common.css';
import './narrow-ads-7-2.css';

/**
 * PUBLIC_INTERFACE
 * NarrowAds
 * React component rendering the "Narrow ads - 7:2" Figma screen.
 * Includes pixel-aligned absolute positioning and scaling to fit viewport while preserving aspect.
 *
 * Notes:
 * - Images referenced in CSS use relative paths from the CSS file. Ensure assets/figmaimages are served (placed in public).
 */
const NarrowAds = () => {
  useCanvasScaler({ designWidth: 1523, containerId: 'scale-container', canvasId: 'root-frame' });

  // Optional: ensure fonts if required via webfont, but app will fallback gracefully.
  useEffect(() => {
    // Could dynamically add Google Fonts if needed.
  }, []);

  return (
    <div className="canvas-wrapper">
      <div id="scale-container" className="canvas-scaler">
        <div id="root-frame" className="canvas style-0 ds-bg-dfdfdf" role="main" aria-label="Narrow ads canvas">

          {/* Add to cart small narrow (14:15) */}
          <div id="comp-14-15" className="component abs" style={{ backgroundColor: 'transparent' }}>
            <div className="rect-8-3 abs style-1" />
            <div className="text-8-4 abs text-typo-23">Product type</div>
            <div className="text-8-5 abs text-typo-22">Name, size/weight, materials</div>
            <div className="price-8-6 abs text-typo-24">$00.00</div>
            <div className="frame-8-10 abs frame-center style-2">
              <div className="label-8-8 button-label text-typo-25">Add to cart</div>
            </div>
            <div className="img-8-11 abs image" style={{ backgroundImage: 'url(/assets/figma_image_8_11.png)' }} />
          </div>

          {/* Choose options small narrow (14:16) */}
          <div id="comp-14-16" className="component abs">
            <div className="rect-8-12 abs style-1" />
            <div className="text-8-13 abs text-typo-23">Product type</div>
            <div className="text-8-14 abs text-typo-22">Name, materials</div>
            <div className="price-8-15 abs text-typo-24">$00.00</div>
            <div className="frame-8-16 abs frame-center style-2">
              <div className="label-8-17 button-label text-typo-25">Choose options</div>
            </div>
            <div className="img-8-18 abs image" style={{ backgroundImage: 'url(/assets/figma_image_8_18.png)' }} />
          </div>

          {/* Sold out small narrow (14:17) */}
          <div id="comp-14-17" className="component abs">
            <div className="rect-8-19 abs style-1" />
            <div className="text-8-20 abs text-typo-23">Product type</div>
            <div className="text-8-21 abs text-typo-22">Name, size/weight, materials</div>
            <div className="price-8-22 abs text-typo-24">$00.00</div>
            <div className="frame-8-23 abs frame-center style-4">
              <div className="label-8-24 button-label text-typo-25">Sold Out</div>
            </div>
            <div className="img-8-25 abs image" style={{ backgroundImage: 'url(/assets/figma_image_8_25.png)' }} />
          </div>

          {/* Add to Cart tall narrow (14:18) */}
          <div id="comp-14-18" className="component abs">
            <div className="rect-13-2 abs style-1" />
            <div className="text-13-3 abs text-typo-23">Product type</div>
            <div className="text-13-4 abs text-typo-22">Name, size/weight, materials</div>
            <div className="price-13-5 abs text-typo-24">$00.00</div>
            <div className="frame-13-6 abs frame-center style-2">
              <div className="label-13-7 button-label text-typo-25">Add to cart</div>
            </div>
            <div className="img-13-8 abs image" style={{ backgroundImage: 'url(/assets/figma_image_13_8.png)' }} />
          </div>

          {/* Choose Options tall narrow (14:19) */}
          <div id="comp-14-19" className="component abs">
            <div className="rect-13-9 abs style-1" />
            <div className="text-13-10 abs text-typo-23">Product type</div>
            <div className="text-13-11 abs text-typo-22">Name, materials</div>
            <div className="price-13-12 abs text-typo-24">$00.00</div>
            <div className="frame-13-13 abs frame-center style-2">
              <div className="label-13-14 button-label text-typo-25">Choose options</div>
            </div>
            <div className="img-13-15 abs image" style={{ backgroundImage: 'url(/assets/figma_image_13_15.png)' }} />
          </div>

          {/* Sold Out tall narrow (14:20) */}
          <div id="comp-14-20" className="component abs">
            <div className="rect-13-16 abs style-1" />
            <div className="text-13-17 abs text-typo-23">Product type</div>
            <div className="text-13-18 abs text-typo-22">Name, size/weight, materials</div>
            <div className="price-13-19 abs text-typo-24">$00.00</div>
            <div className="frame-13-20 abs frame-center style-4">
              <div className="label-13-21 button-label text-typo-25">Sold Out</div>
            </div>
            <div className="img-13-22 abs image" style={{ backgroundImage: 'url(/assets/figma_image_13_22.png)' }} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default NarrowAds;

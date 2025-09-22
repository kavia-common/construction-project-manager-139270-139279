import React from 'react';
import useCanvasScaler from '../../hooks/useCanvasScaler';
import '../../styles/figma/common.css';
import './banners-screen-2-2.css';

/**
 * PUBLIC_INTERFACE
 * Banners
 * React component rendering the "Banners - screen 2:2" Figma screen.
 */
const Banners = () => {
  useCanvasScaler({ designWidth: 1523, containerId: 'scale-container', canvasId: 'root-frame' });

  return (
    <div className="canvas-wrapper">
      <div id="scale-container" className="canvas-scaler">
        <div id="root-frame" className="canvas style-0 ds-bg-dfdfdf" role="main" aria-label="Banners canvas">

          {/* Single Product Banners (title) */}
          <div id="text-6-40" className="abs typo-35" style={{ left: -626, top: -376, width: 471, height: 55 }}>
            Single Product Banners
          </div>

          {/* Add to cart banner */}
          <div id="comp-5-35" className="component abs" style={{ left: -593, top: -297, width: 1330, height: 240 }}>
            <div className="rect-2-3 abs ds-shadow-0" style={{ left: 0, top: 0, width: 1330, height: 240, backgroundColor: 'var(--color-ffffff)' }} />
            <div className="img-4-4 abs bg-image" style={{ left: 33, top: 22, width: 452, height: 202, backgroundImage: 'url("/assets/figma_image_4_4.png")' }} />
            <div className="text-5-9 abs typo-23" style={{ left: 511, top: 32, width: 268, height: 35 }}>Construction products</div>
            <div className="text-5-11 abs typo-22" style={{ left: 511, top: 77, width: 485, height: 40 }}>Chicken wire, 400gsm, 1.5x30m roll, zinc</div>
            <div className="price-5-15 abs typo-24" style={{ left: 511, top: 135, width: 65, height: 27 }}>$79</div>
            <div className="frame-5-18 abs frame-center ds-radius-5" style={{ left: 1055, top: 52, width: 228, height: 136, backgroundColor: 'var(--color-f3752b)' }}>
              <div className="label-5-17 typo-38" style={{ color: 'var(--color-ffffff)' }}>Add to cart</div>
            </div>
          </div>

          {/* Sold out banner */}
          <div id="comp-5-37" className="component abs" style={{ left: -594, top: 283, width: 1330, height: 240 }}>
            <div className="rect-5-27 abs ds-shadow-0" style={{ left: 0, top: 0, width: 1330, height: 240, backgroundColor: 'var(--color-ffffff)' }} />
            <div className="img-5-29 abs bg-image" style={{ left: 33, top: 22, width: 452, height: 202, backgroundImage: 'url("/assets/figma_image_5_29.png")' }} />
            <div className="text-5-28 abs typo-23" style={{ left: 511, top: 32, width: 268, height: 35 }}>Construction products</div>
            <div className="text-5-30 abs typo-22" style={{ left: 511, top: 77, width: 485, height: 40 }}>Chicken wire, 400gsm, 1.5x30m roll, zinc</div>
            <div className="price-5-31 abs typo-24" style={{ left: 511, top: 135, width: 65, height: 27 }}>$79</div>
            <div className="frame-5-32 abs frame-center ds-radius-5" style={{ left: 1055, top: 52, width: 228, height: 136, backgroundColor: 'var(--color-707070)' }}>
              <div className="label-5-33 typo-38" style={{ color: 'var(--color-ffffff)' }}>Sold Out!</div>
            </div>
          </div>

          {/* Brand Banners (title) */}
          <div id="text-6-41" className="abs typo-35" style={{ left: -627, top: 596, width: 330, height: 55 }}>
            Brand Banners
          </div>

          {/* Brand banner */}
          <div id="comp-14-14" className="component abs" style={{ left: -593, top: 688, width: 1330, height: 240 }}>
            <div className="rect-5-39 abs ds-shadow-1" style={{ left: 0, top: 0, width: 1330, height: 240, backgroundColor: 'var(--color-ffffff)' }} />
            <div className="rect-6-42 abs" style={{ left: 38, top: 22, width: 201, height: 188, backgroundColor: 'var(--color-d9d9d9)' }} />
            <div className="img-6-43 abs bg-image" style={{ left: 0, top: 0, width: 259, height: 240, backgroundImage: 'url("/assets/figma_image_6_43.png")' }} />
            <div className="headline-6-45 abs typo-36" style={{ left: 288, top: 30, width: 995, height: 103 }}>Fast, reliable supplies</div>
            <div className="subhead-6-49 abs typo-37" style={{ left: 288, top: 150, width: 917, height: 27 }}>Where you find what you need, when you need it.</div>
          </div>

          {/* Discount Banners (title) */}
          <div id="text-14-113" className="abs typo-35" style={{ left: -590, top: 1077, width: 330, height: 55 }}>
            Discount Banners
          </div>

          {/* Sale banner */}
          <div id="comp-14-98" className="component abs" style={{ left: -594, top: 1219, width: 1330, height: 240 }}>
            <div className="rect-14-80 abs ds-shadow-0" style={{ left: 0, top: 0, width: 1330, height: 240, backgroundColor: 'var(--color-ffffff)' }} />
            <div className="badge-14-85 abs" style={{ left: 33, top: 23, width: 199.8735, height: 193.1247 }}>
              <div className="star abs" style={{ left: 0, top: 0, width: 199.8735, height: 193.1247, backgroundColor: 'var(--color-f3752b)', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
              <div className="pct abs typo-26" style={{ left: 61.5503, top: 70, width: 76.7501, height: 29.1898, color: 'var(--color-ffffff)' }}>10%</div>
              <div className="off abs typo-27" style={{ left: 71, top: 102, width: 58, height: 45, color: 'var(--color-ffffff)' }}>OFF!</div>
            </div>
            <div className="img-14-83 abs bg-image" style={{ left: 289, top: 8, width: 337, height: 223, backgroundImage: 'url("/assets/figma_image_13_65.png")' }} />
            <div className="kicker-14-84 abs typo-30" style={{ left: 662, top: 49, width: 212, height: 35 }}>cleaning products</div>
            <div className="title-14-89 abs typo-31" style={{ left: 662, top: 97, width: 250, height: 40 }}>Sugar soap bar, 100g</div>
            <div className="now-14-95 abs typo-32" style={{ left: 1003, top: 25, width: 71, height: 48 }}>NOW</div>
            <div className="price-14-97 abs typo-33" style={{ left: 1003, top: 67, width: 286, height: 100 }}>$2.61</div>
            <div className="was-14-96 abs typo-32" style={{ left: 1137, top: 179, width: 138, height: 48 }}>Was $2.90</div>
            <div className="sku-14-90 abs" style={{ left: 662, top: 152, width: 139, height: 36, fontFamily: 'var(--font-istok-web)', fontSize: 25, fontWeight: 400, lineHeight: '35.9863px', color: 'var(--color-9c9a9a)' }}>
              SKU: 131798
            </div>
          </div>

          {/* Hover Sale banner */}
          <div id="comp-14-112" className="component abs" style={{ left: -594, top: 1522, width: 1330, height: 240 }}>
            <div className="rect-i14-99-14-80 abs ds-shadow-0" style={{ left: 0, top: 0, width: 1330, height: 240, backgroundColor: 'var(--color-ffffff)' }} />
            <div className="badge-i14-99-14-85 abs" style={{ left: 33, top: 23, width: 199.8735, height: 193.1247 }}>
              <div className="star abs" style={{ left: 0, top: 0, width: 199.8735, height: 193.1247, backgroundColor: 'var(--color-f3752b)', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
              <div className="pct abs typo-26" style={{ left: 61.5503, top: 70, width: 76.7501, height: 29.1898, color: 'var(--color-ffffff)' }}>10%</div>
              <div className="off abs typo-27" style={{ left: 71, top: 102, width: 58, height: 45, color: 'var(--color-ffffff)' }}>OFF!</div>
            </div>
            <div className="img-i14-99-14-83 abs bg-image" style={{ left: 289, top: 8, width: 337, height: 223, backgroundImage: 'url("/assets/figma_image_14_99_14_83.png")' }} />
            <div className="kicker-i14-99-14-84 abs typo-30" style={{ left: 662, top: 49, width: 212, height: 35 }}>cleaning products</div>
            <div className="title-i14-99-14-89 abs typo-31" style={{ left: 662, top: 97, width: 250, height: 40 }}>Sugar soap bar, 100g</div>
            <div className="now-i14-99-14-95 abs typo-32" style={{ left: 1003, top: 25, width: 71, height: 48 }}>NOW</div>
            <div className="price-i14-99-14-97 abs typo-33" style={{ left: 1003, top: 70, width: 286, height: 100 }}>$2.61</div>
            <div className="was-i14-99-14-96 abs typo-32" style={{ left: 1137, top: 179, width: 138, height: 48 }}>Was $2.90</div>
            <div className="sku-i14-99-14-90 abs" style={{ left: 662, top: 152, width: 139, height: 36, fontFamily: 'var(--font-istok-web)', fontSize: 25, fontWeight: 400, lineHeight: '35.9863px', color: 'var(--color-9c9a9a)' }}>
              SKU: 131798
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banners;

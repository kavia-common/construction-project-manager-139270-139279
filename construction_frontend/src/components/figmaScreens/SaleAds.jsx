import React from 'react';
import useCanvasScaler from '../../hooks/useCanvasScaler';
import '../../styles/figma/common.css';
import './sale-ads-13-23.css';

/**
 * PUBLIC_INTERFACE
 * SaleAds
 * React component rendering the "Sale ads - 13:23" Figma screen.
 * Preserves absolute positioned layout and applies scaling to fit viewport width up to design width.
 */
const SaleAds = () => {
  useCanvasScaler({ designWidth: 1523, containerId: 'scale-container', canvasId: 'root-frame' });

  return (
    <div className="canvas-wrapper">
      <div id="scale-container" className="canvas-scaler">
        <div id="root-frame" className="canvas style-0 ds-bg-dfdfdf" role="main" aria-label="Sale ads canvas">

          {/* Black discount (14:61) */}
          <div id="comp-14-61" className="component abs" aria-label="Black discount badge">
            <div className="star abs style-3" />
            <div className="text-14-12 abs typo-26">10%</div>
            <div className="text-14-13 abs typo-27">OFF!</div>
          </div>

          {/* Orange discount (14:60) */}
          <div id="comp-14-60" className="component abs" aria-label="Orange discount badge">
            <div className="star abs style-2" />
            <div className="text-14-7 abs typo-26">10%</div>
            <div className="text-14-8 abs typo-27">OFF!</div>
          </div>

          {/* Small great deals here (14:59) */}
          <div id="comp-14-59" className="component abs" aria-label="Small great deals tag">
            <div className="group-13-92 abs">
              <div className="rect-13-89 abs ds-radius-1" />
              <div className="poly-13-90 abs ds-radius-1" />
            </div>
            <div className="label-13-93 abs typo-28">Great deals here!</div>
          </div>

          {/* Large Great deals here (14:58) */}
          <div id="comp-14-58" className="component abs" aria-label="Large great deals tag">
            <div className="frame-13-83 abs style-2 frame-center">
              <div className="label-13-84 typo-29">Great{'\n'}deals here!</div>
            </div>
            <div className="poly-13-85 abs style-2" />
          </div>

          {/* Sold out Discount tall narrow ad (14:79) */}
          <div id="comp-14-79" className="component abs" aria-label="Sold out discount tall narrow ad card">
            <div className="rect-14-23 abs style-1" />
            <div id="inst-14-70" className="badge abs" aria-label="Discount badge">
              <div className="star abs style-2" />
              <div className="pct abs typo-26">10%</div>
              <div className="off abs typo-27">OFF!</div>
            </div>
            <div className="img-14-41 abs bg-image" role="img" aria-label="Product image" style={{ backgroundImage: 'url(/assets/figma_image_14_41.png)' }} />
            <div className="title-14-26 abs typo-23" aria-label="Product type">Product type</div>
            <div className="desc-14-29 abs typo-22">Name, size/weight, materials</div>
            <div className="price-14-32 abs typo-24">$00.00</div>
            <div className="cta-14-37 abs style-4 frame-center">
              <div className="cta-label typo-25">Sold Out</div>
            </div>
          </div>

          {/* Choose options Discount tall narrow ad (14:78) */}
          <div id="comp-14-78" className="component abs" aria-label="Choose options discount tall narrow ad card">
            <div className="rect-14-22 abs style-1" />
            <div id="inst-14-66" className="badge abs" aria-label="Discount badge">
              <div className="star abs style-2" />
              <div className="pct abs typo-26">10%</div>
              <div className="off abs typo-27">OFF!</div>
            </div>
            <div className="img-14-40 abs bg-image" role="img" aria-label="Product image" style={{ backgroundImage: 'url(/assets/figma_image_14_40.png)' }} />
            <div className="title-14-25 abs typo-23">Product type</div>
            <div className="desc-14-28 abs typo-22">Name, materials</div>
            <div className="price-14-31 abs typo-24">$00.00</div>
            <div className="cta-14-35 abs style-2 frame-center">
              <div className="cta-label typo-25">Choose options</div>
            </div>
          </div>

          {/* Add to cart Discount tall narrow ad (14:77) */}
          <div id="comp-14-77" className="component abs" aria-label="Add to cart discount tall narrow ad card">
            <div className="rect-14-21 abs style-1" />
            <div id="inst-14-62" className="badge abs" aria-label="Discount badge">
              <div className="star abs style-2" />
              <div className="pct abs typo-26">10%</div>
              <div className="off abs typo-27">OFF!</div>
            </div>
            <div className="img-14-39 abs bg-image" role="img" aria-label="Product image" style={{ backgroundImage: 'url(/assets/figma_image_14_39.png)' }} />
            <div className="title-14-24 abs typo-23">Product type</div>
            <div className="desc-14-27 abs typo-22">Name, size/weight, materials</div>
            <div className="price-14-30 abs typo-24">$00.00</div>
            <div className="cta-14-33 abs style-2 frame-center">
              <div className="cta-label typo-25">Add to cart</div>
            </div>
          </div>

          {/* Sold Out On sale now tall narrow (14:76) */}
          <div id="comp-14-76" className="component abs" aria-label="Sold Out on sale now tall narrow ad">
            <div className="rect-13-29 abs style-1" />
            <div className="img-13-65 abs bg-image" role="img" aria-label="Product image" style={{ backgroundImage: 'url(/assets/figma_image_13_65.png)' }} />
            <div className="banner-group-13-78 abs">
              <div className="banner-13-79 abs style-2 frame-center">
                <div className="banner-label-13-80 typo-27">On Sale Now!</div>
              </div>
              <div className="banner-poly-13-81 abs style-2" />
            </div>
            <div className="title-13-35 abs typo-23">Product type</div>
            <div className="desc-13-41 abs typo-22">Name, size/weight, materials</div>
            <div className="price-13-47 abs typo-24">$00.00</div>
            <div className="cta-13-58 abs style-4 frame-center">
              <div className="cta-label typo-25">Sold Out</div>
            </div>
          </div>

          {/* Choose options On sale now tall narrow (14:75) */}
          <div id="comp-14-75" className="component abs" aria-label="Choose options on sale now tall narrow ad">
            <div className="rect-13-27 abs style-1" />
            <div className="img-13-63 abs bg-image" role="img" aria-label="Product image" style={{ backgroundImage: 'url(/assets/figma_image_13_63.png)' }} />
            <div className="banner-group-13-74 abs">
              <div className="banner-13-75 abs style-2 frame-center">
                <div className="banner-label-13-76 typo-27">On Sale Now!</div>
              </div>
              <div className="banner-poly-13-77 abs style-2" />
            </div>
            <div className="title-13-33 abs typo-23">Product type</div>
            <div className="desc-13-39 abs typo-22">Name, materials</div>
            <div className="price-13-45 abs typo-24">$00.00</div>
            <div className="cta-13-54 abs style-2 frame-center">
              <div className="cta-label typo-25">Choose options</div>
            </div>
          </div>

          {/* Add to cart On sale now tall narrow (14:74) */}
          <div id="comp-14-74" className="component abs" aria-label="Add to cart on sale now tall narrow ad">
            <div className="rect-13-25 abs style-1" />
            <div className="img-13-61 abs bg-image" role="img" aria-label="Product image" style={{ backgroundImage: 'url(/assets/figma_image_13_61.png)' }} />
            <div className="banner-group-13-72 abs">
              <div className="banner-13-68 abs style-2 frame-center">
                <div className="banner-label-13-67 typo-27">On Sale Now!</div>
              </div>
              <div className="banner-poly-13-70 abs style-2" />
            </div>
            <div className="title-13-31 abs typo-23">Product type</div>
            <div className="desc-13-37 abs typo-22">Name, size/weight, materials</div>
            <div className="price-13-43 abs typo-24">$00.00</div>
            <div className="cta-13-50 abs style-2 frame-center">
              <div className="cta-label typo-25">Add to cart</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SaleAds;

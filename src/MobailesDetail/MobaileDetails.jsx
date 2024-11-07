import React from "react";
import ProductCardFive from "./ProductCardTwo";
import fhgcfthg from "../imagesAll/c.jpg";
import dhdffrhd1231 from "../imagesAll/c1.jpg";
import dhdffrhd123 from "../imagesAll/c2.jpg";
import dhdffrhd1122 from "../imagesAll/c3.jpg";
import dhdffrhd1 from "../imagesAll/c6.jpg";
import dhdffrhd from "../imagesAll/c9.jpg";





export default function MobaileDetails() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCardFive
            titleText="SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Black...."
            Taka="$626.84"
            Review="1.9K+ bought in past month"
            img={dhdffrhd123}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCardFive
            titleText="SAMSUNG Galaxy S24 Ultra 5G S9280 Physical Dual SIM 512GB 12GB RAM AI Smartphone, Factory Unlocked, Global"
            Taka="$626.84"
            Review="1.9K+ bought in past month"
            img={dhdffrhd1122}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCardFive
            titleText="Samsung Galaxy S21 5G, US version, 256GB, Phantom Gray - Unlocked (Renewed)"
            Taka="$626.84"
            Review="1.9K+ bought in past month"
            img={dhdffrhd1231}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCardFive
            titleText="Samsung Galaxy Z Flip3 (5G) 128GB Unlocked - Phantom Black (Renewed)"
            Taka="$626.84"
            Review="1.9K+ bought in past month"
            img={dhdffrhd1231}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCardFive
            titleText="Samsung Galaxy Note 10+, 256GB, Aura Glow Silver - Fully Unlocked (Renewed)"
            Taka="$626.84"
            Review="1.9K+ bought in past month"
            img={dhdffrhd1}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCardFive
            titleText="Apple iPhone XR, Fully Unlocked, 64 GB - Black (Renewed)"
            Taka="$626.84"
            Review="1.9K+ bought in past month"
            img={dhdffrhd}
          />
        </div>
      
      </div>
    </div>
  );
}
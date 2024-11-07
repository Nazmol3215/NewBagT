import React from 'react';

const ProductGridfour = () => {
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Product Card 1 */}
        <div className="col">
          <div className="card position-relative">
            <div className="discount-badge position-absolute top-0 start-0 bg-danger text-white p-2">
              -10%
            </div>
            <img src="bonsai-plant.png" alt="Mini Bonsai Zade Plant PL-001" className="card-img-top" />
            <div className="card-body text-center">
              <p className="card-title">Mini Bonsai Zade Plant PL-001</p>
              <div className="product-pricing">
                <span className="text-muted text-decoration-line-through">৳ 2,000</span>
                <span className="d-block">৳ 1,800</span>
              </div>
              <button className="btn btn-primary mt-3">Add to cart</button>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="col">
          <div className="card position-relative">
            <div className="discount-badge position-absolute top-0 start-0 bg-danger text-white p-2">
              -10%
            </div>
            <img src="office-chair.png" alt="Office Executive Chair With Headrest" className="card-img-top" />
            <div className="card-body text-center">
              <p className="card-title">Office Executive Chair With Headrest Black</p>
              <div className="product-pricing">
                <span className="text-muted text-decoration-line-through">৳ 5,000</span>
                <span className="d-block">৳ 4,500</span>
              </div>
              <button className="btn btn-primary mt-3">Add to cart</button>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="col">
          <div className="card position-relative">
            <div className="discount-badge position-absolute top-0 start-0 bg-danger text-white p-2">
              -35%
            </div>
            <img src="coffee-mug.png" alt="Coffee Mug Hot & Cold" className="card-img-top" />
            <div className="card-body text-center">
              <p className="card-title">Coffee Mug Hot & Cold Beverage Drinks Leak-proof</p>
              <div className="product-pricing">
                <span className="text-muted text-decoration-line-through">৳ 1,150</span>
                <span className="d-block">৳ 750</span>
              </div>
              <button className="btn btn-primary mt-3">Add to cart</button>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="col">
          <div className="card position-relative">
            <div className="discount-badge position-absolute top-0 start-0 bg-danger text-white p-2">
              -9%
            </div>
            <img src="swivel-chair.png" alt="Executive Office Swivel Chair" className="card-img-top" />
            <div className="card-body text-center">
              <p className="card-title">Executive Office Swivel Chair With White Body</p>
              <div className="product-pricing">
                <span className="text-muted text-decoration-line-through">৳ 5,500</span>
                <span className="d-block">৳ 5,000</span>
              </div>
              <button className="btn btn-primary mt-3">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridfour;

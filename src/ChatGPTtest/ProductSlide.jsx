import React from 'react';
import srhgb from '../imagesAll/lop5.jpg';

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      imgSrc: srhgb, // Replace with your image path
      title: 'Moto G Play 2023 3-Day Battery Unlocked',
      price: '$99.00',
      shipping: 'Get it as soon as Nov 20',
    },
    {
      id: 2,
      imgSrc: srhgb,
      title: 'Motorola One Ace 2021 | 2-Day Battery',
      price: '$86.84',
      shipping: 'Get it as soon as Nov 20',
    },
    {
      id: 3,
      imgSrc: srhgb,
      title: 'NUU A15 Cell Phone 4GB + 128GB',
      price: '$119.99',
      shipping: 'Get it as soon as Nov 18',
    },
    {
      id: 4,
      imgSrc: srhgb,
      title: 'Nokia C210 | T-Mobile, AT&T, Cricket',
      price: '$109.99',
      shipping: 'Get it as soon as Nov 18',
    },
    {
      id: 5,
      imgSrc: srhgb,
      title: 'Samsung Galaxy Note 10+',
      price: '$399.00',
      shipping: 'Get it as soon as Nov 19',
    },
    {
      id: 6,
      imgSrc: srhgb,
      title: 'NUU B10 4G LTE 64GB/4GB',
      price: '$99.99',
      shipping: 'Get it as soon as Nov 18',
    },
    {
      id: 7,
      imgSrc: srhgb,
      title: 'HP 17 Laptop, 17.3" HD+ Display',
      price: '$474.97',
      shipping: 'Get it as soon as Nov 18',
    },
  ];

  return (
    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="row">
              {products.slice(index * 4, index * 4 + 4).map((item) => (
                <div key={item.id} className="col-md-3 col-sm-6">
                  <div className="product-card">
                    <img src={item.imgSrc} alt={item.title} className="img-fluid" />
                    <p className="product-title">{item.title}</p>
                    <p className="product-price">{item.price}</p>
                    <p className="product-shipping">{item.shipping}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProductSlider;

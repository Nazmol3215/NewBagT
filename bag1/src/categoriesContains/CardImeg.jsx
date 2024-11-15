import React from 'react';
import fdnvdseg from '../imagesAll/mob acca.jpg';
import fdnvdseg1 from '../imagesAll/lop33.jpg';
import fdnvdseg2 from '../imagesAll/lig00x600.jpg';
import fdnvdseg3 from '../imagesAll/lop111.jpg';
import fdnvdseg4 from '../imagesAll/lop7.jpg';



const products = [
  {
    title: "RedThunder K84 Wireless Keyboard and Mouse Combo",
    price: "$39.99",
    rating: "★ ★ ★ ★ ☆",
    delivery: "Wednesday, Nov 13",
    shipping: "$30.82 shipping",
    imgSrc: fdnvdseg, // Replace with actual image
  },
  {
    title: "HP 14 Laptop, Intel Celeron N4020, 4GB RAM",
    price: "$176.00",
    rating: "★ ★ ★ ★ ☆",
    delivery: "Thursday, Nov 21",
    shipping: "$43.18 shipping",
    imgSrc: fdnvdseg1,
  },
  {
    title: "BlueFinger Wireless Gaming Keyboard and Mouse Combo",
    price: "$34.99",
    rating: "★ ★ ★ ★ ★",
    delivery: "Wednesday, Nov 20",
    shipping: "$33.01 shipping",
    imgSrc: fdnvdseg2,
  },
  {
    title: "SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB",
    price: "$910.00",
    rating: "★ ★ ★ ★ ☆",
    delivery: "Wednesday, Nov 13",
    shipping: "$28.98 shipping",
    imgSrc: fdnvdseg3,
  },
  {
    title: "FUNYET 16 Inch Laptop Computer, Gaming",
    price: "$296.99",
    rating: "★ ★ ★ ★ ★",
    delivery: "Wednesday, Nov 20",
    shipping: "$46.90 shipping",
    imgSrc: fdnvdseg4,
  },
  {
    title: "ASUS Vivobook Go 15.6” Laptop, AMD Ryzen 5",
    price: "$329.99",
    rating: "★ ★ ★ ★ ★",
    delivery: "Thursday, Nov 20",
    shipping: "$46.94 shipping",
    imgSrc: fdnvdseg4,
  },

];

const ProductSliderTwo = () => {
//   const navigateTwo = useNavigate();
  return (
    <div className="container my-4">
      <div className="row d-flex overflow-auto flex-nowrap">
        {products.map((product, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
            key={index}
            style={{ minWidth: '250px' }}
          >
            {/* onClick={() => navigateTwo("/MobaileDetails")} */}
            <div className="card h-100"  >
              <img src={product.imgSrc} className="card-img-top" alt={product.title}   />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text text-warning">{product.rating}</p>
                <p className="card-text text-success">Price: {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSliderTwo;
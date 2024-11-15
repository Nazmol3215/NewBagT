import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 footerOne" >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Careers</a></li>
              <li><a href="#" className="text-light">Blog</a></li>
              <li><a href="#" className="text-light">About Amazon</a></li>
              <li><a href="#" className="text-light">Investor Relations</a></li>
              <li><a href="#" className="text-light">Amazon Devices</a></li>
              <li><a href="#" className="text-light">Amazon Science</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Sell products on Amazon</a></li>
              <li><a href="#" className="text-light">Sell on Amazon Business</a></li>
              <li><a href="#" className="text-light">Sell apps on Amazon</a></li>
              <li><a href="#" className="text-light">Become an Affiliate</a></li>
              <li><a href="#" className="text-light">Advertise Your Products</a></li>
              <li><a href="#" className="text-light">Self-Publish with Us</a></li>
              <li><a href="#" className="text-light">Host an Amazon Hub</a></li>
              <li><a href="#" className="text-light">See More Make Money with Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Amazon Payment Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Amazon Business Card</a></li>
              <li><a href="#" className="text-light">Shop with Points</a></li>
              <li><a href="#" className="text-light">Reload Your Balance</a></li>
              <li><a href="#" className="text-light">Amazon Currency Converter</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Let Us Help You</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Amazon and COVID-19</a></li>
              <li><a href="#" className="text-light">Your Account</a></li>
              <li><a href="#" className="text-light">Your Orders</a></li>
              <li><a href="#" className="text-light">Shipping Rates & Policies</a></li>
              <li><a href="#" className="text-light">Returns & Replacements</a></li>
              <li><a href="#" className="text-light">Manage Your Content and Devices</a></li>
              <li><a href="#" className="text-light">Help</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <hr className="bg-light" />
          <p>&copy; {new Date().getFullYear()} Amazon Clone</p>
          <div className="d-flex justify-content-center align-items-center">
            <a href="#" className="text-light me-3">English</a>
            <a href="#" className="text-light me-3">$ USD - U.S. Dollar</a>
            <a href="#" className="text-light">United States</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

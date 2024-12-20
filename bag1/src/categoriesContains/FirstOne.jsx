import React from 'react';
import drfdfrh from '../imagesAll/lop7.jpg';

export default function HomeSection() {
  return (
    <div className="container my-4">
      <div className="row">
        
        {/* Section 1: Pick up where you left off */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h5>Pick up where you left off</h5>
            <div className="row">
              <div className="col-6 mb-3">
                <img src= {drfdfrh}  alt="Motorola Moto G" className="img-fluid" />
                <p className="text-muted">Motorola Moto G Pure</p>
              </div>
              <div className="col-6 mb-3">
                <img src= {drfdfrh} alt= "NUU A23" className="img-fluid" />
                <p className="text-muted">NUU A23Plus Basic</p>
              </div>
              <div className="col-6 mb-3">
                <img src= {drfdfrh}  alt="Apple iPhone XR" className="img-fluid" />
                <p className="text-muted">Apple iPhone XR</p>
              </div>
              <div className="col-6 mb-3">
                <img src= {drfdfrh} alt="Samsung Galaxy Note" className="img-fluid" />
                <p className="text-muted">Samsung Galaxy Note</p>
              </div>
            </div>
            <a href="#" className="text-primary">See more</a>
          </div>
        </div>

        {/* Section 2: Continue shopping deals */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h5>Continue shopping deals</h5>
            <div className="row">
              <div className="col-6 mb-3">
                <img src=  {drfdfrh}  alt="Smartphone" className="img-fluid" />
              </div>
              <div className="col-6 mb-3">
                <img src=  {drfdfrh}  alt="Headphones" className="img-fluid" />
              </div>
              <div className="col-6 mb-3">
                <img src=  {drfdfrh}  alt="Tablet" className="img-fluid" />
              </div>
              <div className="col-6 mb-3">
                <img src=  {drfdfrh} alt="Smart device" className="img-fluid" />
              </div>
            </div>
            <a href="#" className="text-primary">See all deals</a>
          </div>
        </div>

        {/* Section 3: Enjoy all the Prime benefits */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h5>Enjoy all the Prime benefits</h5>
            <div className="row">
              <div className="col-6 mb-3">
                <img src= {drfdfrh} alt="Essentials" className="img-fluid" />
                <p className="text-muted">Save 15% on essentials</p>
              </div>
              <div className="col-6 mb-3">
                <img src= {drfdfrh}  alt="Movies and shows" className="img-fluid" />
                <p className="text-muted">Popular movies and shows</p>
              </div>
              <div className="col-6 mb-3">
                <img src= {drfdfrh} alt="Food delivery" className="img-fluid" />
                <p className="text-muted">$0 Grubhub delivery fees</p>
              </div>
              <div className="col-6 mb-3">
                <img src= {drfdfrh} alt="Fast shipping" className="img-fluid" />
                <p className="text-muted">Fast shipping</p>
              </div>
            </div>
            <a href="#" className="text-primary">Join Prime</a>
          </div>
        </div>
      </div>
    </div>
  );
}

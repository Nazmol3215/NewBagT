import React from 'react';
import ftjgt from '../src/imagesAll/c16.jpg';
import ftjgt1 from '../src/imagesAll/c17.jpg';
import ftjgt12 from '../src/imagesAll/c3.jpg';
import ftjgt121 from '../src/imagesAll/c19.jpg';
import ftj from '../src/imagesAll/c6.jpg';
import ft from '../src/imagesAll/c9.jpg';
import ftjg21 from '../src/imagesAll/c11.jpg';
import tjg21 from '../src/imagesAll/c12.jpg';
import jg21 from '../src/imagesAll/c3.jpg';
import fg21 from '../src/imagesAll/c1.jpg';
import ftj2 from '../src/imagesAll/c.jpg';
import { useNavigate } from 'react-router-dom';

export default function LAstOption() {
  const navigateTo = useNavigate();
  return (
    <div className="container my-4">
    <marquee> <h3> আমাদের সাশ্রয়ী মূল্যের এক্সিকিউটিভ অফিস চেয়ার দিয়ে 
      আপনার কর্মক্ষেত্রকে আপগ্রেড করুন। আমাদের চেয়ারগুলি স্টাইল এ
      বং কার্যকারিতা নিখুঁতভাবে একত্রিত করে, সবই সাশ্রয়ী মূল্যে।
    রাজু স্টিল ফার্নিচার -২
    " সততা ই আমাদের প্রধাণ বৈশিষ্ট্য " </h3></marquee>

      <div className="row">
        
        {/* Section 1: Pick up where you left off */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h5>Pick up where you left off</h5>
            <div className="row">
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {ftjgt} alt="Motorola Moto G" className="img-fluid" />
                <p className="text-muted">Motorola Moto G Pure</p>
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {ftjgt1}  alt="NUU A23" className="img-fluid" />
                <p className="text-muted">NUU A23Plus Basic</p>
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {ftjgt12}  alt="Apple iPhone XR" className="img-fluid" />
                <p className="text-muted">Apple iPhone XR</p>
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {ftjgt121} alt="Samsung Galaxy Note" className="img-fluid" />
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
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {ftj}  alt="Smartphone" className="img-fluid" />
              </div>
              <div className="col-6 mb-3">
                <img src= {ft} alt="Headphones" className="img-fluid" />
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {ftjg21} alt="Tablet" className="img-fluid" />
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {ftjgt} alt="Smart device" className="img-fluid" />
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
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {jg21} alt="Essentials" className="img-fluid" />
                <p className="text-muted">Save 15% on essentials</p>
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {fg21} alt="Movies and shows" className="img-fluid" />
                <p className="text-muted">Popular movies and shows</p>
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {ftj2} alt="Food delivery" className="img-fluid" />
                <p className="text-muted">$0 Grubhub delivery fees</p>
              </div>
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {tjg21} alt="Fast shipping" className="img-fluid" />
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

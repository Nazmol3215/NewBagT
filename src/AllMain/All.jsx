import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from '../OrderDetailsPages/ProductPage ';
import OrderComponent from '../ChatGPTtest/TeastOne';
import MobaileDetails from '../MobailesDetail/MobaileDetails';
import M from '../Main/M';

export default function All() {
  return (

    <div>
      

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<M/>} />
          <Route path="/MobaileDetails" element={<MobaileDetails />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/OrderComponent" element={<OrderComponent />} />
         

        </Routes>
      </BrowserRouter>






    </div>
  )
}
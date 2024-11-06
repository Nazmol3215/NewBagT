import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobaileDetails from '../MobailesDetail/MobaileDetails';

import HomeSection from '../CategoriesContains/FirstContainer';
import ProductPage from '../OrderDetailsPages/ProductPage ';
import OrderComponent from '../ChatGPTtest/TeastOne';



export default function All() {
  return (
    <div>
      

      <BrowserRouter>
      <HomeSection/>
        
        <Routes>
          <Route path="/MobaileDetails" element={<MobaileDetails />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/OrderComponent" element={<OrderComponent />} />
         

        </Routes>
      </BrowserRouter>






    </div>
  )
}
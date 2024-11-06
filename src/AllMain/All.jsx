import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from '../OrderDetailsPages/ProductPage ';
import OrderComponent from '../ChatGPTtest/TeastOne';
import MobaileDetails from '../MobailesDetail/MobaileDetails';
import FirstContainer from '../CategoriesContains/FirstContainer';

export default function All() {
  return (

    <div>
      

      <BrowserRouter>
        <FirstContainer/>
        <MobaileDetails/>
        <Routes>
          <Route path="/MobaileDetails" element={<MobaileDetails />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/OrderComponent" element={<OrderComponent />} />
         

        </Routes>
      </BrowserRouter>






    </div>
  )
}
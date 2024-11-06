import './App.css';
import React from 'react';
import OffcanvasExample from '../src/HeadDatails/NavBar';
import All from './AllMain/All';
import ScrollToTopButton from './ScrollToTop';
import ProductSlider from './ChatGPTtest/ProductSlide';


function App() {
  return (
    <div className="App">
     <ScrollToTopButton/>
      <OffcanvasExample/>  
<ProductSlider/>

<All/>

    </div>
  );
}

export default App;

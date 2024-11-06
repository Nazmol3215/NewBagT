import './App.css';
import React from 'react';
import OffcanvasExample from '../src/HeadDatails/NavBar';
import All from './AllMain/All';
import ScrollToTopButton from './ScrollToTop';


function App() {
  return (
    <div className="App">




     <ScrollToTopButton/>
      <OffcanvasExample/>  

<All/>

    </div>
  );
}

export default App;

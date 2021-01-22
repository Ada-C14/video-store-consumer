import React from 'react';
import  './vhs tapes.jpg'; // Tell webpack this JS file uses this image


function Header() {
  // Import result is the URL of your image
  return <img src={'./vhs tapes.jpg'} alt="header" />;
}

export default Header;
import React from 'react';
import  './g2yfzfx.jpg'; // Tell webpack this JS file uses this image


function Header() {
  // Import result is the URL of your image
  return <img src={'./g2yfzfx.jpg'} alt="header" />;
}

export default Header;
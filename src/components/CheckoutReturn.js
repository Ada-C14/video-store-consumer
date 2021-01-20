import React from 'react';
import PropTypes from 'prop-types';

import './CheckoutReturn.css';

const CheckoutReturn = (props) => {
  const customer = props.currentCustomer || ''
  const video = props.selectedVideo || ''

  return (
    <div className='main-container'>
      <div className={`${props.currentCustomer ? '' : 'hide'}`}>
          <h3>Customer:</h3>
          <p>{customer.name}</p>
      </div>
      <div className={`movie ${props.selectedVideo ? '' : 'hide'}`}>
        <div>
          <img src={`${video.image_url}`} alt="movie cover" className='thumbnail'/>
        </div>
        <div>
          <h3>Movie:</h3>
          <p>{video.title}</p>
        </div>
      </div>
      <div>
        <button>checkout</button>
      </div>
      <div>
        <button>return</button>
      </div>
    </div>
  )
}

CheckoutReturn.propTypes = {

};

export default CheckoutReturn;
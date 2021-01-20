import React from 'react';
import PropTypes from 'prop-types';

import './CheckoutReturn.css';

const CheckoutReturn = (props) => {
  const customer = props.currentCustomer || ''
  const video = props.selectedVideo || ''
  const isEnabled = customer !== '' && video !== '';

  const checkoutThisVideo = (event) => {
    event.preventDefault();

    const date = new Date(new Date().getTime()+(1*24*60*60*1000))
    const params = {
      // eslint-disable-next-line camelcase
      customer_id: customer.id,
      // eslint-disable-next-line camelcase
      due_date: date
    }

    props.onCheckoutVideo(params) 
  }

  const returnThisVideo = (event) => {
    event.preventDefault();

    const params = {
      // eslint-disable-next-line camelcase
      customer_id: customer.id
    }

    props.onReturnVideo(params) 
  }



  return (
    <div className='main-container'>
      <div className={`${customer  === '' ? 'hide' : ''}`}>
          <h3>Customer:</h3>
          <p>{customer.name}</p>
      </div>
      <div className={`movie ${video  === '' ? 'hide' : ''}`}>
        <div>
          <img src={video.image_url} alt="movie cover" className='thumbnail'/>
        </div>
        <div>
          <h3>Movie:</h3>
          <p>{video.title}</p>
        </div>
      </div>
      <div>
        <button disabled={!isEnabled} onClick={checkoutThisVideo} className='checkout-video'>checkout</button>
      </div>
      <div>
        <button disabled={!isEnabled} onClick={returnThisVideo} className='return-video'>return</button>
      </div>
    </div>
  )
}

CheckoutReturn.propTypes = {
  currentCustomer: PropTypes.object,
  selectedVideo: PropTypes.object,
  onCheckoutVideo: PropTypes.func,
  onReturnVideo: PropTypes.func
};

export default CheckoutReturn;
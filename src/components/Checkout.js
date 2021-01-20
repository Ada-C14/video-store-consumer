import React from 'react';
import './Checkout.css'

const Checkout = (props) => {
  const {video, customer} = props
  return (
    <div className="checkout">
      {video && <h3 className="checkout__text">Video Selected: <em>{video.title}</em></h3>}
      {customer && <h3 className="checkout__text">Customer Selected: <em>{customer.name}</em></h3>}
      {(video && customer) && <button className="checkout__btn">CHECKOUT</button>}
    </div>
  )
}

export default Checkout;

// If there is a video saved to state
// Show text or something "You selected video: [video]"
// some sort of indicator to show that a video has been selected
// if customer is aved to state
// indicate that somehow

// if both video and customer are saved to state, show a button to trigger checkout (post request to rails)
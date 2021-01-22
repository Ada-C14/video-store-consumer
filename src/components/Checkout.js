import axios from 'axios';
import React from 'react';
import './Checkout.css'
import humps from 'humps';

const BASE_API_URL = 'http://localhost:3000';

const Checkout = (props) => {
  const {video, customer} = props

  const handleClick = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    axios.post(
      `${BASE_API_URL}/rentals/${video.title}/check-out`, 
      humps.decamelizeKeys({
        customerId: customer.id,
        dueDate: date
      }))
    .then( (response) => {
      props.setDisplayMessage(` successfully checked out ${video.title} to ${customer.name}`)
      props.videoCallback(null);
      props.customerCallback(null);
    })
    .catch( (error) => {
      props.setDisplayMessage(error.message);
    })
  }
  return (
    <div className="checkout__content">
      <div className="checkout">
        {video && <h3 className="checkout__text">Video Selected: <em>{video.title}</em></h3>}
        {customer && <h3 className="checkout__text">Customer Selected: <em>{customer.name}</em></h3>}
        {(video && customer) && <button className="checkout__btn" onClick={handleClick}>CHECKOUT</button>}  
        {/* {(video || customer) && <button className="checkout__btn" onClick={handleClick}>CANCEL</button>}   */}
      </div>
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
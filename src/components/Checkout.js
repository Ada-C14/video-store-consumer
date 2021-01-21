import React, { useState } from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'http://localhost:3000/rentals';
const axios = require('axios');

const Checkout = (props) => {
  const [CheckoutMessage, setCheckoutMessage] = useState('');

  const checkoutVideo = () => {
    if (!props.video) {
      return;
    }

    let newDueDate = new Date();
    newDueDate.setDate(newDueDate.getDate() + 7);
    const formattedDueDate = newDueDate.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    axios.post(`${BASE_URL}/${props.video}/check-out`, {}, {
      params: {
        'customer_id': props.customer.id,
        'due_date': formattedDueDate,
      }
    }).then((response) => {
      setCheckoutMessage(props.customer.name + ' checked out: ' + props.video + '! Due Date: ' + formattedDueDate);
      console.log('Successfully Checked Out Video' + props.video);
    }).catch((error) => {
      alert('Failed to check out video');
      console.log('FAILED ON API CALL');
    });
  }

  const onSubmitCheckout = (event) => {
    event.preventDefault();
    checkoutVideo();
  }

  return(
    <span>
      <button className='Checkout-checkIn-checkOut MainButton' onClick={ onSubmitCheckout }>
      Check Out Video
      </button>
      <p>{ CheckoutMessage }</p>
    </span>
  );
}

export default Checkout;
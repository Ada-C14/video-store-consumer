import React, { useState } from 'react';
// import FlashMessage from 'react-flash-message';
const BASE_URL = 'http://localhost:3000/rentals';
const axios = require('axios');


const Checkout = (props) => {
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

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
    setIsCheckingOut(true)
    setTimeout(() => {
      setIsCheckingOut(false)
    }, 5000)
  }

  return(
    <span>
      <button className="btn btn-success" onClick={ onSubmitCheckout }>
        Check Out Video
      </button>
      {
        isCheckingOut &&
        <div className="alert alert-info">
          <p>{ checkoutMessage }</p>
        </div>
      }
    </span>
  );
}

export default Checkout;
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'http://localhost:3000/rentals';
const axios = require('axios');

const Return = (props) => {
  const [ReturnMessage, setReturnMessage] = useState();


  const onSubmitReturn = () => {
    if (!props.video) {
        return;
    }


axios.post(`${BASE_URL}/${props.video}/return`, {}, {
    params: {
        'customer_id': props.customer.id,
        'due_date': formattedDueDate,
    }
    }).then((response) => {
    setReturnMessage(props.customer.name + ' returned: ' + props.video );
    console.log('Successfully Returned Video' + props.video);
    }).catch((error) => {
    alert('Failed to check out video');
    console.log('FAILED ON API CALL');
    });
}


return(
    <span>
      <button className='Checkout-checkIn-checkOut MainButton' onClick={ onSubmitCheckout }>
      Return Video
      </button>
      <p>{ CheckoutMessage }</p>
    </span>
  );
}

export default Return;
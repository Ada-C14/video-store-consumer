import React, {useState, useEffect} from 'react';
import './Checkout.css';
import PropTypes from 'prop-types';


const BASE_URL = 'http://localhost:3000/rentals';

const axios = require('axios');

const Checkout = (props) => {

  const [CheckoutMessage, setCheckoutMessage] = useState('');

  const [CustomerAndVideo,setCustomerAndVideo] = useState({
    video: '',
    customer: ''
  });

  const onSubmitCheckout = (event) => {
    event.preventDefault();

    setCustomerAndVideo({
      video: props.video,
      customer: props.customer.name
    });

  }


  useEffect(() => {

    if (CustomerAndVideo.video == ''){
      return ;
    }

    let newDueDate = new Date;
    newDueDate.setDate(newDueDate.getDate() + 7 );

    axios.post(BASE_URL + CustomerAndVideo.video + '/check-out', {
      
        customerId:CustomerAndVideo.customer,
        dueDate: newDueDate,

    })

      .then((response) => {
        setCheckoutMessage(props.customer.name + ' checked out: ' + CustomerAndVideo.video +'!' + 'Due Date' + newDueDate.format('LL') );
        props.setDisplayMessage({message:props.customer.name + ' Successfully Checked Out Video ' + CustomerAndVideo.video , severity: 'success'});
        console.log('Successfully Checked Out Video' + CustomerAndVideo.video);
      })
      .catch((error)=>{
        // props.setDisplayMessage({message: 'Failed to check out video', severity: 'error'});
        console.log('FAILED ON API CALL')
      });
      ;

  }, [CustomerAndVideo]);





  return <span>
    <button className='Checkout-checkIn-checkOut MainButton' onClick = {onSubmitCheckout}>
    Check Out Video
    </button>
    <p>{CheckoutMessage}</p>
    </span>
}

export default Checkout
import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Checkout.css';

const Checkout = (props) => {

  const [ checkoutSuccessMessage, setCheckoutSuccessMessage ] = useState(null)
  const [ checkoutErrorMessage, setCheckoutErrorMessage ] = useState(null)

  const checkout = () => {

  const theFuture = new Date(new Date().getTime()+(7*24*60*60*1000));
    
    if (props.selectedVideo === null || props.selectedCustomer === null) {
      setCheckoutErrorMessage(`Please select a customer & video!`)
      return
    }
    axios.post(`${props.baseUrl}/rentals/${props.selectedVideo.title}/check-out`, {}, {
      params: {
        'customer_id': props.selectedCustomer.id,
        'due_date': theFuture.toJSON(),
      }})        
      .then((response) => {
        console.log(response)
        setCheckoutSuccessMessage(`Customer ${props.selectedCustomer.name} has checked out ${props.selectedVideo.title}`)
        props.selectedCustomerCallback(null)
        props.selectedVideoCallback(null)
        })
      .catch((error) => {
        console.log(error.message)
        console.log(checkoutErrorMessage)
      });
  }
  return (
    <div className="container">
      <br></br>
      <h5>Rental Checkout</h5>
      { checkoutSuccessMessage ? <span><br></br><h5>{checkoutSuccessMessage}</h5></span> : <span /> }
      { props.selectedVideo === null || props.selectedCustomer === null ? <span><br></br><h5>{checkoutErrorMessage}</h5></span> : <span /> }
      <div className="box w-50 container">
          <h5>Selected Customer: { props.selectedCustomer ? props.selectedCustomer.name : <span>None</span> }</h5>
          <h5>Selected Video: {props.selectedVideo ? props.selectedVideo.title : <span>None</span> }</h5>
        <button onClick={checkout} className="btn btn-outline-primary">Checkout!</button>
      </div>
    </div>
  )
}

Checkout.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  selectedCustomer: PropTypes.object.isRequired,
  selectedVideo: PropTypes.object.isRequired,
  selectedVideoCallback: PropTypes.func, 
  selectedCustomerCallback: PropTypes.func
};
  
export default Checkout;    
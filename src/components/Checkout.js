import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Checkout.css';

const Checkout = (props) => {

  const checkout = () => {

  const theFuture = new Date(new Date().getTime()+(7*24*60*60*1000));
    
    if (props.selectedVideo === null || props.selectedCustomer === null) {
      alert(`Please select a customer & video!`)
      return
    }
    axios.post(`${props.baseUrl}/rentals/${props.selectedVideo.title}/check-out`, {}, {
      params: {
        'customer_id': props.selectedCustomer.id,
        'due_date': theFuture.toJSON(),
      }})        
      .then((response) => {
        console.log(response)
        alert(`Customer ${props.selectedCustomer.name} checked out ${props.selectedVideo.title}`)
        props.selectedCustomerCallback(null)
        props.selectedVideoCallback(null)
        })
      .catch((error) => {
        alert(`Sorry, something went wrong! ${error.message}`)
        console.log(error.message)
      });
  }
  return (
    <span>
        Selected Customer: { props.selectedCustomer ? props.selectedCustomer.name : <span>None</span> } |
        Selected Video: {props.selectedVideo ? props.selectedVideo.title : <span>None</span> }
        <button onClick={checkout} className="btn btn-outline-primary button">Checkout!</button>
      </span>
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
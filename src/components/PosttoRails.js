import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import axios from 'axios';
  
  // TESTING AREA


  Date.prototype.addDays = function(interval) {
    this.setDate(this.getDate() + interval);
    return this;
  };


  const PostToRails = (props) => {

  const checkoutUrl = 'http://localhost:3000/rentals/';

  const [checkouts, setCheckouts] = useState([]);
  const [errors, setErrors] = useState(null);

  
  const checkout = () => {
      const currentDate = new Date();
    // to add 6 days to current date
      const dueDate = currentDate.addDays(7);

      console.log(dueDate);

      const dd = dueDate.getDate();
      const mm = dueDate.getMonth() + 1;
      const yyyy = dueDate.getFullYear();

      let formattedDueDate = yyyy + '-'+ mm + '-'+ dd;
      if (mm < 10) {
        formattedDueDate = yyyy + '-'+ 0 + mm + '-'+ dd;
      } 

  

    console.log(formattedDueDate);

  // where does this go to get video & customer
  // axios, 2nd parameter takes the payload, pass in obj with all those values
  
  axios.post(`${checkoutUrl}${props.video}/check-out?customer_id=${props.customer}&due_date=${formattedDueDate}`)
    .then((response) => {
      console.log(response);
      props.onSuccessfulRental();

    })
    .catch((error) => {
      setErrors(error.message);
      console.log(error.message);
      props.onFailedRental();
    })
  }

  /////..

  return (
    <button onClick={checkout}>
      Check Out {props.video} To Customer
    </button>
  )


  }


  // axios.get maeks a get request to that url, but checkin/checkout make post request
  // instead of making that request to customers, should be whatever url you associate with checkin/checkout

  PostToRails.propTypes = {
    
}


export default PostToRails;
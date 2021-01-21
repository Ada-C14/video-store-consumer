import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Customer from './Customer';
import './Customers.css'

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // initial API call to set state of customerList
  useEffect(() => {
    axios.get(`${props.url}/customers`)
      .then((response) => {
        const apiCustomerList = response.data;
        setCustomerList(apiCustomerList);
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);

  const onChangeValue = (event) => {

    const customerID = Number(event.target.value)

    // TODO: .find or .filter thru the list of customers to get the name so that it can print? 
    // Why can't I pull the customer object?  So that I can pass all the details to state in app?  

    const custObj = customerList.find((cust) => {
      return (
        cust.id === customerID
      )
    })

    console.log({custObj, customerID})

    // [obj Obj]
    props.setCustomerIDCallback(customerID)
    props.setCustomerNameCallback(custObj.name)
  }

  const customerComponents = customerList.map((cust) => {
    return (
      <div>
        <input type='radio' id={cust.id} name='customer' value={cust.id} onChange={ onChangeValue } />
        <label htmlFor={cust.name}><Customer key={cust.id} id={cust.id} name={cust.name} tel={cust.phone} videosCheckedCount={cust.videos_checked_out_count} /></label>
      </div>
    );
  })


  return (
    <div>
      <h2>Customers List:</h2>
    
      {customerComponents}

    </div>
  )
}

Customers.propTypes = {
  url: PropTypes.string,
  setCustomerCallback: PropTypes.func
};

export default Customers;
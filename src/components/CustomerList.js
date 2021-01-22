import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import axios from 'axios'

import {Container} from 'react-bootstrap'

const CustomerList = (props) => {
    
  const allCustomersURL = 'http://localhost:3000/customers'

  const [customers, setCustomers] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {

      axios.get(allCustomersURL)
      .then((response) => {
          const RailsApiCustomerList = response.data
          setCustomers(RailsApiCustomerList);
          console.log(response);
      })
      .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
        }, []);
      });

    return (
      <div>
        <Container>
          <h3>All Customers</h3>
          <h4>Search or Select a Customer: </h4>
         
        <Select
                    value={props.selectedCustomer}
                    onChange={props.onSelectCustomer}
                    options={customers.map((customer, index) => {
                    
                    return {
                    label: customer.name,
                    value: customer,
                    key: index
                    };
                    })}
                /> 
        </Container>
      </div>
  )  
}

CustomerList.propTypes = {}

export default CustomerList

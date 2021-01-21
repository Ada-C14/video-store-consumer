import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CustomerEntry from './CustomerEntry'

const CustomerList = (props) => {
  const fullUrl = 'http://localhost:3000/customers';

  const [customers, setCustomers] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect ( () => {
    axios.get(fullUrl)
    .then((response) => {
      const customerList = response.data;
      console.log(customerList);
      setCustomers(customerList);
    })
    .catch((error) => {
      setErrors(error.message);
      console.log(error.message);
    })
  }, [])

  // SORT?

  return (
    <div className='customerList'>
      <ul>
        {customers.map((customer) => {
          // ADD WHAT IS PASSED TO CUSTOMER ENTRY in the return
          return (<li key={customer.id}>{<CustomerEntry id={customer.id} name={customer.name} listCallback={props.listCallback}/>}</li>);
        })
        }
      </ul>
    </div>
  )

}

CustomerList.propTypes = {
  listCallback: PropTypes.func.isRequired
}

export default CustomerList;
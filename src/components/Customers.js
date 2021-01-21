import axios from 'axios';
import React, { useState, useEffect} from 'react';
// import axios from 'axios';
import Customer from './Customer';
import './Customers.css'

const BASE_API_URL = 'http://localhost:3000';

const Customers = (props) => {
  const [customers, setCustomers] = useState([])
  const [active, setActive] = useState('')


  useEffect( () => {
      axios.get(`${BASE_API_URL}/customers`)
        .then( (response) => {
          setCustomers(response.data);
        })
        .catch( (error) => {
          // todo: feature error message on browser
          console.log(error.message);
        })
  }, [] )

  const customerComponents = customers.map(customer => {
    return(
      <Customer data={customer} key={customer.id} customerCallback={props.customerCallback} activeCallback={setActive} isActive={active === customer.id}  />
    )
  })

  return (

      <div className="customer-list__container">
        {customerComponents}
      </div>
   
  )
}

export default Customers;
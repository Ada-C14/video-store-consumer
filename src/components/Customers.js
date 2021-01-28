import Customer from './Customer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/customers')
      // converting the data into json
      .then((response) => {
        setCustomers(response.data);
        // console.log(response);
      });
    // received data as customers
  }, []);

  return (
    <div className="container">
      <div className="card-list-cus">
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;

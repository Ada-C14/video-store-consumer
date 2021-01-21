import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Customers.css';

const baseURL = 'http://localhost:3000'

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    axios.get(baseURL + '/customers')
      .then(response => {
        setCustomerList(response.data);
      })
      .catch(() => {
        alert('Failed to select customers');
      });
  }, []);

  return (
    <main>
    <div>
      <h2>Customers List</h2>
      <table className="customers-table">
        {customerList.map((customer) => (
          <React.Fragment key={customer.id}>
            <tr></tr>
            <td className='customers-table-name'>{customer.name}</td>
            <td className='customers-table-'><button onClick={() => props.onSelectCustomerCallback(customer)}>Select</button></td>
          </React.Fragment>
        ))
        }
      </table>
    </div>
    </main>
  )
}

Customers.propTypes = {
  onSelectCustomerCallback: PropTypes.func.isRequired,
  customerList: PropTypes.array.isRequired
}
export default Customers;
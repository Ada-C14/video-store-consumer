import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Customers.css';

const baseURL = 'http://localhost:3000'

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(baseURL + '/customers')
      .then(response => {
        setCustomerList(response.data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div>
      { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      <h2>Customers List</h2>
      <table className="customers-table">
        {customerList.map((customer) => (
          <React.Fragment key={customer.id}>
            <tr></tr>
            <td className='customers-table-name'>{customer.name}</td>
            <td className='customers-table-ac-cred'>{customer.account_credit}</td>
            <td className='customers-table-select'><button onClick={() => props.onSelectCustomerCallback(customer)}>Select</button></td>
          </React.Fragment>
        ))
        }
      </table>
    </div>
  )
}

Customers.propTypes = {
  onSelectCustomerCallback: PropTypes.func.isRequired,
  customerList: PropTypes.array.isRequired
}
export default Customers;
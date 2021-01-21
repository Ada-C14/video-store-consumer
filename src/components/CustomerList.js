import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import './CustomerList.css';

const CustomerList = (props) => {
  const customerComponents = props.customers.map((customer) => {
  return (
      <Customer
        key = {customer.id}
        customerId={customer.id}
        customerName={customer.name}
        videosCheckedOutCount={customer.videos_checked_out_count}
        selectCustomerCallback={props.selectCustomerCallback}
        currentCustomer={props.currentCustomer}
      />
  );
});

  return (
    <div>
      <h1>CUSTOMERS</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th> 
            <th>Checkout Count</th>
          </tr>
        </thead>
        <tbody>
          {customerComponents}
        </tbody>
      </table>
    </div>
  );
};


CustomerList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape(
    {
      customerId: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      videosCheckedOutCount: PropTypes.number,
    },
  )),
  selectCustomerCallback: PropTypes.func.isRequired,
  currentCustomer: PropTypes.object,
};

export default CustomerList;
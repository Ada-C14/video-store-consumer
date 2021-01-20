import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import './CustomerList.css'

const CustomerList = (props) => {
  const custList = props.list.map((customer) => {
    return(< Customer key={customer.id} name={customer.name} />)
  })
  return(
    <div className="customer-list">
      {custList}
    </div>
  )}
CustomerList.propTypes = {
  list: PropTypes.array
}
export default CustomerList;
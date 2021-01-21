import React, { useState, useEffect } from 'react'; 
// import axios from 'axios';
import API from '../ApiSupport'
import Customer from './Customer';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerList = (props) => {
   // initially empty but changes during component's life cycle when API is called
    const [customerList, setCustomerList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        API.get(`customers`)
          .then((response) => {
            const apiCustomerList = response.data; 
            setCustomerList(apiCustomerList);
          })
          .catch((error) => {
            setErrorMessage('Could not retrieve customers');
          });
      }, []);

      const onButtonClick = () => {
  
        props.onClickCustomer({
          id: props.id
        });
      }
    
      const customerComponents = customerList.map((customer) => {
        return (
          errorMessage == null ?
          <Link onClickCustomer={props.selectCustomer}>
            <Customer 
                key={customer.id}
                id={customer.id}
                registeredAt={customer.registered_at}
                address={customer.address}
                state={customer.state}
                postalCode={customer.postal_code}
                phone={customer.phone}
                accountCredit={customer.account_credit}
                name={customer.name}
                videosCheckedOutCount={customer.videos_checked_out_count}
                /> </Link>
            : errorMessage
          )
      })
    
        return (
          <div>
            {customerComponents}
          </div>
        )
}


CustomerList.propTypes = {
  onClickCustomer: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default CustomerList; 
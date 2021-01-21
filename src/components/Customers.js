import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import Customer from './Customer';

const Customers = (props) => {
    const [customerList, setCustomerList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios.get(`${props.url}customers`)
          .then((response) => {
            const apiCustomerList = response.data; 
            setCustomerList(apiCustomerList);
          })
          .catch((error) => {
            setErrorMessage('Could not retrieve customers');
          });
      }, []);
    
      const customerComponents = customerList.map((customer) => {
        return (
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
                />
            )
      })
    
        return (
          <div>
            {customerComponents}
          </div>
        )
}

export default Customers; 
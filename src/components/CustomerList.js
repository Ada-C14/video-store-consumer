import React from 'react';
import Customer from './Customer';
import axios from 'axios';

const CustomerList = () => {
    const fakeCustomers = [
        {
            name: 'Dipper Pines',
            id: 1,
            registeredAt: 'today',
            addressed: 'The Mystery Shack',
            city: 'Gravity Falls',
            state: 'OR',
            postalCode: '98087',
            phone: '203 203 2039',
            accountCredit: 12,
            videosCheckedOutCount: 2,
        },
        {
            name: 'Mabel Pines',
            id: 2,
            registeredAt: 'today',
            addressed: 'The Mystery Shack',
            city: 'Gravity Falls',
            state: 'OR',
            postalCode: '98087',
            phone: '203 203 2039',
            accountCredit: 12,
            videosCheckedOutCount: 2,
        }
    ]
    // const [customerList, setCustomerList] = useState([])
    // API call to GET the customers
    // .map to pass the customers one at a time to Customer component
    // return the mapped array

    const getCustomers = () => {
        return (
            fakeCustomers.map((customer) => {
                return <Customer customer={customer} />
            })
        )
    }

    return (
        <div>
            { getCustomers() }
        </div>
    );
}

// PROPS? - should App hold the URL for the api call and pass it down to CustomerList?

export default CustomerList;
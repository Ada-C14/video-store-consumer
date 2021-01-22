import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './RentalForm.css'

const RentalForm = (props) => {
    const [message, setMessage] = useState('')
    const [checkedOut, setCheckedOut] = useState(false)
    const setDueDate = () => {
        const date = new Date(new Date(new Date().setDate(new Date().getDate()+7)).toString().split('GMT')[0]+' UTC').toISOString().split('T')[0]
        console.log(typeof(date) === 'string')
        return date
        
    }

    const checkout = () => {
        axios.post(`${props.url}/rentals/${props.selectedVideo.title}/check-out?customer_id=${props.selectedCustomer.id}&due_date=${setDueDate()}`)
            .then(response => {
                setMessage(`${props.selectedCustomer.name} successully checked out ${props.selectedVideo.title}. It is due on ${setDueDate()}.`)
            })
            .catch(error => {
                setMessage(error)
            });
        setCheckedOut(true)
    }






    const form = 
    checkedOut ? '' : <button className="button" onClick={() => checkout()}>Checkout</button>

    const error = 
    <h1 className="error" >Please Select a Video and Customer to make a rental!</h1>
    
    const validRental = (props.selectedCustomer === null || props.selectedVideo === null ) ? error : form

    const customerInfo = props.selectedCustomer === null ? '' : <section className="cust_info">
    <h4>{props.selectedCustomer.name}</h4>
    <p>{props.selectedCustomer.phone}</p>
    <p>{props.selectedCustomer.registeredAt}</p>
    <p>{props.selectedCustomer.address}</p>
    <p>{props.selectedCustomer.city}, {props.selectedCustomer.state} {props.selectedCustomer.postalCode}</p>
    <p>{props.selectedCustomer.accountCredit}</p>
    <p>{props.selectedCustomer.videosCheckedOutCount}</p> 
</section>

    const vidStuff = props.selectedVideo === null ? '' : <section className="vid">
    <h4>{props.selectedVideo.title}</h4>
    <img src={props.selectedVideo.imageUrl} alt={props.selectedVideo.title} />
</section>

    return (
        <div>
            <h2>{message}</h2>
            {vidStuff}
            {customerInfo}
            {validRental}
        </div>
    );
}

RentalForm.propTypes = {
    url: PropTypes.string.isRequired,
    selectedCustomer: PropTypes.object.isRequired,
    selectedVideo: PropTypes.object.isRequired
}

export default RentalForm;
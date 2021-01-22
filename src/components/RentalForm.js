import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './RentalForm.css'

const RentalForm = (props) => {
    const [message, setMessage] = useState('');
    const [checkedOut, setCheckedOut] = useState(false);
    const dueDate = new Date(new Date(new Date().setDate(new Date().getDate()+7)).toString().split('GMT')[0]+' UTC').toISOString().split('T')[0];

    const checkout = () => {
        axios.post(`${props.url}/rentals/${props.selectedVideo.title}/check-out?customer_id=${props.selectedCustomer.id}&due_date=${dueDate}`)
            .then(response => {
                setMessage(`${props.selectedCustomer.name} successfully checked out ${props.selectedVideo.title}, which is due on ${dueDate}.`)
                setCheckedOut(true);
            })
            .catch(error => {
                setMessage(error)
            });
        // setCheckedOut(true)
    }

    const form = 
    checkedOut ? '' : <button className="button" onClick={checkout}>Checkout</button>

    const error = 
    <h1 className="error">Please select a Video and Customer to make a Rental!</h1>
    
    const validRental = (props.selectedCustomer === null || props.selectedVideo === null ) ? error : form

    const customerInfo = props.selectedCustomer === null ? '' : <section className="cust_info">
    <h4>Customer Information</h4>   
    <p>Name: {props.selectedCustomer.name}</p>
    <p>Phone Number: {props.selectedCustomer.phone}</p>
    <p>Member Since: {props.selectedCustomer.registeredAt.substr(0, 10)}</p>
    <p>Address: {props.selectedCustomer.address}, {props.selectedCustomer.city}, {props.selectedCustomer.state} {props.selectedCustomer.postalCode}</p>
    <p>Account Credit: ${props.selectedCustomer.accountCredit}</p>
    <p>Videos Checked Out: {props.selectedCustomer.videosCheckedOutCount}</p> 
</section>

    const video = props.selectedVideo === null ? '' : <section>
    <h4>{props.selectedVideo.title} ({props.selectedVideo.releaseDate.substr(0, 4)})</h4>
    <img src={props.selectedVideo.imageUrl} alt={props.selectedVideo.title} />
</section>

    return (
        <div>
            <h2>{message}</h2>
            <div className="rental-form">
                {customerInfo}
                {video}
            </div>
            <div>{validRental}</div>
        </div>
    );
}

RentalForm.propTypes = {
    url: PropTypes.string.isRequired,
    selectedCustomer: PropTypes.object.isRequired,
    selectedVideo: PropTypes.object.isRequired
}

export default RentalForm;
import React from 'react';
import './Selected.css';

const Selected = (props) => {
    let selectedVideoInfo = '';
    if(props.video) {
    selectedVideoInfo = props.video.title;
    }

    let selectedCustomerInfo = '';
    if(props.customer) {
        selectedCustomerInfo = props.customer.name;
    }
    return (
        <div className="selected">
            <ul className="selected-items">
                <li>Selected video: {selectedVideoInfo}</li>
                <li>Selected customer: {selectedCustomerInfo}</li>
            {/* <button>Checkout</button> */}
            </ul>
            <button 
            className="checkout-button" 
            onClick= {props.onCheckout} 
            disabled={!props.video || !props.customer}>
                <strong>Checkout</strong>
            </button>
        </div>
        );
    };
export default Selected;
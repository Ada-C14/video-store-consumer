import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Rentals.css'

const Rentals = (props) => {
    // const customer = props.chosenCustomer
    // const video = props.chosenVideo

    // if (props.chosenCustomer != null) {
    //     const customer = props.chosenCustomer.name
    // } else {
    //     return 
    // }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (props.chosenCustomer && props.chosenVideo) {
            checkoutVideo();
            props.resetCallback();
        } else {
            props.setMessage('Nothing done, make sure you have a customer and video selected');
        }
    }

    const checkoutVideo = () => {
        const { chosenCustomer, chosenVideo } = props;
        const title = chosenVideo.title

        const params = {
            customerID: chosenCustomer.id,
            videoID: chosenVideo.id
        }
    
        const checkoutURL = props.url + `/rentals/${title}/check-out`;

        axios.post(checkoutURL, params)
        .then(() => {
            props.setMessage(`${chosenVideo.title} was successfully checked out to ${chosenCustomer.name}`);
        })
        .catch((error) => {
            props.setMessage(error.message)
        });
    }

    const visibility = () => {
        if (props.chosenCustomer && props.chosenVideo) {
            return ''
        } else {
            return 'disabled'
        }
    }
    



    if (!props.chosenCustomer || !props.chosenVideo) {
        return (null)
    } else {

        return (
            <section className="checkout-form">
                <form onSubmit={ onSubmitHandler }>
                    <div className="checkout-form__movie">
                        <label htmlFor="selectedMovie">{ props.chosenVideo.title }</label>
                        <input type="hidden" name="selectedMovie" value={ props.chosenVideo} />
                    </div>
                    <div className="checkout-form__customer">
                        <label htmlFor="selectedCustomer">{ props.chosenCustomer.name }</label>
                        <input type="hidden" name="selectedCustomer" value={ props.chosenCustomer } />
                    </div>
                    <div className="checkout-form__submit">
                        <input className= { `button button-large ${ visibility() }` }
                        type="submit" name="submit" value="Check Out Now" />
                    </div>
                </form>
            </section>
        // <div className="rental-form">
        //     {props.chosenCustomer}
        //     {/* <label htmlFor="chosenVideo">{props.chosenVideo.title}</label> */}
        //     {props.chosenVideo}
        //     {/* <label htmlFor="chosenCustomer">{props.chosenCustomer}</label> */}
        // </div>
        )
    }
}

Rentals.propTypes = {
    chosenVideo: PropTypes.object,
    chosenCustomer: PropTypes.object,
    resetCallback: PropTypes.func,
    url: PropTypes.string,
    setMessage: PropTypes.func,
}

export default Rentals;
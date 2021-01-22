import React, { useState } from 'react';
import PropTypes from 'prop-types';
import scarecrow from '../scarecrow.jpg'
import axios from 'axios';

const Rental = (props) => {

    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');

    const returnDate = () => {
        const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        
        const year = dueDate.getFullYear();
        const month = dueDate.getMonth() + 1;
        const day = dueDate.getDate();

        

        return (
            `${year}-${month}-${day}`
        )
    }

    const rentVideo = () => {
        if (props.video !== null && props.customer !== null) {

            const date = returnDate();

            axios.post(`http://localhost:3000/rentals/${props.video.title}/check-out?customer_id=${props.customer.id}&due_date=${date}`)
            .then((response) => {
                setAlert(`You have successfully rented ${props.video.title}!`);
                setError('');
            
            props.setSelectedCustomer(null);
            props.setSelectedMovie(null);
            })
            .catch((error) => {
                setError('Could not create a rental. Not enough inventory.');
                setAlert('');
            })
        }
    }

    const returnVideo = () => {
        if (props.video !== null && props.customer !== null) {
        axios.post(`http://localhost:4000/rentals/${props.video.title}/return?customer_id=${props.customer.id}`)
            .then((response) => {
                setAlert(`Thank you for returning ${props.video.title}!`);
                setError('');
            // clear sessionContext after rental made
            props.setSelectedCustomer(null);
            props.setSelectedVideo(null);
            })
            .catch((error) => {
                setError('Something went wrong, could not return video!');
                setAlert('');
            })
        }
    }

    const rentalButtons = () => {
        if (props.video !== null && props.customer !== null) {
            return (
                <div>
                    <button onClick={() => rentVideo()} >
                        Rent Movie
                    </button>
                    <button onClick={() => returnVideo()} >
                        Return Movie
                    </button>
                </div>
            )
        }
    }

    return (
        <div>
            { error ? <div className="alert alert-warning">{error}</div> : '' }
            { alert ? <div className="alert alert-success">{alert}</div> : '' }
            
            <img src={scarecrow} alt="Scarecrowz Video" />;
            
            <h3>Select a Video and Customer to Check-out or Check-in a VIDEO!</h3>
            <div>
              <p>Selected Movie: <strong>{props.video === null ? 'no movie selected' : props.video.title}</strong></p>
              <p>Selected Customer: <strong>{props.customer === null ? 'no customer selected' : props.customer.name}</strong></p>
            </div>
            <div>
                {rentalButtons()}
            </div>
        </div>
    )
}

Rental.propTypes = {
    video: PropTypes.object,
    customer: PropTypes.object,
    setSelectedCustomer: PropTypes.func,
    setSelectedVideo: PropTypes.func
}

export default Rental;
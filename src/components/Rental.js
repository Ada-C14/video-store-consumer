import React from 'react';
import MovieDetails from './MovieDetails'
import CustomerDetails from './CustomerDetails'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Rental.css';
import PropTypes from 'prop-types';

const Rental = ({movie, customer, successfulRental, rentalCallback}) => {
  const buttonDisplay = (movie !== '' && customer !== '') ? <button onClick={() => {rentalCallback()}} className='btn btn-secondary btn-lg btn-block'>Create Rental</button> : ''
  
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Selected Movie
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{ movie !== '' ? <MovieDetails movie={movie} /> : `Currently no movie is selected` }</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Selected Customer
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{ customer !== '' ? <CustomerDetails customer={customer} /> : 'Currently no customer is selected' }</Card.Body>
          </Accordion.Collapse>
        </Card>
        {buttonDisplay}
        { successfulRental ? <p className='success'>{`Successfully checked out ${movie.title} to ${customer.name}!`}</p> : ''}
      </Accordion>
  </div>
  )
};

Rental.propTypes = {
  // unable to add proptypes to movie and customer
  // it changes between an empty string and object
  // movie: PropTypes.string,
  // customer: PropTypes.string,
  successfulRental: PropTypes.bool.isRequired,
  rentalCallback: PropTypes.func.isRequired,
}

export default Rental;
import React from 'react';
import PropTypes from 'prop-types';

import './Homepage.css';

const Homepage = (props) => {
  const calcDaysOverdue = (dueDate) => {
    return Math.floor((Date.now() - Date.parse(dueDate))/(1000*60*60*24))
  }
  const overdueList = props.overdue.map((person) => {
    return <p>{person.name} is {calcDaysOverdue(person.due_date)} days overdue >:| </p>
  })

  return (
    <div>
      <h1 className='shame'>Page of Shame</h1>
      {overdueList}
    </div>
  )
}

Homepage.propTypes = {
  overdue: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      // eslint-disable-next-line camelcase
      customer_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // eslint-disable-next-line camelcase
      postal_code: PropTypes.string,
      // eslint-disable-next-line camelcase
      checkout_date: PropTypes.string.isRequired,
      // eslint-disable-next-line camelcase
      due_date: PropTypes.string.isRequired
    })
  )
};

export default Homepage;
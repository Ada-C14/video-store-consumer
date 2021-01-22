import React from 'react';
import PropTypes from 'prop-types';

import './Homepage.css';

const EMOJI_LIST = ['🤨', '😒', '🙄', '🤯', '😤', '😡', '😠', '🤬', '👿', '💢', '😾', '😑', '😩', '🤦', '😱', '😧']
// eslint-disable-next-line no-extend-native
Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

const Homepage = (props) => {
  const calcDaysOverdue = (dueDate) => {
    return Math.floor((Date.now() - Date.parse(dueDate))/(1000*60*60*24))
  }
  const overdueList = props.overdue.map((person) => {
    const daysOverdue = calcDaysOverdue(person.due_date)
    return <p className='overdue-text'>{EMOJI_LIST.sample()} <b>{person.name}</b> still has <b>{person.title}</b> which is <b>{daysOverdue} {daysOverdue > 1 ? 'days' : 'day'} </b> overdue {EMOJI_LIST.sample()} </p>
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
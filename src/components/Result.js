import React, { } from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
  return (
    <div>
      {props.title} - {props.release_date}
      {/* <img alt= "Movie Poster"> {props.image_url}</img> */}
    </div>
    
  );
}

Result.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line camelcase
  release_date: PropTypes.string,

};

export default Result
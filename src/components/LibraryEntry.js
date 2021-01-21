import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// This returns an entry in the video library: title and id

const LibraryEntry = (props) => {
  return (
    <div className='library_entry'>
      {props.id}: {props.title}
    </div>


  )
}

// for callback, need to have id come back up so we can pass it to rails
// hold onto it (setState) then pass it
LibraryEntry.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number
}


export default LibraryEntry;
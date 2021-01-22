import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './SearchForm.css';


const SearchForm = (props) => {

  const [searchField, setSearchField] = useState('')

  const onInputChange = (event) => {
    const newFormField = event.target.value
    // const newFormFields = {
    //   ...searchField,
    // }
    console.log(searchField)
    // newFormFields[event.target.name] = event.target.value;
    setSearchField(newFormField);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.searchCallback(searchField);
    setSearchField('');
  };

  return (
    <div className="d-inline-flex p-2">
      <form onSubmit={onFormSubmit} className="form-inline my-2 my-lg-0">
      <input onChange={onInputChange} className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="">Search</button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  searchCallback: PropTypes.func.isRequired
};
  

export default SearchForm;

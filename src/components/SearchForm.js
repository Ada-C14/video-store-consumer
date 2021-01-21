import React, { useState } from 'react';
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
    <form onSubmit={onFormSubmit} className="">
    <input onChange={onInputChange} className="" type="text" placeholder="Search"/>
    <button className="" type="">Search</button>
    </form>
);
}

export default SearchForm;

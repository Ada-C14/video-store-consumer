import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmitCallback }) => {
    const [titleField, setTitleField] = useState('');

    const onInputChange = (event) => {
        setTitleField(event.target.value);
    };

    const onSubmitSearch = (event) => {
        event.preventDefault();
        if (titleField.length > 0) {
            onSubmitCallback(titleField);
        }
    };
    
    return (
        <div className="search-form">
            <h3>Need to add a movie to your library?</h3>
            <form className="search-form__form" onSubmit={ onSubmitSearch } >
                <label>Title:</label>
                <input type="text" value={titleField} onChange={ onInputChange } />
                <input type="submit" value="Search" className="btn btn-primary"/>
            </form>
        </div>
    );
};

SearchForm.propTypes = {
    onSubmitCallback: PropTypes.func.isRequired,
}

export default SearchForm;
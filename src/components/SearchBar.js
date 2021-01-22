import React, { useState } from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types'

const SearchBar = ({search}) => {
    const [formFields, setFormFields] = useState({
        search: '',
    });

    const onFieldChange = (event) => {
        setFormFields({search: event.target.value});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        search(formFields.search);

        setFormFields({
            search: '',
        });
    };

    return (
        <div>
            <form
                className='new-search__form'
                onSubmit={onFormSubmit}
            >
                <div>
                    <input 
                        onChange={onFieldChange}
                        placeholder='search'
                        name='search'
                        value={formFields.search}
                    />
                    <input
                        className='new-search__submit-button'
                        type='submit'
                        value='Submit'
                    />     
                </div>
            </form>
        </div>
    )
};

SearchBar.propTypes = {
    search: PropTypes.func.isRequired,
}

export default SearchBar;
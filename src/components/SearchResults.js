import React from 'react';
import FoundMovie from './FoundMovie';
import './SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({results, addMovie}) => {
    const searchComponents = results.map((movie) => {
        return (
            <FoundMovie 
                title={movie.title}
                image_url={movie.image_url}
                external_id={movie.external_id}
                key={movie.external_id}
                addMovie={addMovie}
            />
        );
    });

    return (
        <div className='search_results'>
            {searchComponents}
        </div>
    )
};

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
    addMovie: PropTypes.func.isRequired,
}

export default SearchResults;
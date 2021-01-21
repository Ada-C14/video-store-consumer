import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Video from './Video';
import axios from 'axios';

const SearchResultList = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const searchSubmit = (title) => {   
        // TODO pass URL down in props?
        axios.get(`http://localhost:3000/videos?query=${title}`)
            .then((response) => {
                if (response.data.length > 0) {
                    setSearchResults(response.data);
                } else {
                    setSearchResults(['none'])
                }
                setError('');
            })
            .catch((error) => {
                setError(error.message);
                setSearchResults([]);
            });
    };

    const buildResults = searchResults.map((video) => {
        return (
            <Video
                // key={video.external_id}
                title={video.title}
                imageUrl={video.image_url}
                overview={video.overview}
            />
        )
    })

    return (
        <div>
            <SearchForm onSubmitCallback={searchSubmit} />
            { error ? error : '' }
            <h3>Search Results</h3>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>TITLE</th>
                        <th>IMAGE</th>
                        <th>OVERVIEW</th>
                    </tr>
                </thead>
                <tbody>
                    { searchResults[0] === 'none' ? <tr><td>sorry, film not found</td></tr> : buildResults }
                </tbody>
            </table>
        </div>
    )
}

export default SearchResultList;
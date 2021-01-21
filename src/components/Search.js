import {React, useState, useEffect} from 'react'
import {Select} from 'react-select'
import axios from 'axios'

const Search = () => {

    const SearchApiUrl = 'http://localhost:3000/videos?query='

    const [searchTerm, setSearchTerm] = useState('')
    const [submittedSearchTerm, setSubmittedSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        setSubmittedSearchTerm(searchTerm)
    }

    useEffect(() => {
        axios.get(SearchApiUrl + submittedSearchTerm)
        .then((response) => {
            const results = response.data
            setSearchResults(results);
        })
        .catch((error) => {
            setErrorMessage(error.message);
            console.log(error.message);
        });
    }, [submittedSearchTerm]);

    function ListSearchResults() {
        const listItems = searchResults.map((video) =>
        <li key={video.id}>
            {video.title}
            {video.overview}
            {video.release_date}
        </li>
        );
    return (
    <ul>{listItems}</ul>
    )}


    return(
        <div>
        <form className="search" onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Search TMDB Database"
                value={searchTerm}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
        </form>
        
        <ListSearchResults />

        </div>
    )

}

export default Search;
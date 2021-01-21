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

    const addToLibraryHandler = (event, video) => {
        event.preventDefault()
        addVideo(video)
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

    
    const addVideo = ((video) => { 

        const url = new URL('http://localhost:3000/videos?')

        const params = new URLSearchParams(url.search);
        
        //Add params
        params.set('title', video.title);
        params.set('overview', video.overview);
        params.set('release_date', video.release_date);
        params.set('image_url', video.image_url);
        params.set('external_id', video.external_id);
        params.set('inventory', video.inventory);

        const PostURL = url + params.toString();
        
        axios.post(PostURL)
        .then((response) => {
            setErrorMessage('Video successfully added')
        })
        .catch((error) => {
            setErrorMessage('Video not successfully added');
        });
    })

    function ListSearchResults() {
        const listItems = searchResults.map((video) =>
        <li key={video.id}>
            <button onClick={(event) => addToLibraryHandler(event, video)} type="submit">Add to Your Library</button>
            {video.title}
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
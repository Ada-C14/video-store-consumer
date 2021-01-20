import React, { useState } from 'react';
import axios from 'axios'
import './VideoSearch.css'
import VideoSearchResult from './VideoSearchBar';

const VideoSearch = (props) => {
    const BASE_URL = 'http://localhost:3000/'
    const VIDEOSEARCH_API_PATH = 'videos?query='


    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);

    const onVideoSearch = (searchWord) => {
        axios.get(BASE_URL + VIDEOSEARCH_API_PATH)
        .then( response => {
            setSearchResults(response.data)
            setErrorMessage('')
        })
        .catch( error => {
            setErrorMessage(error.message);
        })
    }
}

// const searchComponents = searchResults.map((item, id) => {})

return(
    <div>
        <div>

        </div>

    </div>
)
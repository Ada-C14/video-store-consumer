import React, { Component, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video.js'

import './Search.css';

const MOVIES_RAILS = 'http://localhost:3000/videos'

const Search = (props) => {

    // need a search bar so we can enter the title
    // make the axios request with the title to movieDB
    // save the results data to a state variable
    // display the results on the page 
    // have a button to add the results to our rails API 

    // in  rails API: write the create action controller and its tests 

    // confirm that the video was added by going into our library page 


    const [title, setTitle] = useState('');
    const [query, setQuery] = useState('')
    const [searchResult, setSearchResult] = useState([]);

    // check vidList prop for matching external_id

    const inLibrary = (extId, vidList) => {
        for (const video of vidList) {
            if (video.external_id === extId) {
                return true;
            }
        }
    
        return false;
    }
    const resultList = (arrayResults) => {
        let results = []
        for (const video of arrayResults) {
            let vid = <Video id = {video.id} 
            title = {video.title} 
            overview = {video.overview} 
            releaseDate = {video.release_date}
            imageUrl = {video.image_url}
            externalId = {video.external_id}
            clickButton = {props.curVid}
            mode = { inLibrary(video.external_id, props.videoList) ? 'library' : 'add'}
            />
        results.push(vid);
        }
        console.log(results);
        return results;
    }

    useEffect (()=>{
        if (searchResult.length > 0) {
            resultList(searchResult);
        }
    }, [searchResult])


    const onSearchChange = (event) => {
        setTitle(event.target.value)
    }

    // to register enter key with submit button
    const enterKey = (event) => {
        if (event.key === 'Enter') {
            console.log('here')
            onSearchSubmit(event);
        }
    }
    const onSearchSubmit = (event) => {
        event.preventDefault();


        // eslint-disable-next-line camelcase
        axios.get(`${MOVIES_RAILS}/?query=${title}`)
            .then((res) => {
                setSearchResult(res.data); 
                setQuery(title);
            })
            .catch((err) => {
                props.setError([err.message])

            })
        

        setTitle('')
    }


    return (
        <div>
            <h1>search for a video</h1>
            <form onSubmit={onSearchSubmit} onKeyPress = {enterKey}>
                <label> search: </label>
                    <input type='text' placeholder='enter title' value={title} onChange={onSearchChange}/>
                <button>search title</button>
            </form>
            <h2>{query ? `results for "${query}"` : 'no videos to display. start searching!'}</h2>
            <section className = 'search_results'>
                {resultList(searchResult)}
            </section>
        </div>
        
    )
}

Search.propTypes = {

};

export default Search;
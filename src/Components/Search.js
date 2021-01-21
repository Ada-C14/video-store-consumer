import React, { Component, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video.js'

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
    const [searchResult, setSearchResult] = useState([]);

    const resultList = (arrayResults) => {
        let results = []
        for (const video of results) {
            let vid = <Video id = {video.id} 
            title = {video.title} 
            overview = {video.overview} 
            releaseDate = {video.release_date}
            imageUrl = {video.image_url}
            externalId = {video.external_id}
            mode = 'addVideo'
            />
        results.push(vid);
        }

        return results;
    }
    const onSearchChange = (event) => {
        setTitle(event.target.value)
    }

    // to register enter key with submit button
    const enterKey = (event) => {
        if (event.key === 'Enter') {
            onSearchSubmit(event);
        }
    }
    const onSearchSubmit = (event) => {
        event.preventDefault();


        // eslint-disable-next-line camelcase
        axios.get(`${MOVIES_RAILS}/?query=${title}`)
            .then((res) => {
                console.log(res.data) // array of movies
                // const results = res.data.results[0]
                // setSearchResult({
                //     title: results.title,
                //     overview: results.overview,
                //     releaseDate: results.release_date,
                //     posterURL: results.poster_path
                // })
                setSearchResult(res.data);
                console.log(searchResult)

            })
            .catch((err) => {
                props.setError(err)

            })
        

        setTitle('')
    }


    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={onSearchSubmit} onKeyPress = {enterKey}>
                <label> Search:
                    <input type='text' placeholder='title' value={title} onChange={onSearchChange}/>
                </label>
                <button>Search title</button>
            </form>
            <section>
                {resultList(searchResult)}
            </section>
        </div>
        
    )
}

Search.propTypes = {

};

export default Search;
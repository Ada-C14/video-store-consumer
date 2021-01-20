import React, { Component, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const MOVIES_SEARCH = 'https://api.themoviedb.org/3/search/movie'
const MOVIES_RAILS = 'http://localhost:3000/videos'

const Search = (props) => {

    // need a search bar so we can enter the title
    // make the axios request with the title to movieDB
    // save the results data to a state variable
    // display the results on the page 
    // have a button to add the results to our rails API 

    // in  rails API: write the create action controller and its tests 

    // confirm that the video was added by going into our library page 

    console.log(process.env.REACT_APP_API_KEY)
    const API_KEY =`${process.env.REACT_APP_API_KEY}`


    const [title, setTitle] = useState('')
    const [searchResult, setSearchResult] = useState({
        title: '',
        overview: '',
        releaseDate: '',
        posterURL: '',
        
    })

    const [errorMsg, setErrorMsg] = useState('')

    const onSearchChange = (event) => {
        setTitle(event.target.value)
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

            })
            .catch((err) => {
                setErrorMsg(err)

            })
        

        setTitle('')
    }


    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={onSearchSubmit}>
                <label> Search:
                    <input type='text' placeholder='title' value={title} onChange={onSearchChange}/>
                </label>
                <button>Search title</button>
            </form>
            <section>
                <h2>{searchResult.title}</h2>
                <p>{searchResult.overview}</p>
                <p>{searchResult.releaseDate}</p>
            </section>
            <button>Add to Libary</button>
        </div>
        
    )
}

Search.propTypes = {

};

export default Search;
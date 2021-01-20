import { useEffect, useState } from 'react';
import './MovieLibrary.css';
import propTypes from 'prop-types';
import axios from 'axios';

// From the video library page, I can see a list of all videos in the video library

export default function MovieLibrary() {

    const [movies, setMovies] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/videos')
            .then((response) => {
                console.log(response)
                setMovies(
                    response.data
                );
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, []);

    return (
        <div className='list'>
            <ul>
                {movies.map((movie) => 
                <li key={movie.id}>
                    {movie.title}
                </li>)}
            </ul>
            {errorMessage ? <div><h2 className="error-display">{errorMessage}</h2></div> : ''}
        </div>

    )

}


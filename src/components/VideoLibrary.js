import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video';


const VideoLibrary = (props) => {

    const [videoList, setVideoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
   

    const videosUrl = 'http://localhost:3000/videos'

    useEffect(() => {
        axios.get(videosUrl)
            .then((response) => {
                const newVideoList = response.data;
                setVideoList(newVideoList);
            })
            .catch((errorMessage) => {
                setErrorMessage(errorMessage.message);
            })
    }, []);

    const rows = videoList.map((video) => {
    
        return (
            <Video
                key={video.id}
                id={video.id}
                title={video.title}
                imageUrl={video.image_url}
                overview={video.overview}
                selectVideoCallback={props.selectVideoCallback}
                isSelected={props.selectedVideo? video.id === props.selectedVideo.id : null}
            />
        )
    })

    return (
        <div>
            <h2>Rental Library</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="tableHeader">ID</th>
                        <th className="tableHeader">TITLE</th>
                        <th className="tableHeader">SELECT</th>
                        <th className="tableHeader">OVERVIEW</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table> 
        </div>
    );
}

VideoLibrary.propTypes = {
    url: PropTypes.string.isRequired,
    selectVideoCallback: PropTypes.func.isRequired
};

export default VideoLibrary;
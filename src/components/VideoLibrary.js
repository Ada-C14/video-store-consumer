import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video';
import './VideoLibrary.css'

const VideoLibrary = (props) => {

    const [videoList, setVideoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videosUrl = 'http://localhost:3000/videos'

    useEffect(() => {
        axios.get(videosUrl)
            .then((response) => {
                const newVideoList = response.data;
                setVideoList(newVideoList);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }, []);

    const itsNull = null

    const selectVideo = (selectedVideo) => {
      setSelectedVideo(selectedVideo);
      return;
    }

    const rows = videoList.map((video) => {
        return (
            <Video
                key={video.id}
                id={video.id}
                title={video.title}
                imageUrl={video.image_url}
                overview={video.overview}
                selctVideoCallback={selectVideo}
                selectedVideo={itsNull}
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
    url: PropTypes.string.isRequired
};

export default VideoLibrary;
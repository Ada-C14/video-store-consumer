import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import axios from 'axios';

const API_URL_BASE = 'http://localhost:3000/videos';

const VideoCollection = (props) => {

    const [videoList, setVideoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios.get(API_URL_BASE)
        .then((response) => {
            setVideoList(response.data);
        })
        .catch((error) => {
            // Still need to handle errors
            setErrorMessage(error.message);
        });
    }, []);

    const videoComponents = videoList.map((video, i) => {
        return (
            <div key={i}>
                <Video
                    video={video} onSelectVideo={props.onSelectVideo} showButton={props.showButton}
                />
            </div>
        );
    });

    return (
        <div className = "VideoCollection">
            {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
            {videoComponents}
        </div>
        );

  
};

// StudentCollection.propTypes = {
//   students: PropTypes.arrayOf(PropTypes.shape(
//     {
//       fullName: PropTypes.string.isRequired,
//       email: PropTypes.string,
//       present: PropTypes.bool,
//       id: PropTypes.number.isRequired,
//     },
//   )),
//   onUpdateStudent: PropTypes.func.isRequired,
// }



export default VideoCollection;

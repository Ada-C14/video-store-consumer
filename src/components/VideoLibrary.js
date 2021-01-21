// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import Video from './Video';
// import AsyncSelect from 'react-select/async';




// const VideoLibrary = (props) => {
//     const [videos, setVideos] = useState([])
//     const [selectedVideo, setSelectedVideo] = useState(null)
//     const [errorMessage, setErrorMessage] = useState('')

//     useEffect(() => {
//         axios.get(`${props.url}/videos`)
//             .then((response) => {
//                 const apiVideoList = response.data
//                 setVideos(apiVideoList);
//             })
//             .catch((error) => {
//                 setErrorMessage(error.message);
//             });
//         }, []);

//     const getVideos = () => {
//         return videos.map((video) => {
//             return (<Video 
//                 id={video.id}
//                 title={video.title}
//                 overview={video.overview}
//                 release_date={video.releaseDate}
//                 image_url={video.imageUrl}
//                 external_id={video.externalId} 
//                 key={video.id} 
//             />);
//         });
//     }

//     const selectVideo = (id) => {
//         if (selectedVideo != null) {
//             let video = videos.find(video => video.id === id);
//             setSelectedVideo(video);
//         } else {
//             setSelectedVideo(null)
//             let video = videos.find(video => video.id === id);
//             setSelectedVideo(video);
//         }
//     }


//     const loadOptions = (inputValue, setSelectedVideo) => {
//         const titles = videos.map((video) => {
//             return video.title
//         })
//         const requestResults = () => {
            
//         }

//         setSelectedVideo(requestResults)
//     }

//     return (
//         <div>
//             <h3>Our Video Library</h3>
//             <h6>Current Selected Video: {selectedVideo}</h6>
//             <AsyncSelect
//                 loadOptions={loadOptions}
//             />
//             <p>{errorMessage}</p>
//             {getVideos()}
//         </div>
//     );
// }

// VideoLibrary.propTypes = {
//     url: PropTypes.string.isRequired
// }

// export default VideoLibrary;

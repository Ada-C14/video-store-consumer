import {React, useState, useEffect} from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import axios from 'axios'
import VideoLibrary from './VideoLibrary'


const SelectedVideo = (props) => {
    
    const video = props.video
    
    return(
        video &&(
        <div>
            <h3>{video.title}</h3>
            <p>{video.overview}</p>
            <p>Released: {video.release_date}</p>
            <img src={video.image_url} />
        </div>
        ))
    }

    export default SelectedVideo;
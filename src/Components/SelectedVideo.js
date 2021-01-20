import {React, useState, useEffect} from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import axios from 'axios'
import VideoLibrary from './VideoLibrary'


const SelectedVideo = (props) => {
    
    const title = props.video.value.title
    const overview = props.video.value.overview
    
    return(
        <div>
            <h3>{title}</h3>
            <p>{overview}</p>
            {/* <img>{image}</img> */}
        </div>
        )
    }

    export default SelectedVideo;
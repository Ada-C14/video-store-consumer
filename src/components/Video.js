import React, {useState} from 'react';
import './Video.css'


const Video = (props) => {
    const [showVideoDetails, setShowVideoDetails] = useState(false)
    const onSelect = () => {
        props.onSelectVideoCallback(props.id);
    }

    return (
        <div className = "video">
            <h2>{props.title}</h2>
            <img className = 'image'src={props.image_url} alt='video cover'
                onMouseEnter={() => setShowVideoDetails(true)}
                onMouseLeave={() => setShowVideoDetails(false)}/>
            {showVideoDetails && (
            <ul>
                <p className= 'overview'>Overview: {props.overview}</p>
                <p>Release Date: {props.release_date}</p>
            </ul>
            )}

            <button onClick={onSelect}> Select </button>
        </div>
    )
}


export default Video; 

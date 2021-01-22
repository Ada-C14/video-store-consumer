import React from 'react';
import Video from './Video';

const SelectableVideo = (props) => {
    return (
        <div>
        <Video
            id={props.video.id}
            title={props.video.title}
            image_url={props.video.image_url}
            releaseDate={props.video.release_date}
            />
        <button onClick={()=> props.onSelectVideo(props.video)}>Select</button>
        </div>
        );
    };
    
export default SelectableVideo;
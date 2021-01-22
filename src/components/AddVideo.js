import React, {useState, useEffect} from 'react';
import './AddVideo.css';
// import humps from 'humps';
// import PropTypes from 'prop-types';
const axios = require('axios')



const BASE_URL = 'http://localhost:3000/add';


const AddVideo = (props) => {
    const [AddedVideo, setAddedVideo] = useState({});

    const onSubmitAdd = (event) => {
        event.preventDefault();
        setAddedVideo(props.video);
    }

    useEffect(() => {
        if (AddedVideo.title === undefined) {
            return;
        }
        axios.post(BASE_URL, AddedVideo)

            .then((response) => {
                if (response.data) {
                    props.setDisplayMessage(AddedVideo.title + ' added! Cool!');
                    console.log(response.data);
                } else {
                    props.setDisplayMessage(AddedVideo.title + ' has already been added');
                }
            })
            .catch((error) => {
                console.log(error.response.data.errors);
                props.setDisplayMessage('Unable to add this title to the library.');
            });

        setAddedVideo('');
    },[AddedVideo]);

    return <button className="add-to-video__button" onClick = {onSubmitAdd}>
        Add to Library
    </button>
} ;


export default AddVideo
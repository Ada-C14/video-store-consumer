import React, {useState, useEffect} from 'react';
import humps from 'humps';
import PropTypes from 'prop-types';
const axios = require('axios')


const BASE_URL = 'http://localhost:3000/add';


const AddVideo = (props) => {
    const [AddedVideo, setAddedVideo] = useState({});

    const onSubmitAdd = (event) => {
        event.preventDefault();
        setAddedVideo(props.video);
    }

    useEffect(() => {
        if (AddedVideo.title == undefined) {
            return;
        }
        axios.post(BASE_URL, humps.decamelizeKeys({
            externalId: AddedVideo.external_id,
            title: AddedVideo.title,
            imageUrl: AddedVideo.image_url,
            overview: AddedVideo.overview,
            releaseDate: AddedVideo.release_date,
        }))

        .then((response) => {
            console.log(AddedVideo.title + 'added! Cool!');
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.response.data.errors);
            console.log('Unable to add this title to the library.')
        });
    }, [AddedVideo]);

    return <button onClick = {onSubmitAdd}>
        Add to Library
    </button>
} ;


export default AddVideo
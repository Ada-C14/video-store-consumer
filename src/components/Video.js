import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {

    const onAddFilm = () => {
        const newFilm = {
            'title': props.title,
            'overview': props.overview,
            'release_date': props.releaseDate,
            'inventory': Math.floor(Math.random() * 9) + 1,
            'image_url': `https://image.tmdb.org/t/p/w185/${props.imageUrl}`,
            'external_id': props.externalId,
        }
        console.log(newFilm);
        props.addFilmCallback(newFilm);
    };

    const onSelectFilm = () => {

    };

    return (
        <tr>
            <td className="tableItem">{props.id}</td>
            <td className="tableItem">{props.title}</td>
            <td className="tableItem">
                <button
                    className={props.buttonClass}
                    onClick={ props.buttonText === 'ADD' ? onAddFilm : onSelectFilm }
                >
                    {props.buttonText}
                </button>
            </td>
            {/* <td className="tableItem"><button className="select">SELECT</button></td> */}
            <td className="tableItem">{props.overview}</td>
        </tr>
    )
}

Video.propTypes = {
    // key: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    overview: PropTypes.string,

};

export default Video;
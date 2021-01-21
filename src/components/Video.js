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
    
    const onButtonClick = () => {
        const selected = {
            id: props.id,
            title: props.title
        }
        props.selectVideoCallback(selected);
    }

    const buildButton = () => {
        const buttonValues = {
            className: null,
            onClick: null,
            buttonText: null,
        }

        if (props.buttonText === 'ADD') {
            buttonValues.className = 'add-film';
            buttonValues.onClick = onAddFilm;
            buttonValues.buttonText = props.buttonText;
        } else if (props.isSelected) {
            buttonValues.className = 'selected';
            buttonValues.onClick = onButtonClick;
            buttonValues.buttonText = 'SELECTED';
        } else {
            buttonValues.className = 'select';
            buttonValues.onClick = onButtonClick;
            buttonValues.buttonText = 'SELECT';
        }

        return (
            <button
                className={ buttonValues.className }
                onClick={ buttonValues.onClick }
            >
                { buttonValues.buttonText }
            </button>
        )
    }

    return (
        <tr>
            <td className="tableItem">{props.id}</td>
            <td className="tableItem">{props.title}</td>
            <td className="tableItem">{ buildButton() }</td>
            {/* <td className="tableItem">
                <button
                    className={props.buttonClass}
                    onClick={ props.buttonText === 'ADD' ? onAddFilm : onSelectFilm }
                >
                    {props.buttonText}
                </button>
            </td>
            <td className="tableItem">{props.isSelected? <button className="selected" onClick={onButtonClick}>SELECTED</button> : <button className="select" onClick={onButtonClick}>SELECT</button> }</td> */}
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
    isSelected: PropTypes.bool,
    selectVideoCallback: PropTypes.func,
    releaseDate: PropTypes.string,
    externalId: PropTypes.number,
    buttonText: PropTypes.string,
    addFilmCallback: PropTypes.func,
};

export default Video;
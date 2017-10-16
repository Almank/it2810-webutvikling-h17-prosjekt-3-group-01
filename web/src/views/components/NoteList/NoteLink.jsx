/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

//The class NoteLink renders a note-link-object for the parent NoteList.
export const NoteLink = ({index, title, onClick}) => {
    return(
        <div className="NoteLinkContainer">
            <Link className="NoteButton"
                  key={index}
                  to={`/notebook/${title}`}>

                <h1>{title}</h1>
            </Link>
            <button className="RemoveButton"
                    type="button"
                    onClick={onClick}
                    value={title}>
                <span className='glyphicon glyphicon-minus' />
            </button>
        </div>
    );
};


NoteLink.propTypes = {
    title: propTypes.string,
};

NoteLink.defaultProps = {
    title: 'Note',
};
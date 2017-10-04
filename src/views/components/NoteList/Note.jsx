import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Note extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link className="NoteButton" key={this.props.index} to={`/notebook/${this.props.title}`}>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subject}</h3>
            </Link>
        );
    }

}

Note.propTypes = {
    title: propTypes.string,
    subject: propTypes.string,
    content: propTypes.string,
};

Note.defaultProps = {
    title: 'Note',
    subject: 'No subject',
    content: 'Write your notes here'
};
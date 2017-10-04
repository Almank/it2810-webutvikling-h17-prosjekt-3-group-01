/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class NoteLink extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link className="NoteButton"
                  key={this.props.index}
                  to={`/notebook/${this.props.title}`}>

                <h1>{this.props.title}</h1>
            </Link>
        );
    }

}

NoteLink.propTypes = {
    title: propTypes.string,
};

NoteLink.defaultProps = {
    title: 'Note',
};
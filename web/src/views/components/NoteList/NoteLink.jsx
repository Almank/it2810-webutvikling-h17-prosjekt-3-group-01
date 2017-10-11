/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

//The class NoteLink renders a note-link-object for the parent NoteList.
export class NoteLink extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="NoteLinkContainer">
                <Link className="NoteButton"
                      key={this.props.index}
                      to={`/notebook/${this.props.title}`}>

                    <h1>{this.props.title}</h1>
                </Link>
                <button className="RemoveButton"
                        type="button"
                        onClick={this.props.onClick}
                        value={this.props.title}>
                    <span className='glyphicon glyphicon-minus' />
                </button>
            </div>
        );
    }

}

NoteLink.propTypes = {
    title: propTypes.string,
};

NoteLink.defaultProps = {
    title: 'Note',
};
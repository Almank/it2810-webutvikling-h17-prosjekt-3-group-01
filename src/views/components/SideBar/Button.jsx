/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export class Button extends React.Component {
    render(){
        return (
            <Link className="Button" to={this.props.link}></Link>
        );
    }
}

Button.PropTypes = {
    link: PropTypes.string.isRequired,
}

export default Button;
/**
 * Created by almank on 08.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export class DayEle extends React.Component {

    render(){
        return (
            <button key={this.props.dateFull} className={'dayBox'} onClick={this.props.change.bind(null, this)}>
                <p className={'dayName'}>{this.props.dateName}</p>
                <h1 className={'dayDate'}>{this.props.dayDate}</h1>
            </button>
        )
    }
}

DayEle.PropTypes = {
    change: PropTypes.func.isRequired,
    dateFull: PropTypes.string.isRequired,
    dateName: PropTypes.string.isRequired,
    dayDate: PropTypes.string.isRequired,
};
/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export class ContentHeader extends React.Component {

    render(){
        return (
            <div className='calendarBoxContent'>
                <div className='leftCalendarBoxContent'>
                    <h2>When</h2>
                </div>

                <div className='middleCalendarBoxContent'>
                    <h2>Title</h2>
                </div>
                <div className='rightCalendarBoxContent'>
                    <h2>About</h2>
                </div>
                <button className='icon-topright' onClick={this.props.closeForm}>
                    <span className='glyphicon glyphicon-plus'/>
                </button>
            </div>
        )
    }
}

ContentHeader.PropTypes = {
    closeForm: PropTypes.func,
};
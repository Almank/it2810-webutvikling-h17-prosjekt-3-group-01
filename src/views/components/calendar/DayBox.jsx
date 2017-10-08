/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class DayBox extends React.Component {

    createDays() {
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        let dayOfWeek = new Date().getDay();
        let dayDate = new Date().getDate();

        let dayName;
        let dayList = [];
        for (let i=0;i<7;i++) {
            if (dayOfWeek === 1) {
                dayName = days[0];
            } else if (dayOfWeek === 2) {
                dayName = days[1];
            } else if (dayOfWeek === 3) {
                dayName = days[2];
            } else if (dayOfWeek === 4) {
                dayName = days[3];
            } else if (dayOfWeek === 5) {
                dayName = days[4];
            } else if (dayOfWeek === 6) {
                dayName = days[5];
            } else if (dayOfWeek === 7) {
                dayName = days[6];
            }
            if (i === 0){
                dayName = 'TODAY';
            }
            if (i === 1){
                dayName = 'TOMORROW';
            }

            dayList.push([dayName,dayDate]);

            dayDate++;
            dayOfWeek++;
            if (dayOfWeek === 8){
                dayOfWeek = 1;
            }
        }

        let dayElements = dayList.map(function(dayName){
            return <button key={dayName} className={'dayBox'}>
                        <p className={'dayName'}>{dayName[0]}</p>
                        <h1 className={'dayDate'}>{dayName[1]}</h1>
                    </button>
        });

        return <div className={'weekBox'}>{dayElements}</div>
    }

    render(){
        return (
            <div onClick={this.props.change.bind(null, this)}>{this.createDays()}</div>
        );
    }
}

DayBox.PropTypes = {
    dayName: PropTypes.string.isRequired,
};

DayBox.defaultProps = {
    dayName: 'Today',
};
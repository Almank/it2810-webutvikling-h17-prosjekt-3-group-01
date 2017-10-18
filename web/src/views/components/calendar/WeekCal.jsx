/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {DayEle} from '../calendar/DayEle';

export class WeekCal extends React.Component {
    getDateFull(i){
        let temp = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
        temp.setDate(temp.getDate() + i);
        return temp.toISOString().slice(0, 10);
    }

    getDayDate(i) {
        return new Date().getDate() + i;
    }

    getDayName(i) {
        const dayNames = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        const firstTwoDays = ['TODAY', 'TOMORROW'];
        let weekDay = new Date().getDay();
        if (i < 2)
            return firstTwoDays[i];
        if (i + weekDay > 7)
            return dayNames[i + weekDay - 7 - 1]; //Minus 7 days, and minus 1 since it starts at 0.
        return dayNames[i + weekDay - 1];
    }

    render() {
        let weekdays = [];
        for (let i = 0; i < 7; i++) {
            weekdays.push(<DayEle change={this.props.change}
                                  key={this.getDateFull(i)}
                                  dateFull={this.getDateFull(i)}
                                  dateName={this.getDayName(i)}
                                  dayDate={this.getDayDate(i)}/>)
        }
        return (
            <div className={'weekBox'}>
                {weekdays}
            </div>
        );
    }
}

WeekCal.PropTypes = {
    change: PropTypes.string.isRequired,
};
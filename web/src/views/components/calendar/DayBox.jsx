/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {DayEle} from '../calendar/DayEle';

export class DayBox extends React.Component {
    constructor(props){
        super(props);
    }

    getDateFull(i){
        let temp = new Date();
        temp.setDate(temp.getDate() + i);
        return temp.toISOString().slice(0, 10);
    }

    getDayDate(i){
        let temp = new Date().getDate();
        return temp + i;
    }

    getDayName(i){
        const days = [ 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        let dayOfWeek = new Date().getDay();
        if (i + dayOfWeek >= 7)
            return days[i+dayOfWeek-7];
        else {
            return days[i+dayOfWeek];
        }
    }

    render(){
        let preset = ['TODAY', 'TOMORROW', 2, 3, 4, 5, 6];
        let weekdays = [];
        for(let i = 0; i < 7; i ++){
            let dayname = [];
            if(i < 2){
                dayname.push(preset[i]);
            } else {
                dayname.push(this.getDayName(preset[i]))
            }
            console.log(i);
            weekdays.push(<DayEle change={this.props.change}
                                  key={this.getDateFull(i)}
                                  dateFull={this.getDateFull(i)}
                                  dateName={ dayname }
                                  dayDate={this.getDayDate(i)} />)
        }

        return (
            <div className={'weekBox'}>
                { weekdays }
            </div>
        );
    }
}

DayBox.PropTypes = {
    change: PropTypes.string.isRequired,
};
/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import DayEle from '../calendar/DayEle';

export default class DayBox extends React.Component {

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
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        let dayOfWeek = new Date().getDay();
        if (i + dayOfWeek >= 7)
            return days[i+dayOfWeek-7+1];
        else {
            return days[i+dayOfWeek+1];
        }
    }

    render(){
        return (
            <div className={'weekBox'}>
                <DayEle change={this.props.change}
                        key={this.getDateFull(0)}
                        dateFull={this.getDateFull(0)}
                        dateName={'TODAY'}
                        dayDate={this.getDayDate(0)} />
                <DayEle change={this.props.change}
                        key={this.getDateFull(1)}
                        dateFull={this.getDateFull(1)}
                        dateName={'TOMORROW'}
                        dayDate={this.getDayDate(1)} />
                <DayEle change={this.props.change}
                        key={this.getDateFull(2)}
                        dateFull={this.getDateFull(2)}
                        dateName={this.getDayName(0)}
                        dayDate={this.getDayDate(2)} />
                <DayEle change={this.props.change}
                        key={this.getDateFull(3)}
                        dateFull={this.getDateFull(3)}
                        dateName={this.getDayName(1)}
                        dayDate={this.getDayDate(3)} />
                <DayEle change={this.props.change}
                        key={this.getDateFull(4)}
                        dateFull={this.getDateFull(4)}
                        dateName={this.getDayName(2)}
                        dayDate={this.getDayDate(4)} />
                <DayEle change={this.props.change}
                        key={this.getDateFull(5)}
                        dateFull={this.getDateFull(5)}
                        dateName={this.getDayName(3)}
                        dayDate={this.getDayDate(5)} />
                <DayEle change={this.props.change}
                        key={this.getDateFull(6)}
                        dateFull={this.getDateFull(6)}
                        dateName={this.getDayName(4)}
                        dayDate={this.getDayDate(6)} />

            </div>
        );
    }
}

DayBox.PropTypes = {
    dayName: PropTypes.string.isRequired,
    fullDate: PropTypes.string.isRequired,
};

DayBox.defaultProps = {
    dayName: 'Today',
};

//change={this.props.change}
//{this.createDays(this.props.change.bind(null, this))}
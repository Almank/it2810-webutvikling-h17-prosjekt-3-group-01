/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class DayBox extends React.Component {

    createDays() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
                dayName = 'Today';
            }
            if (i === 1){
                dayName = 'Tomorrow';
            }

            dayList.push([dayName,dayDate]);

            dayDate++;
            dayOfWeek++;
            console.log(dayList);
            if (dayOfWeek === 8){
                dayOfWeek = 1;
            }
        }
        let dayElements = dayList.map(function(dayName){
            return <div key={dayName}>
                    <div>{dayName[0]}</div>
                    <h1>{dayName[1]}</h1>
            </div>
        });

        return <div>{dayElements}</div>
    }

    render(



    ){
        return (
            <div>
                <h2>{this.createDays()}</h2>
            </div>
        );
    }
}

DayBox.PropTypes = {
    dayName: PropTypes.string.isRequired,
};

DayBox.defaultProps = {
    dayName: 'Today',
};
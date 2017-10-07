/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import DayBox from './components/calendar/DayBox';
import '../assets/styles/calendar.css';

export class Calendar extends React.Component {

    render(){
        return (
            <div className={'calendarContent'}>
                <h1 className={'title'}>Your schedule for the coming week</h1>

                <DayBox />

                <div className={'calendarBox'}>

                </div>
            </div>
        );
    }
}
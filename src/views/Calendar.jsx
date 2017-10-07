/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import DayBox from './components/calendar/DayBox';
import '../assets/styles/calendar.css';

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {empty: true};
    }

    emptyScheduleCheck(){
        switch (this.state.empty){
            default:
                break;
            case true:
                return (
                    <div className='calendarBoxContent'>
                        <h1>You don't have any plans!</h1>
                    </div>
                );
            case false:
                return (
                    <div className='calendarBoxContent'>
                        <div className='leftCalendarBoxContent'>
                            <h2>Time</h2>
                        </div>

                        <div className='rightCalendarBoxContent'>
                            <h1>Content</h1>
                            <h2>Tinderdate at Kaffebrenneriet.</h2>
                        </div>
                    </div>
                );
        }
    }

    render(){
        return (
            <div className={'calendarContent'}>
                <h1 className={'title'}>Your schedule for the coming week</h1>

                <DayBox />

                <div className={'calendarBox'}>
                    {this.emptyScheduleCheck()}
                </div>


            </div>
        );
    }
}
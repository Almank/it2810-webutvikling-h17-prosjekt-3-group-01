/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import DayBox from './components/calendar/DayBox';
import '../assets/styles/calendar.css';

export class Calendar extends React.Component {

    render(

    ){
        return ( <div>
                <h1>This is your schedule!</h1>

                <DayBox className={'weekBox'}>

                </DayBox>

                <div className={'calendarBox'}>

                </div>
            </div>

        );


    }

}
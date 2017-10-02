/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import DayBox from './components/calendar/DayBox';

export class Calendar extends React.Component {

    render(

    ){
        return ( <div>
                <h1>This is your schedule!</h1>

                <DayBox />

                <div>button</div>

                <div className={'calendarBox'}>

                </div>
            </div>

        );


    }

}
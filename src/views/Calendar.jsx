/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import DayBox from './components/calendar/DayBox';
import '../assets/styles/calendar.css';
import PropTypes from 'prop-types';

export class Calendar extends React.Component {
    constructor(props) {

        //Setting state if there is none stored.
        if(localStorage.getItem("emptyCalendar") === null){
            let data = {empty: true,
                        dateToday: new Date().toISOString().slice(0, 10),
                children: [{date:'ok',time: "12:02", title: "Hey", text: "This is text"},{date:'ok',time: "12:02", title: "Hey", text: "This is text"}],
            };
            localStorage.setItem("emptyCalendar", JSON.stringify(data));
        }
        super(props);

        //Fetching state from storage.
        let data = localStorage.getItem("emptyCalendar");
        data = JSON.parse(data);

        //Setting dateToday to current date.
        data.dateToday = new Date().toISOString().slice(0, 10);

        //Setting state to stored state.
        this.state = data;

        //Binding functions
        this.createAppointment = this.createAppointment.bind(this);
        this.changeContent = this.changeContent.bind(this);
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
                        <div>
                        {this.state.children.filter(child => child.date === this.state.dateToday).map((item,i) =>
                            <div className='calendarBoxContent' key={i}>{item.date}

                                <div className='leftCalendarBoxContent'>
                                    <h2>{item.time}</h2>
                                </div>

                                <div className='rightCalendarBoxContent'>
                                    <h1>{item.title}</h1>
                                    <h2>{item.text}</h2>
                                </div>
                            </div>
                        )}
                    </div>
                );
        }
    }

    createAppointment(e) {
        //Preventing reload of window.
        e.preventDefault();

        //Fetching values from form.
        let dateValue = document.getElementsByClassName('dateInput')[0].value;
        let timeValue = document.getElementsByClassName('timeInput')[0].value;
        let titleValue = document.getElementsByClassName('titleInput')[0].value;
        let textValue = document.getElementsByClassName('textInput')[0].value;

        //Creating new array with current state children.
        let newStateArray = this.state.children.slice();

        //Pushing new child to array.
        newStateArray.push({date: dateValue, time: timeValue, title: titleValue, text: textValue});

        //Creating new updated state.
        let data = {empty: false,
            children: newStateArray,
            dateToday: new Date().toISOString().slice(0, 10),
        };

        //Setting state.
        this.setState(data);

        //Updating localstorage to store new data.
        localStorage.setItem("emptyCalendar", JSON.stringify(data));
    }

    changeContent(e){
        let data = localStorage.getItem("emptyCalendar");
        data = JSON.parse(data);

        //Setting dateToday to current date.
        data.dateToday = e.props.dateFull;

        //Setting state to stored state.
        this.state = data;

        //Updating localstorage to store new data.
        localStorage.setItem("emptyCalendar", JSON.stringify(data));

        //Forcing update of the DOM to change content.
        this.forceUpdate();
    }

    render(){
        return (
            <div className={'calendarContent'}>
                <h1 className={'title'} >Your schedule for the coming week</h1>
                <DayBox change={this.changeContent} />

                <div className={'calendarBox'}>
                    <form>
                        <input type='date' name='date' className="dateInput" required/>
                        <input type='time' className="timeInput" required/>
                        <input type='text' className="titleInput" required/>
                        <input type='textfield' className="textInput"/>
                        <input type='submit' onClick={this.createAppointment}/>
                    </form>
                    {this.emptyScheduleCheck()}
                </div>
            </div>
        );
    }
}

Calendar.PropTypes = {
    dateValue: PropTypes.string.isRequired,
    timeValue: PropTypes.string.isRequired,
    titleValue: PropTypes.string.isRequired,
    textValue: PropTypes.string.isRequired,
};

Calendar.defaultProps = {
    dateValue: <h1>Hey</h1>,
}
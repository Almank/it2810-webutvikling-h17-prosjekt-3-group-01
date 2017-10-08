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
            let data = {
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

        //Making a let with a copy of the state children array.
        let myData =[].concat(this.state.children)

            //Sorting elements based on time, earliest first.
            .sort((a, b) => a.time > b.time)

            //Filtering out appointments on current day.
            .filter(child => child.date === this.state.dateToday)

            //Mapping items from array giving the html the correct values.
            .map((item,i) =>
            <div className='calendarBoxContent' key={i}>
                <div className='leftCalendarBoxContent'>
                    <h3>{item.time}</h3>
                </div>

                <div className='middleCalendarBoxContent'>
                    <h3>{item.title}</h3>
                </div>
                <div className='rightCalendarBoxContent'>
                    <p>{item.text}</p>
                </div>
            </div>
            );

        //If there are no plans that day write this.
        if (myData.length === 0){
            myData = [  <div key={0} className='calendarBoxContent'>
                            <h1>You don't have any plans!</h1>
                        </div>];
            }

        return (
            <div className='appointmentFlow'>
                {myData}
            </div>
        );
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
        let data = {
            children: newStateArray,
            dateToday: new Date().toISOString().slice(0, 10),
        };

        //Setting state.
        this.setState(data);

        //Updating localstorage to store new data.
        localStorage.setItem("emptyCalendar", JSON.stringify(data));

        //Resetting form values.
        document.getElementsByClassName('dateInput')[0].value = null;
        document.getElementsByClassName('timeInput')[0].value = null;
        document.getElementsByClassName('titleInput')[0].value = null;
        document.getElementsByClassName('textInput')[0].value = null;

        //Hiding form.
        this.showForm();
    }

    changeContent(e){
        //Fetching data from localstorage
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

    showForm(){
        //Toggle form.
        let element = document.querySelector('.formContainer');
        element.style.display = element.style.display === 'none' ? 'flex' : 'none';
        let today = new Date().toISOString().slice(0, 10);
        document.querySelector(".dateInput").value = today;
    }

    render(){
        return (
            <div className={'calendarContent'}>
                <h1 className={'title'} >Your schedule for the coming week</h1>
                <DayBox change={this.changeContent} />

                <div className={'calendarBox'}>
                    <div className='calendarBoxContent'>
                        <div className='leftCalendarBoxContent'>
                            <h2>When</h2>
                        </div>

                        <div className='middleCalendarBoxContent'>
                            <h2>What</h2>
                        </div>
                        <div className='rightCalendarBoxContent'>
                            <h2>Why</h2>
                        </div>
                        <button className='icon-topright' onClick={this.showForm}>
                            <span className='glyphicon glyphicon-plus'></span>
                        </button>
                    </div>
                    <div className='formContainer' style={{
                        //Need to style inline to remove having to double click button first time.
                        display: 'none'
                    }}>
                        <button className='absolute-icon-top-right' onClick={this.showForm}>
                            <span className='glyphicon glyphicon-remove'></span>
                        </button>
                        <form className={'form'}>
                            <h3>Create new appointment</h3>
                            <span>Date</span>
                            <input type='date' name='date' className="dateInput" required/>
                            <span>Time</span>
                            <input type='time' className="timeInput" required/>
                            <span>Title</span>
                            <input type="text" name="title" className="titleInput" maxLength='19' required />
                            <span>What</span>
                            <textarea type='text' className="textInput" maxLength='200'  />
                            <input type='submit' className='submitButton' onClick={this.createAppointment}/>
                        </form>
                    </div>
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
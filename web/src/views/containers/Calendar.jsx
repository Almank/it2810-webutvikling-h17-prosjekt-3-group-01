/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import {WeekCal} from '../components/calendar/WeekCal';
import {AppointmentForm} from '../components/calendar/AppointmentForm';
import {ContentHeader} from '../components/calendar/ContentHeader';
import '../../assets/styles/calendar.css';

export class Calendar extends React.Component {
    constructor(props) {

        //Setting state if there is none stored.
        if(localStorage.getItem("emptyCalendar") === null){
            let data = {
                dateToday: new Date().toISOString().slice(0, 10),
                children: [],
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
        //Copy of the state children array.
        let myData =[].concat(this.state.children)

            //Filtering out appointments on current day.
            .filter(child => child.date === this.state.dateToday)

            //Sorting elements based on time, earliest first.
            .sort((a, b) => parseInt(("" + a.time.slice(0,2)) + a.time.slice(3,6)) -
                            parseInt(("" + b.time.slice(0,2)) + b.time.slice(3,6)))

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
        //If there are no plans that day.
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

        //Validate fields date, time and title. Last field is optional.
        if (this.validateFormDate(dateValue) && this.validateFormTime(timeValue) && this.validateFormTitle(titleValue)){

            //Creating new array with current state children.
            let newStateArray = this.state.children.slice();

            //Pushing new child to array.
            newStateArray.push({date: dateValue, time: timeValue, title: titleValue, text: textValue});

            //Sorting array with earliest appointments first.
            newStateArray.sort((a, b) =>    parseInt(("" + a.time.slice(0,2)) + a.time.slice(3,6)) -
                                            parseInt(("" + b.time.slice(0,2)) + b.time.slice(3,6)));

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
        } else {
            alert('Invalid values. Please try again.')
        }
    }

    validateFormDate(date){
        return date.length === 10 && date >= new Date().toISOString().slice(0, 10);
    }

    validateFormTime(time){
        return time.length === 5;
    }

    validateFormTitle(title){
        return title.length > 0;
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
        let fields = document.querySelectorAll(".inputField");
        for (let i = 0; i < fields.length; i++)
            fields[i].style.border = '1px solid lightgray';

    }

    render(){
        return (
            <div className={'calendarContent'}>
                <h1 className={'title'} >Your schedule for the coming week</h1>
                <WeekCal change={this.changeContent} />

                <div className={'calendarBox'}>
                    <ContentHeader closeForm={this.showForm}/>
                    <AppointmentForm closeForm={this.showForm} submitForm={this.createAppointment}/>
                    {this.emptyScheduleCheck()}
                </div>
            </div>
        );
    }
}
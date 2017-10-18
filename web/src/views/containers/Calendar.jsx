/**
 * Created by almank on 02.10.2017.
 */
import React from 'react';
import {WeekCal, AppointmentForm, ContentHeader} from '../Components';
import '../../assets/styles/Calendar.css';

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        //Setting state if there is none stored.
        if(localStorage.getItem("emptyCalendar") === null){
            let data = {
                dateToday: this.getTime(),
                children: [],
            };
            localStorage.setItem("emptyCalendar", JSON.stringify(data));
        }


        //Fetching state from storage.
        let data = localStorage.getItem("emptyCalendar");
        data = JSON.parse(data);

        //Setting time, with Norwegian timezone.
        data.dateToday = this.getTime();

        //Setting state to stored state.
        this.state = data;

        //Binding functions
        this.createAppointment = this.createAppointment.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleChangeClick = this.handleChangeClick.bind(this);
        this.showForm = this.showForm.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    handleRemoveClick(event){
        for (let i=0; i<this.state.children.length; i++) {
            if (String(this.state.children[i].uniqueDate) === String(event.target.value)){
                //Deleting values in child
                delete this.state.children[i];

                //Removing empty objects
                let newArr = this.state.children.filter(val => Object.keys(val).length !== 0);

                //Updating state and localstorage on with callback function.
                this.setState({children: newArr}, function() {
                    localStorage.setItem("emptyCalendar", JSON.stringify(this.state));
                });
            }
        }
    }

    handleChangeClick(type, event){
        for (let i=0; i<this.state.children.length; i++) {
            if (String(this.state.children[i].uniqueDate) === String(event.target.name)) {
                let data = this.state.children;
                if (type === 'title')
                    data[i].title = event.target.value;
                else if (type === 'time')
                    data[i].time = event.target.value;
                else if (type === 'text')
                    data[i].text = event.target.value;
                this.setState({children: data}, function(){
                    localStorage.setItem("emptyCalendar", JSON.stringify(this.state));
                });
            }
        }
    }

    emptyScheduleCheck(){
        //Copy of the state children array.
        let myData =[].concat(this.state.children)

            //Filtering out appointments on current day.
            .filter(child => child.date === this.state.dateToday)

            //Sorting elements based on time, earliest first.
            .sort((a, b) => parseInt((("" + a.time.slice(0,2)) + a.time.slice(3,6)), 0) -
                            parseInt(("" + b.time.slice(0,2)) + b.time.slice(3,6), 0))

            //Mapping items from array giving the html the correct values.
            .map((item,i) =>
            <div className='calendarBoxContent' key={i}>
                <div className='leftCalendarBoxContent'>
                    <h2 type='time'
                        name={item.uniqueDate}
                        className='changeField'>{item.time}</h2>
                </div>

                <div className='middleCalendarBoxContent'>
                    <input onChange={this.handleChangeClick.bind(this, 'title')}
                           type='text'
                           value={this.state.children.filter(a => a.uniqueDate === item.uniqueDate)[0].title}
                           name={item.uniqueDate}
                           maxLength={10}
                           className='changeField'/>
                </div>
                <div className='rightCalendarBoxContent'>
                    <textarea onChange={this.handleChangeClick.bind(this, 'text')}
                           type='text'
                           value={this.state.children.filter(a => a.uniqueDate === item.uniqueDate)[0].text}
                           name={item.uniqueDate}
                           maxLength={200}
                           className='changeField'/>
                </div>
                <button onClick={this.handleRemoveClick}
                        className='RemoveButton'
                        type='button'
                        value={item.uniqueDate}>
                    <span className='glyphicon glyphicon-minus' />
                </button>
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

    getTime(){
        return new Date(Date.now() - new Date().getTimezoneOffset() *60000).toISOString().slice(0, 10)
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
            newStateArray.push({date: dateValue, time: timeValue, title: titleValue, text: textValue, uniqueDate: new Date()});

            //Sorting array with earliest appointments first.
            newStateArray.sort((a, b) =>    parseInt(("" + a.time.slice(0,2)) + a.time.slice(3,6), 0) -
                                            parseInt(("" + b.time.slice(0,2)) + b.time.slice(3,6), 0));

            //Creating new updated state.
            let data = {
                children: newStateArray,
                dateToday: this.getTime(),
            };

            //Setting state.
            this.setState(data, function(){
                //Updating localstorage to store new data.
                localStorage.setItem("emptyCalendar", JSON.stringify(data));
            });

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
        let lastDate = new Date();
        lastDate.setDate(lastDate.getDate() + 7);
        return date.length === 10 && date >= new Date().toISOString().slice(0, 10) && date < lastDate.toISOString().slice(0, 10);
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
        data.dateToday = e.props.dateFull;
        //Setting state to stored state.
        this.setState({dateToday: e.props.dateFull}, () => {
            //Updating localstorage to store new data.
            localStorage.setItem("emptyCalendar", JSON.stringify(data));
        });
    }

    showForm(){
        //Toggle form.
        let element = document.querySelector('.formContainer');
        element.style.display = element.style.display === 'none' ? 'flex' : 'none';
        document.querySelector(".dateInput").value = this.state.dateToday;
        let fields = document.querySelectorAll(".inputField");
        for (let i = 0; i < fields.length; i++)
            fields[i].style.border = '1px solid lightgray';
        document.querySelector(".dateInput").style.border = '2px solid green';
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
import React from 'react';
import { View, StyleSheet, AsyncStorage, Text, Image } from 'react-native';
import {Week} from '../components/Calendar/Week';
import {ContentHeader} from "../components/Calendar/ContentHeader";
import {AppointmentForm} from "../components/Calendar/AppointmentForm";

export class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateToday: new Date().toISOString().slice(0, 10),
            dateVal: '',
            timeVal: '',
            titleVal: '',
            textVal: '',
            children: [
                {date: '2017-10-15', time: '14:15', title: 'Hello World', text: 'This is text'},
            ],
        };

        //Binding functions
        this.createAppointment = this.createAppointment.bind(this);
        this.changeContent = this.changeContent.bind(this);

        this.loadData();
    }

    emptyScheduleCheck(){

        //Copy of the state children array.
        let myData =[].concat(this.state.children)

        //Sorting elements based on time, earliest first.
            .sort((a, b) => a.time > b.time)

            //Filtering out appointments on current day.
            .filter(child => child.date === this.state.dateToday)

            //Mapping items from array giving the html the correct values.
            .map((item,i) =>
                <View className='calendarBoxContent' key={i}>
                    <View className='leftCalendarBoxContent'>
                        <Text>{item.time}</Text>
                    </View>

                    <View className='middleCalendarBoxContent'>
                        <Text>{item.title}</Text>
                    </View>
                    <View className='rightCalendarBoxContent'>
                        <Text>{item.text}</Text>
                    </View>
                </View>
            );

        //If there are no plans that day.
        if (myData.length === 0){
            myData = [  <View key={0} className='calendarBoxContent'>
                <Text>You don't have any plans!</Text>
            </View>];
        }

        return (
            <View className='appointmentFlow'>
                {myData}
            </View>
        );
    }

    changeContent(e){
        let data = this.state;
        data.dateToday = e.props.dateFull;
        this.setState({ dateToday: e.props.dateFull }, () => {
            this.forceUpdate();
        });
        try{
            AsyncStorage.setItem("calendar", JSON.stringify(data));
        } catch (error){
            console.log(error);
        }
    }

    async loadData(){
        let data;
        try {
            data = await AsyncStorage.getItem('calendar');
            if (data !== null){
                data = JSON.parse(data);
                data.dateToday = new Date().toISOString().slice(0, 10);
                this.setState(data);
            } else{
                this.setState({
                    dateToday: new Date().toISOString().slice(0, 10),
                    children: [],
                    dateValue: 'eee',
                    timeValue: '',
                    titleValue: '',
                    textValue: '',
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    createAppointment(e) {
        //Fetching values from form.
        let dateValue = e[0];
        let timeValue = e[1];
        let titleValue = e[2];
        let textValue = e[3];

        //Validate fields date, time and title. Last field is optional.
        if (this.validateFormDate(dateValue) && this.validateFormTime(timeValue) && this.validateFormTitle(titleValue)){

            //Creating new array with current state children.
            let newStateArray = this.state.children.slice();

            //Pushing new child to array.
            newStateArray.push({date: dateValue, time: timeValue, title: titleValue, text: textValue});

            //Sorting array with earliest appointments first.
            newStateArray.sort((a, b) => a.time > b.time);

            //Creating new updated state.
            let data = {
                children: newStateArray,
                dateToday: new Date().toISOString().slice(0, 10),
            };

            //Setting state.
            this.setState(data);

            //Updating localstorage to store new data.
            //localStorage.setItem("emptyCalendar", JSON.stringify(data));

            //Resetting form values.
            //document.getElementsByClassName('dateInput')[0].value = null;
            //document.getElementsByClassName('timeInput')[0].value = null;
            //document.getElementsByClassName('titleInput')[0].value = null;
            //document.getElementsByClassName('textInput')[0].value = null;
            console.log(this.state);
            //Hiding form.
            //this.showForm();
        } else {
            alert('Invalid values. Please fill the fields.')
        }
    }

    validateFormDate(date){
        return (date.length === 10)
    }

    validateFormTime(time){
        return (time.length === 5)
    }

    validateFormTitle(title){
        return (title.length > 0)
    }

    render(){
            return(
                    <View style={styles.container}>
                            <Week change={this.changeContent} />
                            <View style={styles.bottomContainer}>
                                <AppointmentForm getValues={ arr => this.createAppointment(arr) } />
                                {this.emptyScheduleCheck()}
                            </View>
                    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
    },


});




import React from 'react';
import { View, StyleSheet, AsyncStorage, Text, ScrollView } from 'react-native';
import {Week} from '../components/Calendar/Week';
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
                <View style={styles.showAppointments} key={i}>
                    <Text style={styles.appointmentItem}>{item.time}</Text>
                    <Text style={styles.appointmentItem}>{item.title}</Text>
                    <Text style={styles.appointmentItem}>{item.text}</Text>
                </View>
            );

        //If there are no plans that day.
        if (myData.length === 0){
            myData = [  <View style={styles.showAppointments} key={0}>
                <Text style={styles.appointmentNoItems}>You don't have any plans!</Text>
            </View>];
        }

        return (
            <ScrollView style={styles.scrollView}>
                {myData}
            </ScrollView>
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
                    dateValue: '',
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

            //Setting updated values to storage.
            try{
                AsyncStorage.setItem("calendar", JSON.stringify(data));
            } catch (error){
                console.log(error);
            }

        } else {
            //If there are invalid values.
            alert('Error! Do not submit invalid values.')
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
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        marginBottom: 20,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    showAppointments: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    appointmentItem: {
        flexBasis:'33%',
        textAlign:'center',
        fontSize:16,
        flexWrap: 'wrap',
    },
    appointmentNoItems: {
        marginTop: '10%',
        flexBasis:'90%',
        textAlign:'center',
        fontSize:20,
    },
    scrollView: {
        height: '100%',
    }


});




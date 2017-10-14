import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Day} from './Day';

export class Week extends React.Component {

    getDayName(i) {
        const dayNames = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        const firstTwoDays = ['TODAY', 'TOMORROW'];
        let weekDay = new Date().getDay();
        if (i < 2)
            return firstTwoDays[i];
        if (i+weekDay > 7)
            return dayNames[i+weekDay-7-1]; //Minus 7 days, and minus 1 since it starts at 0.
        return dayNames[i+weekDay-1];
    }

    getDate(i){
        return new Date().getDate() + i;
    }

    getFullDate(i){
        let date = new Date();
        date.setDate(date.getDate() + i)
        return date.toISOString().slice(0,10);
    }

    render(){

        let weekdays = [];
        for (let i=0; i<7; i++){
            weekdays.push(<Day  key={this.getFullDate(i)}
                                dateFull={this.getFullDate(i)}
                                dayName={this.getDayName(i)}
                                dayDate={this.getDate(i)} />);
        }
        return(
            <View style={styles.container}>
                {weekdays}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'red',
        flex: 1,
    }
});

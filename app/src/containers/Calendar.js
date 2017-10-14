import React from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import {Week} from '../components/Calendar/Week';

export class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            language: new Date().toISOString().slice(5, 10),
        };
    }

    render(){
            return(
            <View style={styles.container}>
                <Week />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flex: 1,
    }
});

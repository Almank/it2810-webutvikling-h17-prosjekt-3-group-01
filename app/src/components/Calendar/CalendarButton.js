import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export class CalendarButton extends React.Component {

    backgroundC(){
        //If no color is sent in props.
        if (this.props.backgroundC === undefined)
            return {
            backgroundColor: '#FF9505',
        };
        return {
            backgroundColor: this.props.backgroundC,
        };
    }

    render(){
        return (
            <TouchableOpacity
                style={[styles.addAppButton, this.backgroundC(), styles.shadow]}
                onPress={this.props.onpress}>
                <Text style={styles.textButton}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    addAppButton: {
        marginTop: 20,
        marginLeft:'15%',
        marginRight:'15%',
        flexBasis: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9505',
        borderWidth: 1,
        borderColor: 'rgba(155,155,155,0.5)',
    },
    backgroundColorRed: {
        backgroundColor: 'red',
    },
    textButton: {
        fontSize:16,
        color: 'white',
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
});

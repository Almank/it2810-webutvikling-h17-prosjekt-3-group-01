import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export class Day extends React.Component {
    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.change.bind(null, this)}>
                <Text style={styles.textName}>{this.props.dayName}</Text>
                <Text style={styles.textDate}>{this.props.dayDate}</Text>
            </TouchableOpacity>
        );
    }
}

Day.PropTypes = {
    change: React.PropTypes.func.isRequired,
    dayName: React.PropTypes.string.isRequired,
    dayDate: React.PropTypes.string.isRequired,
    dateFull: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '24%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'rgba(155,155,155,0.5)',
        margin:1,
        height:100,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    textName: {
        fontSize: 11,
    },
    textDate: {
        fontSize:18,
    }
});

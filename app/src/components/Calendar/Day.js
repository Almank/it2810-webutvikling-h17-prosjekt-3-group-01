import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export class Day extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.dayName}</Text>
                <Text>{this.props.dayDate}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '25%',
        backgroundColor: 'yellow',
        height:100,
    }
});

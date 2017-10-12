import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NoteList } from '../components/NoteList/NoteList';

export class Notes extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Notebook/>
            </View>
        )
    }
}

const Notebook = StackNavigator({
    Main: {screen: NoteList}
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -65
    }
});
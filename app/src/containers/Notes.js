import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NoteList } from '../components/NoteList/NoteList';
import {NoteContent} from "../components/NoteList/NoteContent";

export class Notes extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Notebook navigation={this.navigation}/>
            </View>
        )
    }
}

const Notebook = StackNavigator({
    Main: {screen: NoteList},
    Content: {screen: NoteContent}
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -65
    }
});
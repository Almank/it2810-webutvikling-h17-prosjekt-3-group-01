/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export class NoteContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            textfield: this.props.navigation.state.params.content,
        };

        this.handleChange = this.handleChange.bind(this);
        this.returnToLastView = this.returnToLastView.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    returnToLastView(){
        this.props.navigation.goBack();
    }

    handleChange(text){
        let data = this.state;
        let noteProp = this.props.navigation.state.params;
        data.textfield = text;
        this.setState(data);
        noteProp.onContentChange(noteProp.title, this.state.textfield);
    }

    handleDelete(){
        this.props.navigation.state.params.onPress();
        this.returnToLastView();
    }

    render(){
        let textValue;
        if(!this.state.textfield){
            textValue = '';
        } else {
            textValue = this.state.textfield;
        }

        return(
            <View>
                <View style={styles.header}>
                    <Button buttonStyle={styles.headerButton}
                            title="< Back"
                            fontSize={14}
                            onPress={this.returnToLastView}/>
                </View>
                <View style={styles.noteContainer}>
                    <View style={styles.hr}/>
                    <Text style={styles.headerTitle}>{this.props.navigation.state.params.title}</Text>
                    <View style={styles.hr}/>
                    <TextInput style={styles.noteField}
                               onChangeText={(text) => this.handleChange(text)}
                               value={textValue}
                               multiline={true}
                               numberOfLines={4}
                    />
                    <Button title="Delete Note"
                            fontSize={14}
                            onPress={this.handleDelete}
                            buttonStyle={styles.DeleteButton}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    headerButton: {
        marginTop: 25,
        marginBottom: 10,
        marginLeft: -10,
        backgroundColor: '#35393a',
    },
    headerTitle: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    hr: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    noteContainer: {
        display: 'flex',
    },
    noteField: {
        backgroundColor: 'white',
        height: 260,
        textAlignVertical: 'top',
    },
    DeleteButton: {
        marginTop: 10,
        backgroundColor: '#FF9505',
    }
});
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, FormLabel } from 'react-native-elements';
import { NoteLink } from "./NoteLink";

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: {
                'default': {
                    title: 'default',
                    content: 'no content'
                }
            },
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //Function for adding new note and updating storage to contain this.
    onSubmit(){
        let data = this.state;
        if(this.state.textfield) {
            data.notes[this.state.textfield] = {
                title: this.state.textfield,
                content: 'Write your content here'
            };
            data.textfield = "";
            this.setState(data);
        }
    }

    //Function for handling the removeclick and has to force update due to the state of its parent.
    handleRemoveClick(title){
        let data = this.state;
        delete data.notes[title];
        this.setState(data);
    }

    handleChange(text){
        let data = this.state;
        data.textfield = text;
        this.setState(data);
    }

    //Function for rendering all the listed notes. Uses forloop because of dictionaries.
    renderListedNotes(){
        let dataSet = [];
        const data = this.state.notes;
        let index = 0;
        for(let key in data){
            dataSet.push(<NoteLink title={ data[key].title }
                                   key={index}
                                   index={index}
                                   onClick={this.handleRemoveClick}
            />);
            index++;
        }
        return dataSet;
    }


    render(){
        return(
            <View style={styles.NoteList}>
                <View style={styles.InputFields}>
                    <FormLabel labelStyle={{fontSize: 20}}>Title</FormLabel>
                    <TextInput style={styles.TitleInput}
                               onChangeText={(text) => this.handleChange(text)}
                               value={this.state.text}
                    />
                    <Button raised
                            backgroundColor="green"
                            underlayColor="lightgreen"
                            color="white"
                            title="Create New Note"
                            style={styles.AddInput}
                            fontSize={20}
                            fontWeight="bold"
                            onPress={this.onSubmit}/>
                </View>
                <View className="CurrentNotes">
                    { this.renderListedNotes() }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    NoteList: {
        display: 'flex',
        backgroundColor: '#696969',
        flex: 1,
    },
    InputFields: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'lightgrey'
    },
    TitleInput: {
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
    },
    AddInput: {
        marginTop: 10,
        marginBottom: 10,
    },
});
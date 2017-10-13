import React from 'react';
import { View, StyleSheet, TextInput, FlatList, Keyboard } from 'react-native';
import { Button, FormLabel } from 'react-native-elements';
import { NoteLink } from "./NoteLink";

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: {
                'default': {
                    title: 'default0',
                    content: 'no content'
                },
                'default1': {
                    title: 'default1',
                    content: 'no content'
                },
                'default2': {
                    title: 'default2',
                    content: 'no content'
                },
                'default3': {
                    title: 'default3',
                    content: 'no content'
                },
                'default4': {
                    title: 'default4',
                    content: 'no content'
                },
                'default5': {
                    title: 'default5',
                    content: 'no content'
                },
                'default6': {
                    title: 'default6',
                    content: 'no content'
                },
                'default7': {
                    title: 'default7',
                    content: 'no content'
                },
                'default8': {
                    title: 'default8',
                    content: 'no content'
                },
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
            Keyboard.dismiss();
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

    //Function for rendering all the listed notes.
    renderNote(item, index){
        return(<NoteLink title={item.title}
                         index={index}
                         key={index}
                         navigation={this.props.navigation}
                         onClick={this.handleRemoveClick}
        />);
    }

    //Processes data from state to be used in FlatList
    renderData(){
        let unprocessedData = this.state.notes;
        let data = [];
        for(let key in unprocessedData){
            data.push(unprocessedData[key])
        }
        return data;
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
                <FlatList
                    key={"flatList"}
                    data={this.renderData()}
                    renderItem={({item, index}) => this.renderNote(item, index)}
                    keyExtractor={(key, index) => index}
                />
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
        backgroundColor: 'lightgrey',
        borderBottomWidth: 2,
        borderColor: 'grey',
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
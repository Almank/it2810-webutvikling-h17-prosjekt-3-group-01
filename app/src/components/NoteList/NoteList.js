import React from 'react';
import { View, StyleSheet, TextInput, FlatList, Keyboard, AsyncStorage} from 'react-native';
import { Button, FormLabel } from 'react-native-elements';
import { NoteLink } from "./NoteLink";

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: {}
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNoteContentChange = this.handleNoteContentChange.bind(this);
        this.loadData();
    }

    //Inital async load of data that has to be done outside the constructor
    async loadData(){
        let notes;
        try {
            notes = await AsyncStorage.getItem('notes');
            if (notes !== null){
                notes = JSON.parse(notes);
                this.setState({notes: notes['notes']});
            }
        } catch (error) {
            console.log(error);
        }
    }

    updateAsyncStorage(){
        let data = this.state;
        try{
            AsyncStorage.setItem("notes", JSON.stringify(data));
        } catch (error){
            console.log(error);
        }
    }

    //Function for adding new note and updating storage to contain this.
    onSubmit(){
        let data = this.state;
        if(this.state.textfield) {
            data.notes[this.state.textfield] = {
                title: this.state.textfield,
                content: 'Empty note'
            };
            data.textfield = "";
            this.setState(data);
            Keyboard.dismiss();
            this.updateAsyncStorage();
        }
    }

    //Function for handling the removeclick and has to force update due to the state of its parent.
    handleRemoveClick(title){
        let data = this.state;
        delete data.notes[title];
        this.setState(data);
        this.updateAsyncStorage();
    }

    handleChange(text){
        let data = this.state;
        data.textfield = text;
        this.setState(data);
        this.updateAsyncStorage();
    }

    //function for handling changes in content and save to state
    handleNoteContentChange(title, content){
        let data = this.state.notes;
        data[title].content = content;
        this.setState(data);
        this.updateAsyncStorage();
    }

    //Function for rendering all the listed notes.
    renderNote(item, index){
        return(<NoteLink title={item.title}
                         content={item.content}
                         index={index}
                         key={index}
                         navigation={this.props.navigation}
                         onClick={this.handleRemoveClick}
                         onContentChange={this.handleNoteContentChange}
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
                    <TextInput style={styles.TitleInput}
                               onChangeText={(text) => this.handleChange(text)}
                               value={this.state.text}
                               placeholder="Enter title here..."
                    />
                    <Button raised
                            backgroundColor="#FF9505"
                            underlayColor="#FF9505"
                            color="white"
                            title="ADD NOTE"
                            borderColor="rgba(155,155,155,0.5)"
                            style={styles.AddInput}
                            fontSize={16}
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
        backgroundColor: 'white',
        flex: 1,
    },
    InputFields: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 2,
        borderColor: '#f2f2f2',
        height: '30%',
        paddingTop: 20,
    },
    TitleInput: {
        marginLeft: 15,
        marginRight: 15,
        height: '28%',
        borderBottomWidth: 0.99,
        borderColor: 'grey',
        borderRadius: 2,
        borderWidth: 0.95,
        backgroundColor: 'white',
    },
    AddInput: {
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        width: '50%',
        marginLeft:'25%',
        marginRight:'25%',
        flexBasis: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
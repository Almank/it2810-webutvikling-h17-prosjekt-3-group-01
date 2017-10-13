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
            textfield: "",
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
        data.textfield = text;
        this.setState(data);
    }

    handleDelete(){
        this.props.navigation.state.params.onPress();
        this.returnToLastView();
    }

    render(){
        return(
            <View>
                <View style={styles.header}>
                    <Button buttonStyle={styles.headerButton}
                            title="< Back"
                            fontWeight={"bold"}
                            onPress={this.returnToLastView}/>
                </View>
                <View style={styles.noteContainer}>
                    <View style={styles.hr}/>
                    <Text style={styles.headerTitle}>{this.props.navigation.state.params.title}</Text>
                    <View style={styles.hr}/>
                    <TextInput style={styles.noteField}
                               onChangeText={(text) => this.handleChange(text)}
                               value={this.state.text}
                               multiline={true}
                               numberOfLines={4}
                    />
                    <Button title="Delete Note"
                            fontWeight={'bold'}
                            fontSize={15}
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
        backgroundColor: 'white',
    },
    headerButton: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: -10,
        backgroundColor: '#35393a',
    },
    headerTitle: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
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
        height: 300,
    },
    DeleteButton: {
        marginTop: 10,
        backgroundColor: '#8f0500',
    }
});
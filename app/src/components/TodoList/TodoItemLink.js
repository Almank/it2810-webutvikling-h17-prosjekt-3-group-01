import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export class TodoItemLink extends React.Component {
    constructor(props){
        super(props);
        this.navigateToContent = this.navigateToContent.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onChildContentChange = this.onChildContentChange.bind(this);
    }

    navigateToContent(){
        this.props.navigation.navigate('Content', {
            title: this.props.title,
            content: this.props.content,
            navigation: this.props.navigation,
            onPress: this.onDelete,
            handleTaskChange: this.onChildContentChange,
        });
    }

    onChildContentChange(title, content){
        this.props.handleTaskChange(title, content);
    }

    onDelete(title, category){
        this.props.onClick(title, category);
    }

    render(){
        return(
            <TouchableHighlight onPress={this.navigateToContent}>
                <View style={styles.NoteLink}>
                    <Text style={styles.Title}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.Title}>
                        >
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

}

const styles = StyleSheet.create({
    NoteLink: {
        display: 'flex',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderTopColor: 'grey',
        borderRadius: 1,
        borderWidth: 0.25,
    },
    Title: {
        fontSize: 16,
    },
});
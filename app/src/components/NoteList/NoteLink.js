import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export class NoteLink extends React.Component {
    constructor(props){
        super(props);
        this.navigateToContent = this.navigateToContent.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    navigateToContent(){
        this.props.navigation.navigate('Content', {
            title: this.props.title,
            content: this.props.content,
            navigation: this.props.navigation,
            onPress: this.onDelete
        });
    }

    onDelete(){
        this.props.onClick(this.props.title);
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
        marginTop: 2,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

export class NoteLink extends React.Component {
    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);
        this.navigateToContent = this.navigateToContent.bind(this);
    }

    //onPress functions has to be binded in react native, but doesnt in regular react.
    onPress(){
        this.props.onClick(this.props.title);
    }

    navigateToContent(){
        this.props.navigation.navigate('Content', {title: this.props.title, navigation: this.props.navigation});
    }

    render(){
        return(
            <TouchableHighlight onPress={this.navigateToContent}>
                <View style={styles.NoteLink}>
                    <Text style={styles.Title}>
                          {this.props.title}
                    </Text>
                    <Button buttonStyle={{width: 40, height: 40, backgroundColor: '#a41e1e'}}
                            underlayColor='#ef1c1c'
                            raised
                            onPress={this.onPress}
                            fontWeight="bold"
                            fontSize={20}
                            title="X"/>
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
        paddingBottom: 10,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});
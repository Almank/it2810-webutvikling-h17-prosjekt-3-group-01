/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import { Text, View, Button } from 'react-native';

export class NoteContent extends React.Component {
    constructor(props){
        super(props);

        this.returnToLastView = this.returnToLastView.bind(this);
    }

    static navigationOptions = {
        title: 'Home',
    };

    returnToLastView(){
        this.props.navigation.goBack()
    }

    render(){
        console.log(this.props);
        return(
            <View>
                <Button title="Go Back" onPress={this.returnToLastView}/>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
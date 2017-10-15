/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export class AppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dateValue: '',
            timeValue: '',
            titleValue: '',
            textValue: '',
        };

        this.submitInput = this.submitInput.bind(this);
    }

    handleDateInput = (e) => {
        this.setState({dateValue: e.value});
    };

    handleTimeInput = (e) => {
        this.setState({timeValue: e.value});
    };

    handleTitleInput = (e) => {
        this.setState({titleValue: e.value});
    };

    handleTextInput = (e) => {
        this.setState({textValue: e.value});
    };

    submitInput() {
        console.log('heey');
        console.log(this.state.timeValue);
        console.log(this.state.dateValue);
        console.log(this.state.titleValue);
        console.log(this.state.textValue);
        if (this.state.dateValue !== null && this.state.timeValue !== null && this.state.titleValue !== null){
            this.props.getValues([this.state.dateValue, this.state.timeValue, this.state.titleValue, this.state.textValue]);
            console.log('APPF: ' + this.props.getValues);
        } else {
            this.setState({
                dateValue: null,
                timeValue: null,
                titleValue: null,
                textValue: null,
            })
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity className='absolute-icon-top-right' onPress={this.props.closeForm} title='Press me'>
                    <Text className='glyphicon glyphicon-remove'/>
                </TouchableOpacity>
                <View className={'form'}>
                    <Text>Create new appointment</Text>
                    <Text htmlFor="date">Date</Text>
                    <TextInput onChangeText={(dateValue) => this.setState({dateValue})} value={this.state.dateValue}/>
                    <Text htmlFor="time">Time</Text>
                    <TextInput onChangeText={(timeValue) => this.setState({timeValue})} value={this.state.timeValue}/>
                    <Text htmlFor="title">Title</Text>
                    <TextInput onChangeText={(titleValue) => this.setState({titleValue})} value={this.state.titleValue}/>
                    <Text htmlFor="what">What</Text>
                    <TextInput onChangeText={(textValue) => this.setState({textValue})} value={this.state.textValue}/>
                    <TouchableOpacity onPress={this.submitInput} title='Submit'>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
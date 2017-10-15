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
        }
    }

    handleDateInput = () => {
        let value = this.dateInput.value;
        this.props.getDateValueFromForm(value);
    }

    render(){
        return (
            <View className='formContainer' style={{
                //Need to style inline to remove having to double click button first time.
                display: 'none'
            }}>
                <TouchableOpacity className='absolute-icon-top-right' onClick={this.props.closeForm} title='Press me'>
                    <Text className='glyphicon glyphicon-remove'/>
                </TouchableOpacity>
                <View className={'form'}>
                    <Text>Create new appointment</Text>
                    <Text htmlFor="date">Date</Text>
                    <TextInput type='date' name='date' id='date' className="dateInput" onChange={this.handleDateInput} />
                    <Text htmlFor="time">Time</Text>
                    <TextInput type='time' id='time' className="timeInput" required />
                    <Text htmlFor="title">Title</Text>
                    <TextInput type="text" id='title' name="title" className="titleInput" />
                    <Text htmlFor="what">What</Text>
                    <TextInput type='text' id='what' className="textInput"  />
                    <TouchableOpacity type='submit' className='submitButton' onClick={this.props.submitForm} title='Submit'/>
                </View>
            </View>
        );
    }
}
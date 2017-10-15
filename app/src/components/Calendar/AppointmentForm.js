/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';
import {ContentHeader} from "./ContentHeader";
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';

export class AppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dateValue: '',
            timeValue: '',
            titleValue: '',
            textValue: '',
            modalVisible: false,
        };

        this.submitInput = this.submitInput.bind(this);
    }

    submitInput() {
        console.log('works');
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

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.setModalVisible(true)}} title='Press me'>
                    <Text>Add appointment</Text>
                </TouchableOpacity>
                <ContentHeader />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                    <View className={'form'}>
                        <View>
                            <Text>Create new appointment</Text>
                            <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                        <Text htmlFor="date">Date</Text>
                        <TextInput onChangeText={(dateValue) => this.setState({dateValue})} value={this.state.dateValue}/>
                        <Text htmlFor="time">Time</Text>
                        <TextInput onChangeText={(timeValue) => this.setState({timeValue})} value={this.state.timeValue}/>
                        <Text htmlFor="title">Title</Text>
                        <TextInput onChangeText={(titleValue) => this.setState({titleValue})} value={this.state.titleValue}/>
                        <Text htmlFor="what">What</Text>
                        <TextInput onChangeText={(textValue) => this.setState({textValue})} value={this.state.textValue}/>
                        <TouchableOpacity onPress={() => {
                            this.submitInput();
                            this.setModalVisible(!this.state.modalVisible)
                            }}
                            title='Submit'>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}
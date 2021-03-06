/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';
import {ContentHeader} from "./ContentHeader";
import {CalendarButton} from "./CalendarButton";
import PropTypes from 'prop-types';
import { View, Text, TextInput, Modal, StyleSheet } from 'react-native';

export class AppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            dateValue: new Date().toISOString().slice(0, 10),
        };
        this.submitInput = this.submitInput.bind(this);
    }

    //Send data to calendar on submit
    submitInput() {
        if (this.state.dateValue !== null && this.state.timeValue !== null && this.state.titleValue !== null){
            this.props.getValues([this.state.dateValue, this.state.timeValue, this.state.titleValue, this.state.textValue]);
        }
        this.setState({
            dateValue: new Date().toISOString().slice(0, 10),
            timeValue: null,
            titleValue: null,
            textValue: null,
        });
    }

    //Hide/show form.
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(){
        return (
            <View>
                <CalendarButton onpress={() => {
                    this.setModalVisible(true)
                    }}
                    text='ADD APPOINTMENT'
                />
                <ContentHeader />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Form has been closed.")}}>
                    <View style={styles.formContainer}>
                        <View>
                            <Text style={styles.title}>Create new appointment</Text>
                        </View>
                        <Text htmlFor="date" style={styles.text}>Date - YYYY-MM-DD</Text>
                        <TextInput onChangeText={(dateValue) => this.setState({dateValue})}
                                   value={this.state.dateValue}
                                   placeholder={'YYYY-MM-DD'}
                                   style={[styles.inputField, styles.shadow]}/>
                        <Text htmlFor="time" style={styles.text}>Time - HH:MM</Text>
                        <TextInput onChangeText={(timeValue) => this.setState({timeValue})}
                                   value={this.state.timeValue}
                                   placeholder={'HH:MM'}
                                   style={[styles.inputField, styles.shadow]}/>
                        <Text htmlFor="title" style={styles.text}>Title</Text>
                        <TextInput onChangeText={(titleValue) => this.setState({titleValue})}
                                   value={this.state.titleValue}
                                   style={[styles.inputField, styles.shadow]}/>
                        <Text htmlFor="what" style={styles.text}>What</Text>
                        <TextInput onChangeText={(textValue) => this.setState({textValue})}
                                   value={this.state.textValue}
                                   style={[styles.inputField, styles.shadow]}/>
                        <CalendarButton
                            onpress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                                //To avoid getting stuck by having alert behind modal.
                                setTimeout(() => {
                                    this.submitInput();
                                }, 100);
                            }}
                            text={'Submit'}/>
                        <CalendarButton
                            onpress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}
                            text={'Cancel'}/>
                    </View>
                </Modal>
            </View>
        );
    }
}

AppointmentForm.PropTypes = {
    getValues: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height:'85%',
    },
    inputField: {
        padding: 5,
        marginLeft: '15%',
        marginRight: '15%',
        flexBasis: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(155,155,155,0.5)',
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    text: {
        marginLeft: '15%',
        marginRight: '15%',
        marginBottom: 3,
        marginTop: 10,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    }
});

/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';
import {ContentHeader} from "./ContentHeader";
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

export class AppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.submitInput = this.submitInput.bind(this);
    }

    //Send data to calendar on submit
    submitInput() {
        if (this.state.dateValue !== null && this.state.timeValue !== null && this.state.titleValue !== null){
            this.props.getValues([this.state.dateValue, this.state.timeValue, this.state.titleValue, this.state.textValue]);
        } else {
            this.setState({
                dateValue: new Date().toISOString().slice(0, 10),
                timeValue: null,
                titleValue: null,
                textValue: null,
            })
        }
    }

    //Hide/show form.
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(){
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true)
                        }}
                        title='Press me'
                        style={[styles.addAppButton, styles.shadow]}>
                    <Text style={styles.textButton}>ADD APPOINTMENT</Text>
                </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            //To avoid getting stuck by having alert behind modal.
                            setTimeout(() => {
                                this.submitInput();
                            }, 100);

                            }}
                            title='Submit'
                            style={[styles.addAppButton, styles.shadow]}>
                            <Text style={styles.textButton}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}
                                          style={[styles.addAppButton, styles.shadow]}>
                            <Text style={styles.textButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addAppButton: {
        marginTop: 20,
        marginLeft:'15%',
        marginRight:'15%',
        flexBasis: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9505',
        borderWidth: 1,
        borderColor: 'rgba(155,155,155,0.5)',
    },
    textButton: {
        fontSize:16,
        color:'white',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height:'100%',
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
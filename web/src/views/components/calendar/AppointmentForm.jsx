/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';

export class AppointmentForm extends React.Component {

    //Visual validation
    validDateField(e){
        let lastDate = new Date();
        lastDate.setDate(lastDate.getDate() + 7);
        if (e.target.value >= new Date().toISOString().slice(0, 10) &&
            e.target.value < lastDate.toISOString().slice(0, 10)){
            e.target.style.border = '2px solid green';
        } else {
            e.target.style.border = '2px solid red';
        }
    }

    validTimeField(e){
        if (e.target.value.length === 5){
            e.target.style.border = '2px solid green';
        } else {
            e.target.style.border = '2px solid red';
        }
    }

    validTitleField(e){
        if (e.target.value.length > 0){
            e.target.style.border = '2px solid green';
        } else {
            e.target.style.border = '2px solid red';
        }
    }

    validTextField(e){
        if (e.target.value.length >= 0){
            e.target.style.border = '2px solid green';
        } else {
            e.target.style.border = '2px solid red';
        }
    }

    render(){
        return (
            <div className='formContainer' style={{
                //Need to style inline to remove having to double click button first time.
                display: 'none'
            }}>
                <button className='absolute-icon-top-right' onClick={this.props.closeForm}>
                    <span className='glyphicon glyphicon-remove'/>
                </button>
                <form className={'form'}>
                    <h3>Create new appointment</h3>
                    <label htmlFor="date">Date - Must be present or future date</label>
                    <input type='date' name='date' id='date' className="dateInput inputField" required onChange={this.validDateField}/>
                    <label htmlFor="time">Time</label>
                    <input type='time' id='time' className="timeInput inputField" required onChange={this.validTimeField}/>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name="title" className="titleInput inputField" maxLength='19' onChange={this.validTitleField} />
                    <label htmlFor="what">What</label>
                    <textarea type='text' id='what' className="textInput inputField" maxLength='200' onChange={this.validTextField}/>
                    <input type='submit' className='submitButton' onClick={this.props.submitForm} />
                </form>
            </div>
        );
    }
}
/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';

export class AppointmentForm extends React.Component {

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
                    <label htmlFor="date">Date</label>
                    <input type='date' name='date' id='date' className="dateInput" required />
                    <label htmlFor="time">Time</label>
                    <input type='time' id='time' className="timeInput" required />
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name="title" className="titleInput" maxLength='19' />
                    <label htmlFor="what">What</label>
                    <textarea type='text' id='what' className="textInput" maxLength='200'  />
                    <input type='submit' className='submitButton' onClick={this.props.submitForm}/>
                </form>
            </div>
        );
    }
}
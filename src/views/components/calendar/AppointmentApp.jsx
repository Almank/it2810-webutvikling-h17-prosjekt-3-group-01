/**
 * Created by Lohne on 05.10.2017.
 */
import React from 'react';



export default class AppointmentApp extends React.Component {

    appointmentWindow() {
        console.log('hey');
    }
    constructor(initial) {
        super(initial);
        this.state = {
            value: ''
        }

    this.handleChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleNameChange(event) {
    this.setState({value: event.target.value});
}

handleSubmit(event) {
    alert('Value: ' + this.state.value);
    event.preventDefault();
}



render(){
        return (
           <div>



               <form onSubmit={this.handleSubmit}>
                   <label>
                       Appointment name:
                       <input type="text" value={this.state.value} onChange={this.handleNameChange} />
                   </label>
                   <input type="submit" value="Submit" />
               </form>
               <button id={"functionButton"} onClick = {() => {this.appointmentWindow()} } >FFS</button>

           </div>

        );
    }

}



/**
 * Created by Lohne on 05.10.2017.
 */
import React from 'react';



export default class AppointmentApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemArray: []
        }
    }

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);


    /*handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    } */

    render(){

        return (
            <div>
                <h1>hey {this.props.date}</h1>
            </div>
        )

    }
}



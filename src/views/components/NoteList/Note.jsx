import React from 'react';

export class Note extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div key={this.props.index}>{this.props.title}</div>
        );
    }

}
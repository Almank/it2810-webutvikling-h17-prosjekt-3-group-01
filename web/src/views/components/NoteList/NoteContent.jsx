/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';

export class NoteContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.data.title,
            content: this.props.data.content
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({content: event.target.value});
        this.props.onChange(this.state.title, event.target.value);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            title: nextProps.data.title,
            content: nextProps.data.content
        });
    }

    render(){
        //Handles empty boxes, so that previous states not are stuck.
        let textValue;
        if(!this.state.content){
            textValue = '';
        } else {
            textValue = this.state.content;
        }

        return(
            <div className="NoteContentContainer">
                <h1>{ this.state.title }</h1>
                <textarea value={ textValue } onChange={this.handleChange} />
            </div>
        );
    }
}
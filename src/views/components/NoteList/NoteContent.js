import React from 'react';

export class NoteContent extends React.Component {
    constructor(props){
        console.log("Constructor runs");
        super(props);

        let id = this.props.id.match.params.name;
        this.state = {
            content: this.props.data[id].content,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({content: event.target.value});
    }

    render(){
        let id = this.props.id.match.params.name;
        return(
            <div>
                <h1>{this.props.data[id].title}</h1>
                <textarea value={ this.state.content } onChange={this.handleChange} />
                <input onClick={this.props.onClick} type="submit" value="Save"/>
            </div>
        );
    }
}
/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../../../assets/styles/Notes.css';
import {NoteLink} from "./NoteLink";

//The class NoteList is the parent of all notes in the list of nodes.
export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    //Function for adding new note and updating storage to contain this.
    onSubmit(event){
        if(event.target.title.value !== "") {
            const data = this.state.notes;
            data[event.target.title.value] = {
                title: event.target.title.value,
            };
            this.setState({notes: data});
            this.props.updateStorage();
        }
        event.preventDefault();
    }

    //Function for handling the removeclick and has to force update due to the state of its parent.
    handleRemoveClick(event){
        let title = event.target.value;
        this.props.removeClick(title);
        this.forceUpdate();
    }

    //Function for rendering all the listed notes. Uses forloop because of dictionaries.
    renderListedNotes(){
        let dataSet = [];
        const data = this.state.notes;
        let index = 0;
        for(let key in data){
            dataSet.push(<NoteLink title={ data[key].title }
                                   content={data[key].content}
                                   key={index}
                                   onClick={this.handleRemoveClick}
            />);
            index++;
        }
        return dataSet;
    }

    render(){
        return (
            <div className="NoteList">
                <div className="NoteListTitleContainer">
                    <h1>Add new</h1>
                </div>
                <form className="NoteForm" onSubmit={this.onSubmit}>
                    <input className="NoteField" name="title" type="text"/>
                    <input className="NoteAdd" type="submit" value="ADD"/>
                </form>
                <div className="CurrentNotes">
                    { this.renderListedNotes() }
                </div>
            </div>
        );
    }
}

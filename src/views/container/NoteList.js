/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../../assets/styles/Notes.css';
import {Note} from "../components/NoteList/Note";

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        const list = this.state.notes;
        list.push(event.target.title.value);
        this.setState({notes: list});
        event.preventDefault();

        console.log(this.state.notes);
    }

    renderListedNotes(){
        return this.state.notes.map((note, index) =>
            <Note key={index} title={note}/>
        );
    }

    render(){
        return (
            <div className="NoteList">
                <form onSubmit={this.onSubmit}>
                    <input name="title" type="text"/>
                    <input type="submit" value="Add"/>
                </form>
                <div className="CurrentNotes">
                    { this.renderListedNotes() }
                </div>
            </div>
        );
    }
}

/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../../assets/styles/Notes.css';
import {NoteLink} from "../components/NoteList/NoteLink";

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    onSubmit(event){
        const data = this.state.notes;
        data[event.target.title.value] = {
            title: event.target.title.value,
        };
        this.setState({notes: data});
        this.props.updateStorage();
        this.createNewNote();
        event.preventDefault();
    }

    handleRemoveClick(event){
        let title = event.target.value;
        this.props.removeClick(title);
        this.forceUpdate();
    }

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

    createNewNote() {
        let element = document.querySelector('.NoteForm');
        element.style.display = element.style.display === 'flex' ? '' : 'flex';
    }

    render(){
        return (
            <div className="NoteList">
                <div className="NoteListTitleContainer">
                    <h1>Notes</h1>
                    <div className="addNewNoteButton" onClick={this.createNewNote}>
                        <span className={'glyphicon glyphicon-plus'}></span>
                    </div>
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

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
            notes: this.props.notes,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        const data = this.state.notes;
        data[event.target.title.value] = {
            title: event.target.title.value,
        };
        this.setState({notes: data});
        event.preventDefault();
    }

    renderListedNotes(){
        let dataSet = [];
        const data = this.state.notes;
        let index = 0;
        for(let key in data){
            dataSet.push(<Note title={ data[key].title } subject={ data[key].subject } key={index}/>);
            index++;
        }
        console.log(dataSet);
        return dataSet;
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

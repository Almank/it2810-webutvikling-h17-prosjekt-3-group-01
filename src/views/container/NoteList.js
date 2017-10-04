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

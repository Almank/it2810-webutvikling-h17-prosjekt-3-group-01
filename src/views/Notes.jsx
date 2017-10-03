/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Notes.css';
import {NoteList} from "./container/NoteList";

export class Notes extends React.Component {
    render(){
        return (
            <div className="NoteBook">
                <NoteList/>
                <div className="NoteEdit"></div>
            </div>
        );
    }
}
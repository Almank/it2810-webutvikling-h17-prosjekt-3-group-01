/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Notes.css';
import {NoteList} from "./container/NoteList";
import {Route} from 'react-router-dom';
import {NoteContent} from "./components/NoteList/NoteContent";
import {BrowserRouter} from 'react-router-dom';


export class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: { 'tittel': {
                        title: "tittel",
                        subject: "subjekt",
                        content: "This is some kind of content"
                    },
                    'note': {
                        title: "note",
                        subject: "subjekt",
                        content: "You need to write something"
                    },
            },
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onNavigation = this.onNavigation(this);
    }

    onSubmit(id, content){
        console.log(id);
        console.log(content);
        // Lagre content til local storage
    }

    render(){
        return (
            <div className="NoteBook">
                <NoteList notes={this.state.notes}/>
                <div className="NoteEdit">
                    <div className="content">
                        <Route path="/notebook/:name" render={ (id) =>
                            <NoteContent data={this.state.notes}
                                         id={id}
                                         onClick={() => this.onSubmit(id.match.params.name, this.state.content)} />}/>
                    </div>
                </div>
            </div>
        );
    }
}
/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Notes.css';
import {NoteList} from "./container/NoteList";
import {Route} from 'react-router-dom';
import {NoteContent} from "./container/NoteContent";


export class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: { 'tittel': {
                        title: "tittel",
                        content: "This is some kind of content"
                    },
                    'note': {
                        title: "note",
                        content: "stahp"
                    },
            },
        };
    }

    onChange(title, content){
        this.state.notes[title].title = title;
        this.state.notes[title].content = content;
    }

    render(){
        return (
            <div className="NoteBook">
                <NoteList notes={this.state.notes}/>
                <div className="NoteEdit">
                    <div className="content">
                        <Route exact path="/notebook/:name" render={ (id) =>
                            <NoteContent data={this.state.notes[id.match.params.name]}
                                         key={id}
                                         id={id}
                                         onChange={this.onChange.bind(this)}
                            />}/>
                    </div>
                </div>
            </div>
        );
    }
}
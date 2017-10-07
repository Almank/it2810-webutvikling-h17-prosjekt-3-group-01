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
        //Initiate local storage if no data is stored.
        if(localStorage.getItem("notes") === null){
            let data = {
                notes: {
                    'default': {
                        title: 'default',
                        content: 'no content'
                    }
                },
                update: false
            };
            localStorage.setItem("notes", JSON.stringify(data));
        }

        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes);
        super(props);
        this.state = {
            notes: notes['notes'],
        };
        this.removeClick = this.removeClick.bind(this);
    };

    updateLocalStorage(){
        let data = this.state;
        localStorage.setItem("notes", JSON.stringify(data));
    }

    onChange(title, content){
        this.state.notes[title].title = title;
        this.state.notes[title].content = content;
        this.updateLocalStorage();
    }

    removeClick(title){
        delete this.state.notes[title];
        this.updateLocalStorage();
        this.setState({update: true});
        window.location.pathname = "/notebook";
    }

    render(){
        return (
            <div className="NoteBook">
                <NoteList notes={this.state.notes}
                          removeClick={(value) => this.removeClick(value)}
                          updateStorage={() => this.updateLocalStorage()}
                />
                <div className="NoteEdit">
                    <div className="NoteEditContent">
                        <Route exact path="/notebook/:name" render={ (id) =>
                            <NoteContent data={this.state.notes[id.match.params.name]}
                                         key={id}
                                         id={id}
                                         onChange={this.onChange.bind(this)}
                                         update={this.state.update}
                            />}/>
                    </div>
                </div>
            </div>
        );
    }
}
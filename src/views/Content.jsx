/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Content.css';
import {Route} from 'react-router-dom';
import {TodoList} from "./TodoList";
import {Calendar} from "./Calendar";

export class Content extends React.Component {
    render(){
        return (
            <div className="content">
                <Route path="/1" render={ () => <TodoList/>}/>
                <Route path="/2" render={ () => <h1>Notes</h1>}/>
                <Route path="/calendar" render={ () => <Calendar/>}/>
            </div>
        );
    }
}
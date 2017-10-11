/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Content.css';
import {Route} from 'react-router-dom';

import { Notes } from "./containers/Notes";
import {Calendar} from "./containers/Calendar";
import {ToDoApp} from "./containers/TodoApp";


export class Content extends React.Component {
    render(){
        return (
            <div className="content">
                <Route exact path="/" render={ () => <Calendar/>}/>
                <Route path="/todolist" render={ () => <ToDoApp/>}/>
                <Route path="/notebook" render={ () => <Notes/>}/>
            </div>
        );
    }
}
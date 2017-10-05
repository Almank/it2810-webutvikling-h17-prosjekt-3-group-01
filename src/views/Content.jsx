/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Content.css';
import {Route} from 'react-router-dom';
import {TodoList} from "./TodoList";

import { Notes } from "./Notes";
import {Calendar} from "./Calendar";

export class Content extends React.Component {
    render(){
        return (
            <div className="content">
                <Route path="/1" render={ () => <TodoList/>}/>
                <Route path="/notebook" render={ () => <Notes/>}/>
                <Route path="/calendar" render={ () => <Calendar/>}/>
            </div>
        );
    }
}
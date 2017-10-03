/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Content.css';
import {Route} from 'react-router-dom';
import {TodoList} from "./TodoList";
import { Notes } from "./Notes";

export class Content extends React.Component {
    render(){
        return (
            <div className="content">
                <Route path="/1" render={ () => <TodoList/>}/>
                <Route path="/notebook" render={ () => <Notes/>}/>
                <Route path="/3" render={ () => <h1>WebApp3</h1>}/>
            </div>
        );
    }
}
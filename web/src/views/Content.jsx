/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Content.css';
import {Route} from 'react-router-dom';
import {TodoLists} from "./TodoLists";

import { Notes } from "./Notes";
import {Calendar} from "./Calendar";


export class Content extends React.Component {
    render(){
        return (
            <div className="content">
                <Route exact path="/" render={ () => <Calendar/>}/>
                <Route path="/todolists" render={ () => <TodoLists/>}/>
                <Route path="/notebook" render={ () => <Notes/>}/>
            </div>
        );
    }
}
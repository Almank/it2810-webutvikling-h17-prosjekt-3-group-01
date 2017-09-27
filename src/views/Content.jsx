/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/Content.css';
import {Route} from 'react-router-dom';

export class Content extends React.Component {
    render(){
        return (
            <div className="content">
                <Route path="/1" render={ () => <h1>WebApp1</h1>}/>
                <Route path="/2" render={ () => <h1>WebApp2</h1>}/>
                <Route path="/3" render={ () => <h1>WebApp3</h1>}/>
            </div>
        );
    }
}
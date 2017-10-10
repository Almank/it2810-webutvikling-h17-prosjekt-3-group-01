import React from 'react';
import '../assets/styles/App.css';
import {SideBar} from "./SideBar";
import {Content} from "./Content";


export class App extends React.Component {
    render(){
        return (
            <div className="App">
                <SideBar/>
                <Content/>
            </div>
        );
    }
};

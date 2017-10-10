/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/SideBar.css';
import {Button} from "./components/SideBar/Button";


export class SideBar extends React.Component {
    render(){
        return (
            <div className="sideBar">
                <Button link="/" icon="glyphicon-home"/>
                <Button link="/1" icon="glyphicon-list-alt"/>
                <Button link="/notebook" icon="glyphicon-pencil"/>
            </div>
        );
    }
}

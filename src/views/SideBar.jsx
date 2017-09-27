/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import '../assets/styles/SideBar.css';
import {Button} from "./components/SideBar/Button";

export class SideBar extends React.Component {
    render(){
        return (
            <div className="SideBar">
                <Button link="/1"/>
                <Button link="/2"/>
                <Button link="/3"/>
            </div>
        );
    }
}
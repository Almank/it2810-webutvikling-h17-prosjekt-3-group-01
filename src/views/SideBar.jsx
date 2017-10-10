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
                <Button link="/todolists"/>
                <Button link="/notebook"/>
                <Button link="/calendar"/>
            </div>
        );
    }
}

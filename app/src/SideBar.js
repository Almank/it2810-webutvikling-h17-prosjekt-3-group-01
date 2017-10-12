/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import {Button} from "./components/SideBar/Button";


export class SideBar extends React.Component {
    render(){
        return (
            <div className="sideBar">
                <Button link="/"/>
                <Button link="/todolist"/>
                <Button link="/notebook"/>
            </div>
        );
    }
}

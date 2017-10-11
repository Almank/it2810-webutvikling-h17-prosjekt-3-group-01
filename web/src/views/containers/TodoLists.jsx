/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import ToDoApp from "../components/TodoList/TodoApp";


export class TodoLists extends React.Component {
    render(){
        return ( 
            <div id="todolist">
                <ToDoApp/>
            </div>

        );


    }
}
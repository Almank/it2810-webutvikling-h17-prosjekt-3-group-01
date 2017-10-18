import React from 'react';
import {TodoList} from "../components/TodoList/TodoList";
import {StackNavigator} from 'react-navigation';
import {TodoItems} from "../components/TodoList/TodoItems";

export class Todo extends React.Component {
    render(){
        return(
            <TodoApp navigation={this.navigation} />
        )
    }
}

const TodoApp = StackNavigator({
    Main: {screen: TodoList},
    Content: {screen: TodoItems}
});
import React from 'react';
import {ToDoListItem} from './TodoListItem';

export class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.renderItems = this.renderItems.bind(this);
	}

	renderItems(items, object){
		let resultList = [];
		items.map(function (item, i) {
            resultList.push(
                <ToDoListItem key={i} value={i} onClick={() => object.props.onDelete(i)}>{item}</ToDoListItem>
            )
        });
		return resultList;
	}

	render(){
		let allitems = this.props.items;
		let status = this.props.filter[0].Status;

		//Filter function for filtering out queries.
		switch (status){
			case 'false':
				allitems = allitems.filter(t => !t.isDone);
				break;
			case 'true':
				allitems = allitems.filter(t => t.isDone);
				break;
		}

		//Search function, for filtering through search query
        let query = this.props.filter[0].keyword;
        if(query){
            let queryResult = [];
        	allitems.forEach(function (item) {
                if(item.item.toLowerCase().indexOf(query) !== -1){
                    queryResult.push(item);
                }
            });
        	//If query exists, return searched elements instead of all.
            return(
				<ul>{ this.renderItems(queryResult, this) }</ul>
            )
		}

		return(
			<ul>{ this.renderItems(allitems, this) }</ul>
		)
	}
}

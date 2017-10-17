import React from 'react';
import '../../assets/styles/Todolists.css';
import {TodoForm, TodoList, TodoFilter, TodoCatelog, TodoCatelogForm} from '../Components';

/* [TODO APP] */
export class ToDoApp extends React.Component{
	constructor(props){
		super(props);

		if(localStorage.getItem("todo") === null){
			let data = {Todo: [],
								selectedItem: "0"};
			localStorage.setItem("todo", JSON.stringify(data));
		}
		let data = {Todo: [{name:"Primary",
			items:[]},],
			filter: [{keyword:'',Status:"SHOW_ALL"}],
			selectedItem: "0"};
		localStorage.setItem("todo", JSON.stringify(data));
		let todo = localStorage.getItem("todo");
		todo = JSON.parse(todo);
		this.state = todo;

		this.updateItems = this.updateItems.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.filterItem = this.filterItem.bind(this);
		this.AddCatalog = this.AddCatalog.bind(this);
		this.searchItem = this.searchItem.bind(this);
		this.filterItem = this.filterItem.bind(this);
		this.setSelectedCatalog = this.setSelectedCatalog.bind(this);
	}

	updateItems(newItem){
		let item = {item:newItem,isDone:false};
		let newtodo = this.state;
		let allItems = this.state.Todo[this.state.selectedItem].items.concat([item]);
		newtodo.Todo[this.state.selectedItem].items = allItems;
		this.setState(newtodo);
		localStorage.setItem("todo", JSON.stringify(this.state));
	}

	deleteItem(index){
		let newtodo = this.state.Todo;
		let allItems = this.state.Todo[this.state.selectedItem].items.slice(); //copy array
		allItems.splice(index, 1); //remove element
		newtodo[this.state.selectedItem].items = allItems;
		this.setState(newtodo);
		localStorage.setItem("todo", JSON.stringify(this.state));
	}

	filterItem(e){
		let filter = this.state.filter;
		filter[0].Status = e.target.id;
		this.setState({
			filter: filter,
		});
	}

	searchItem(e){
		let filter = this.state.filter;
		filter[0].keyword = e.target.value;
		this.setState({
			filter: filter,
		});
	}

	AddCatalog(newCatalog){
		let Catalog = {name:newCatalog,items:[{item:'Todo item #1',isDone:false}]};
		let newtodo = this.state.Todo.concat([Catalog]);
		this.setState({Todo: newtodo});
		localStorage.setItem("todo", JSON.stringify(this.state));
	}

	setSelectedCatalog(index){
		this.setState({
			selectedItem: index,
		});
	}

	render(){
		return (
			<div className="todo-wrapper">
				<h1 className={'title'} >To-do list</h1>
				<div className="bigrow">
					<div className="col1">
						<h3>To-do lists:</h3>
						<TodoCatelogForm onFormSubmit = {this.AddCatalog} />
						<TodoCatelog selectedID={this.state.selectedItem} onClick={this.setSelectedCatalog} Todos = {this.state.Todo} />
					</div>
					<div className="col2">
						<h3>What do you want to-do?</h3>
						<TodoFilter onFilter = {this.filterItem} onSearch = {this.searchItem} filter={this.state.filter}/>
						<TodoForm onFormSubmit = {this.updateItems} />
						<TodoList  items = {this.state.Todo[this.state.selectedItem].items} filter = {this.state.filter} onDelete={this.deleteItem}/>
					</div>
				</div>
			</div>
		);
	}

}
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ToDoBanner from './TodoBanner';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import ToDoListItem from './TodoListItem';
import ToDoFilter from './TodoFilter';
import ToDoCatelog from './TodoCatelog';
import ToDoCatelogForm from './TodoCatelogForm';

/* [TODO APP] */ 
var ToDoApp = React.createClass({
		getInitialState : function(){
			if(localStorage.getItem("todo")=== null){
                let data = {Todo:[{name:"Primary",items:[{item:'Todo item #1',isDone:false},{item:'Todo item #2',isDone:true},{item:'aaaa',isDone:true},{item:'dddd',isDone:true}
			]},{name:"Secondary",items:[{item:'Todo item #1',isDone:false},{item:'Todo item #2',isDone:true},{item:'Todo item #3',isDone:true}
			]}],filter:[{keyword:'',Status:"SHOW_ALL"}],selectedItem:"0"};
                localStorage.setItem("todo", JSON.stringify(data));
            }
            let todo = localStorage.getItem("todo");
            todo = JSON.parse(todo);
            console.log(todo);
            return this.state = {
                Todo: todo['Todo']
            }
            
		},
		updateItems: function(newItem){	
			var item = {item:newItem,isDone:false};
			var newtodo = this.state.Todo;
			var allItems = this.state.Todo[this.state.selectedItem].items.concat([item]);
			newtodo[this.state.selectedItem].items = allItems;
			this.setState({
				Todo: newtodo
			});
            localStorage.setItem("todo", JSON.stringify(this.state.Todo));
		},
		deleteItem : function(index){
			var newtodo = this.state.Todo;
			var allItems = this.state.Todo[this.state.selectedItem].items.slice(); //copy array
			allItems.splice(index, 1); //remove element
			newtodo[this.state.selectedItem].items = allItems;
			this.setState({
				Todo: newtodo
			});
		},
		filterItem : function(e){
			
			this.state.filter[0].Status = e.target.value;
			this.setState({
				filter: this.state.filter
			});
		},
		searchItem : function(e){
	
			this.state.filter[0].keyword = e.target.value;
			this.setState({
				filter: this.state.filter
			});
		},
		AddCatalog: function(newCatalog){
			var Catalog = {name:newCatalog,items:[{item:'Todo item #1',isDone:false}]};
			var newtodo = this.state.Todo.concat([Catalog]);
			this.setState({
				Todo: newtodo
			});
		},
		setSelectedCatalog: function(index){
			this.state.selectedItem = index;
			this.setState({
				selectedItem: index
			});
		},
		render: function(){
			return (
				<div className="row">
					<div className="col-xs-3">
                        <ToDoCatelogForm onFormSubmit = {this.AddCatalog} />
                        <ToDoCatelog selectedID = {this.state.selectedItem} onSelected={this.setSelectedCatalog} Todos = {this.state.Todo} />
					</div>
					<div className="col-xs-6">
						<ToDoBanner/>
						<ToDoFilter onFilter = {this.filterItem} onSearch = {this.searchItem} filter={this.state.filter}/>
						<ToDoForm onFormSubmit = {this.updateItems} />
						<ToDoList  items = {this.state.Todo[this.state.selectedItem].items} filter = {this.state.filter} onDelete={this.deleteItem}/>
					</div>
				</div>
			);
		}
	});

export default ToDoApp;
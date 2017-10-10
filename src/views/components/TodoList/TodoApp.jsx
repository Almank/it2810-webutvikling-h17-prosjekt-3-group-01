import React from 'react';
import ToDoBanner from './TodoBanner';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import ToDoFilter from './TodoFilter';
import ToDoCatelog from './TodoCatelog';
import ToDoCatelogForm from './TodoCatelogForm';

/* [TODO APP] */
export class ToDoApp extends React.Component{
		constructor(props){
			super(props);

			if(localStorage.getItem("todo") === null){
                let data = {Todo: [{name:"Primary",
									items:[{item:'Todo item #1',isDone:false},
											{item:'Todo item #2',isDone:true},
											{item:'aaaa',isDone:true},
											{item:'dddd',isDone:true}]},
									{name:"Secondary",
									items:[{item:'Todo item #1',isDone:false},
											{item:'Todo item #2',isDone:true},
											{item:'Todo item #3',isDone:true}
									]}],
									filter: [{keyword:'',Status:"SHOW_ALL"}],
									selectedItem: "0"};
                localStorage.setItem("todo", JSON.stringify(data));
            }
            let todo = localStorage.getItem("todo");
            todo = JSON.parse(todo);
            this.state = todo;
            console.log(todo);

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
			this.state.filter[0].Status = e.target.id;
			this.setState({
				filter: this.state.filter
			});
		}

		searchItem(e){
			this.state.filter[0].keyword = e.target.value;
			this.setState({
				filter: this.state.filter
			});
		}

		AddCatalog(newCatalog){
			let Catalog = {name:newCatalog,items:[{item:'Todo item #1',isDone:false}]};
			let newtodo = this.state.Todo.concat([Catalog]);
            this.setState({Todo: newtodo});
            console.log(newtodo);
            localStorage.setItem("todo", JSON.stringify(this.state));
		}

		setSelectedCatalog(index){
			console.log(index);
			this.state.selectedItem = index;
			this.setState({
				selectedItem: index
			});
		}

		render(){
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

	}

export default ToDoApp;
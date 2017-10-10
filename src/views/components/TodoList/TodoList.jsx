import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ToDoBanner from './TodoBanner';
import ToDoListItem from './TodoListItem';
import ToDoFilter from './TodoFilter';
import ToDoCatelog from './TodoCatelog';
import ToDoCatelogForm from './TodoCatelogForm';
/* [TODO LIST] */ 
var ToDoList = React.createClass({
		Remove: function(e){
		   this.props.onDelete(e);
		},
		render: function() {
			
			var createItem = function(itemText,i) {
			
				return (
					<ToDoListItem key={i} value={i} onRemove = {this.Remove}>{itemText}</ToDoListItem>
				);
			};
			var allitems = this.props.items;
            // Here is the filter function 
			var status = this.props.filter[0].Status;
			switch (status){
				case 'false':
				 allitems = allitems.filter(t => !t.isDone)
				 break;
				 case 'true':
				 allitems = allitems.filter(t => t.isDone)
			};
			// Here is the search function 
			var queryText = this.props.filter[0].keyword;
		 
			if(queryText){
				var queryResult=[];
				allitems.forEach(function(item){
					if(item.item.toLowerCase().indexOf(queryText)!=-1)
					queryResult.push(item);
				});
				return <ul>{queryResult.map(createItem,this)}</ul>;
			}
	
			return <ul>{allitems.map(createItem,this)}</ul>;
		}
    });
export default ToDoList;
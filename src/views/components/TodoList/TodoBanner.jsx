import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import ToDoListItem from './TodoListItem';
import ToDoFilter from './TodoFilter';
import ToDoCatelog from './TodoCatelog';
import ToDoCatelogForm from './TodoCatelogForm';

/* [TODO BANNER] */ 
var ToDoBanner = React.createClass({
		render: function(){
			return ( 
			 <h3>What do you want to-do?</h3>
			);
		}
	});
export default ToDoBanner;
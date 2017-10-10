import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ToDoBanner from './TodoBanner';
import ToDoList from './TodoList';
import ToDoListItem from './TodoListItem';
import ToDoFilter from './TodoFilter';
import ToDoCatelog from './TodoCatelog';
import ToDoCatelogForm from './TodoCatelogForm';

/* [TODO FORM] */
var ToDoForm = React.createClass({
		getInitialState: function() {
			return {item: ''};
        },
		handleSubmit: function(e){
			e.preventDefault();
			this.props.onFormSubmit(this.state.item);
			this.setState({item: ''});
			ReactDOM.findDOMNode(this.refs.item).focus();
			return;
		},
		onChange: function(e){
			this.setState({
			  item: e.target.value
			});
		},
		render: function(){
			return (
				<div className="row">
				  <form  onSubmit={this.handleSubmit}>
					<div className="form-group col-sm-10">
						<input type='text' className="todoField form-control"  ref='item' onChange={this.onChange} value={this.state.item}/>
						<input type='submit' className="btn btn-default" style={{"float":"left","marginLeft":"5px"}} value='Add'/>
					</div>
				  </form>
				</div>
			);
		}
    });
export default ToDoForm;
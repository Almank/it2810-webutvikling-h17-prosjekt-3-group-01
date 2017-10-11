import React from 'react';

/* [TODO LISTITEM] */
var ToDoListItem = React.createClass({
		changeHandler: function(e){
			this.setState({
			  value: e.target.checked
			});
			this.props.children.isDone = e.target.checked;
		},
		RemoveHandler: function(){
		   this.props.onRemove(this.props.value);
		},
		render: function(){
		
			var _style = "line-through";
			if(!this.props.children.isDone)
			_style ="none";
			return (
			  <li data-id={this.props.value} 
						key={this.props.value}><button type="button" className="close pull-right" aria-hidden="true" onClick={this.RemoveHandler}>&times;</button><input type="checkbox" onChange={this.changeHandler} defaultChecked={this.props.children.isDone} /><span style={{"textDecoration": _style}}>{this.props.children.item}</span></li>
			);
		}
    });
export default ToDoListItem;
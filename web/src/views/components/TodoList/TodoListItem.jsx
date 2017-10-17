import React from 'react';

export class ToDoListItem extends React.Component{
	constructor(props){
		super(props);
		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(e){
		this.setState({
			value: e.target.checked,
		});
		this.props.children.isDone = e.target.checked;
	}

	render(){
		let _style = "line-through";
		if(!this.props.children.isDone){
			_style = "none";
		}
		return(
			<li id="todoitem" data-id={this.props.value}
				key={this.props.value}>
				<button type="button" className="close pull-right" aria-hidden="true" onClick={this.props.onClick}>x</button>
				<input id="check" type="checkbox" onChange={this.changeHandler} checked={this.props.children.isDone} />
				<span style={{"textDecoration": _style}}>{this.props.children.item}</span>
			</li>
		)
	}
}
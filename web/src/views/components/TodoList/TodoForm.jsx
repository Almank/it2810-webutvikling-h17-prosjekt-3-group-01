import React from 'react';
import ReactDOM from 'react-dom';

export class TodoForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {item: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onFormSubmit(this.state.item);
		this.setState({item: ''});
		ReactDOM.findDOMNode(this.refs.item).focus();
	}

	onChange(e){
		this.setState({
			item: e.target.value
		});
	}

	render(){
		return(
			<div className="row">
				<form  onSubmit={this.handleSubmit}>
					<div className="todoform">
						<input type='text' className="todoField"  ref='item' onChange={this.onChange} value={this.state.item} placeholder="Add to-do"/>
						<input type='submit' className="addbutton"  value='Add'/>
					</div>
				</form>
			</div>
		)
	}

}

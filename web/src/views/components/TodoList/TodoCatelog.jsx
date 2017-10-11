import React from 'react';

export class TodoCatelog extends React.Component {
	constructor(props){
		super(props);

		this.changeTodo = this.changeTodo.bind(this);
		this.checkActive = this.checkActive.bind(this);
	}

	changeTodo(e){
		this.props.onClick(e.currentTarget.dataset.id);
	}

	checkActive(i){
		if(i === this.props.selectedID){
			return "list-group-item active"
		} else {
            return "list-group-item"
        }
	}

	render(){
		let selectedID = this.props.selectedID;
		let allitems = this.props.Todos;
		let items = [];

		for(let i = 0; i < allitems.length; i++){
            let _class = "";
            if(i === selectedID){
                _class = "list-group-item active";
            } else {
                _class =  "list-group-item ";
            }
			items.push(
				<a href="#" key={i} data-id={i} className={_class} onClick={this.changeTodo}>
					<span className="badge">
						{allitems[i].items.length}
					</span>
					{allitems[i].name}
				</a>
			)
		}

		return(
			<div className="list-group">
				{ items }
			</div>
		)
	}
}

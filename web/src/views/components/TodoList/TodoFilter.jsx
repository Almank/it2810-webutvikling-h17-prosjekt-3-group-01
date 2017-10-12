import React from 'react';

export class TodoFilter extends React.Component {
	constructor(props){
		super(props);
		this.isActive = this.isActive.bind(this);
	}

	isActive(value){
        return 'button '+((value===this.props.filter[0].Status) ?'button':'');
    }

    render(){
		let onSearch1 = this.props.onSearch;
		return(
			<div className="row">
                <div className="col-filter">
					<ul className="todo-filter">
                        <li><a onClick={this.props.onFilter} className={this.isActive('SHOW_ALL')} id="SHOW_ALL" href="#">All</a></li>
						<li><a onClick={this.props.onFilter} className={this.isActive('false')} id="false">Incomplete</a></li>
						<li><a onClick={this.props.onFilter} className={this.isActive('true')} id="true">Complete</a></li>
					</ul>
				</div>
				<div className="col-search">
					<div className="input-group">
									<span className="input-group-btn">
										<button className="button" type="button"><span className="glyphicon glyphicon-search" /></button>
									</span>
						<input  type="search" className="todoField" ref='filter' onChange={onSearch1} placeholder="Search" />
					</div>
				</div>
			</div>
		)
	}
}

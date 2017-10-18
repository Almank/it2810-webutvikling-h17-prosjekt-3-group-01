import React from 'react';
import PropTypes from 'prop-types';

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
			<div className="row todo-filter-search">
                <div className="col-search">
                    <div className="input-group">
                        <input  type="search" className="searchField" ref='filter' onChange={onSearch1} placeholder="Search" />
                    </div>
                </div>
                <div className="col-filter">
					<div className="todo-filter">
                        <li><a onClick={this.props.onFilter} className={this.isActive('SHOW_ALL')} id="SHOW_ALL">All</a></li>
						<li><a onClick={this.props.onFilter} className={this.isActive('false')} id="false">Incomplete</a></li>
						<li><a onClick={this.props.onFilter} className={this.isActive('true')} id="true">Complete</a></li>
					</div>
				</div>
			</div>
		)
	}
}

TodoFilter.propTypes = {
    onFilter: PropTypes.func,
    onSearch: PropTypes.func,
    filter: PropTypes.array,
};
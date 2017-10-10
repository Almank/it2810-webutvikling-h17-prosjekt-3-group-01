import React from 'react';

/* [TODO FILTER] */ 
var ToDoFilter = React.createClass({
		isActive:function(value){
	
			return 'btn '+((value===this.props.filter[0].Status) ?'btn-primary':'default');
		},
		render: function(){
		 var onSearch1 = this.props.onSearch;
		          return(
				  <div className="row">
							<div className="col-xs-7">
								<div id="todo-filter" className="input-group">
									<span className="input-group-btn">
										<button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
									</span>
									<input  type="search" className="form-control" ref='filter' onChange={onSearch1} placeholder="Search" ></input>
								</div>
							</div>
							<div className="col-xs-5">
								<ul className="nav nav-pills todo-filter">
								  <li><a onClick={this.props.onFilter} className={this.isActive('SHOW_ALL')} id="SHOW_ALL" href="#">All</a></li>
								  <li><a onClick={this.props.onFilter} className={this.isActive('false')} id="false">Incomplete</a></li>
								  <li><a onClick={this.props.onFilter} className={this.isActive('true')} id="true">Complete</a></li>
								</ul>
							</div>
						</div>
				  ); 
		}
	});
export default ToDoFilter;
import "./Todo.css";
import React from "react";

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="list__item">
				{this.props.todo.title}
				<div className="list__item-btns">
					<button
						onClick={this.props.onClick}
						className="todo__del-btn"
					>
						D
					</button>
					<button className="todo__com-btn">C</button>
				</div>
			</li>
		);
	}
}

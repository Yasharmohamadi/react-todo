import "./Todo.css";
import React from "react";

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		
		console.log("Todo : constructor");
	}

	removeClickHandler(id) {
		this.props.onDelete(id);
	}

	completeClickHandler(id) {
		this.props.onComplete(id);
	}

	render() {
		return (
			<li
				className={`list__item ${this.props.hasCompleted ? "completed" : ""}`}
			>
				{this.props.title}
				<div className="list__item-btns">
					<button
						onClick={this.removeClickHandler.bind(this, this.props.id)}
						className="todo__del-btn"
					>
						D
					</button>

					<button
						className="todo__com-btn"
						onClick={this.completeClickHandler.bind(this, this.props.id)}
					>
						C
					</button>
				</div>
			</li>
		);
	}
}

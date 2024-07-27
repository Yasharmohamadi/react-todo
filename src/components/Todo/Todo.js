import "./Todo.css";
import React from "react";

export default class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoID: null,
			todoTitle: "",
			todoComplete: null,
		};

		console.log("Todo : constructor");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("Todo : getDrivedStateFromProps", props, state);

		return {
			todoID: props.id,
			todoTitle: props.title,
			todoComplete: props.hasCompleted,
		};
	}

	removeClickHandler(id) {
		this.props.onDelete(id);
	}

	completeClickHandler(id) {
		this.props.onComplete(id);
	}

	componentDidMount() {
		console.log("Todo : componentDidMount ");
	}

	componentDidUpdate() {
		console.log("Todo : componentDidUpdate");
	}

	shouldComponentUpdate() {
		console.log("Todo : shouldUpdateComponent");

		return true;
	}

	getSnapshotBeforeUpdate(props, state) {
		console.log("TodoList : getSnapshotBeforeUpdate", props, state);
	}

	render() {
		console.log("Todo : render ");

		return (
			<li
				className={`list__item ${this.state.todoComplete ? "completed" : ""}`}
			>
				{this.state.todoTitle}
				<div className="list__item-btns">
					<button
						onClick={this.removeClickHandler.bind(this, this.state.todoID)}
						className="todo__del-btn"
					>
						D
					</button>

					<button
						className="todo__com-btn"
						onClick={this.completeClickHandler.bind(this, this.state.todoID)}
					>
						C
					</button>
				</div>
			</li>
		);
	}
}

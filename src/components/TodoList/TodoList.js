import React from "react";
import Header from "../Header/Header";
import Todo from "../Todo/Todo";
import "./TodoList.css";

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			newTitle: "",
			view: "all",
		};
	}

	inputHandler(event) {
		this.setState({
			newTitle: event.target.value,
		});
	}

	addTodoHandler() {
		let newTodo = {
			id: this.state.todos.length + 1,
			title: this.state.newTitle,
			hasCompleted: false,
		};
		this.setState((prevState) => {
			return {
				todos: [...this.state.todos, newTodo],
				newTitle: "",
			};
		});
	}

	deleteTodoHandler(todoId) {
		let filteredTodos = this.state.todos.filter((todo) => {
			return todo.id !== todoId;
		});

		this.setState({
			todos: filteredTodos,
		});
	}

	completeTodoHandler(todoId) {
		let newTodos = [...this.state.todos];

		newTodos.forEach((todo) => {
			if (todo.id === todoId) {
				todo.hasCompleted = !todo.hasCompleted;
			}
		});

		this.setState({
			todos: newTodos,
		});
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="input-box">
					<input
						type="text"
						className="input"
						onChange={this.inputHandler.bind(this)}
						value={this.state.newTitle}
					/>
					<button className="add" onClick={this.addTodoHandler.bind(this)}>
						+
					</button>
				</div>
				<select className="select">
					<option value="all">همه</option>
					<option value="completed">کامل شده ها</option>
					<option value="notCompleted">در حال انجام</option>
				</select>
				<div className="list-box">
					<ul className="list">
						{this.state.todos.map((todo) => (
							<Todo
								key={todo.id}
								todo={todo}
								onDelete={this.deleteTodoHandler.bind(this)}
								onComplete={this.completeTodoHandler.bind(this)}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

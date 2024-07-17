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
			hasCompleted: false,
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
			hasCompleted: this.state.hasCompleted,
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
		});

		this.state.newTitle = "";
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
							<li className="list__item">
								{todo.title}
								<div className="list__item-btns">
									<button className="todo__del-btn">D</button>
									<button className="todo__com-btn">C</button>
								</div>
							</li>
						))}
						{/* <li className="list__item">
							باشکاه
							<div className="list__item-btns">
								<button className="todo__del-btn">D</button>
								<button className="todo__com-btn">C</button>
							</div>
						</li>
						<li className="list__item">
							کتاب
							<div className="list__item-btns">
								<button className="todo__del-btn">D</button>
								<button className="todo__com-btn">C</button>
							</div>
						</li>
						<li className="list__item">
							کافه
							<div className="list__item-btns">
								<button className="todo__del-btn">D</button>
								<button className="todo__com-btn">C</button>
							</div>
						</li> */}
					</ul>
				</div>
			</div>
		);
	}
}

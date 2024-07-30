import React, { useState } from "react";
import Header from "../Header/Header";
import Todo from "../Todo/Todo";
import "./TodoList.css";

export default function TodoList() {
	const [todos, setTodos] = useState([]);
	const [newTitle, setNewTitle] = useState("");
	const [view, setView] = useState("all");

	const inputHandler = (event) => {
		setNewTitle(event.target.value);
	};

	const addTodoHandler = () => {
		let newTodo = {
			id: todos.length + 1,
			title: newTitle,
			hasCompleted: false,
		};

		setTodos((prevState) => {
			return [...prevState, newTodo];
		});
		setNewTitle("");
	};

	const deleteTodoHandler = (todoId) => {
		let filteredTodos = todos.filter((todo) => {
			return todo.id !== todoId;
		});

		setTodos(filteredTodos);
	};

	const completeTodoHandler = (todoId) => {
		let newTodos = [...todos];

		newTodos.forEach((todo) => {
			if (todo.id === todoId) {
				todo.hasCompleted = !todo.hasCompleted;
			}
		});

		setTodos(newTodos);
	};

	const viewHandler = (event) => {
		setView(event.target.value)
	}

	return (
		<div className="container">
			<Header />
			<div className="input-box">
				<input
					type="text"
					className="input"
					onChange={(event) => inputHandler(event)}
					value={newTitle}
				/>
				<button className="add" onClick={() => addTodoHandler()}>
					+
				</button>
			</div>
			<select className="select" onChange={(event) => viewHandler(event)}>
				<option value="all">همه</option>
				<option value="completed">کامل شده ها</option>
				<option value="notCompleted">در حال انجام</option>
			</select>
			<div className="list-box">
				<ul className="list">

					{view === "all" &&
						todos.map((todo) => (
							<Todo
								key={todo.id}
								{...todo}
								onDelete={() => deleteTodoHandler(todo.id)}
								onComplete={() => completeTodoHandler(todo.id)}
							/>
						))}

					{view === "completed" &&
						todos
							.filter((todo) => todo.hasCompleted)
							.map((todo) => (
								<Todo
									key={todo.id}
									{...todo}
									onDelete={() => deleteTodoHandler(todo.id)}
									onComplete={() => completeTodoHandler(todo.id)}
								/>
							))
							}

					{view === "notCompleted" &&
						todos
							.filter((todo) => !todo.hasCompleted)
							.map((todo) => (
								<Todo
									key={todo.id}
									{...todo}
									onDelete={() => deleteTodoHandler(todo.id)}
									onComplete={() => completeTodoHandler(todo.id)}
								/>
							))}
				</ul>
			</div>
		</div>
	);
}

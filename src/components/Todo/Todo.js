import "./Todo.css";
import React, { useState } from "react";

export default function Todo(props) {
	const removeClickHandler = (id) => {
		props.onDelete(id);
	};

	const completeClickHandler = (id) => {
		props.onComplete(id);
	};

	return (
		<li className={`list__item ${props.hasCompleted ? "completed" : ""}`}>
			{props.title}
			<div className="list__item-btns">
				<button
					onClick={() => removeClickHandler(props.id)}
					className="todo__del-btn"
				>
					D
				</button>

				<button
					className="todo__com-btn"
					onClick={() => completeClickHandler(props.id)}
				>
					C
				</button>
			</div>
		</li>
	);
}

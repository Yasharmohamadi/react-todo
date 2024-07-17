import React from "react";
import Header from "../Header/Header";
import Todo from "../Todo/Todo";
import "./TodoList.css";

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="input-box">
					<input type="text" class="input" />
					<button className="add">+</button>
				</div>
				<select className="select">
					<option value="همه">همه</option>
					<option value="کامل شده ها">کامل شده ها</option>
					<option value="در حال انجام">در حال انجام</option>
				</select>

				<div class="list-box">
					<ul class="list">
						<li class="list__item">
							باشکاه
							<div class="list__item-btns">
								<button class="todo__del-btn">D</button>
								<button class="todo__com-btn">C</button>
							</div>
						</li>
						<li class="list__item">
							کتاب
							<div class="list__item-btns">
								<button class="todo__del-btn">D</button>
								<button class="todo__com-btn">C</button>
							</div>
						</li>
						<li class="list__item">
							کافه
							<div class="list__item-btns">
								<button class="todo__del-btn">D</button>
								<button class="todo__com-btn">C</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

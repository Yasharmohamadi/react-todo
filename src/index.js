import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import TodoList from './components/TodoList/TodoList'
// FIRST WAY TO USE REAC
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.Fragment>
		<TodoList />
	</React.Fragment>
);

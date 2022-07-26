import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import HeaderTaskAdd from './components/headerTaskAdd/HeaderTaskAdd';
import TaskDetails from "./components/taskDetails/TaskDetails";


import "./App.css";

const App = () => {
  const data = localStorage.getItem("tasksItens")
  const [tasks, setTasks] = useState(data ? JSON.parse(data) : [])


	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
    localStorage.setItem("tasksItens", JSON.stringify(newTasks))
	};

	const handleTaskAdd  = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4(),
				completed: false,
			},
		];

		setTasks(newTasks);

    localStorage.setItem("tasksItens", JSON.stringify(newTasks))
	};

	const handleTaskRemove  = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem("tasksItens", JSON.stringify(newTasks));
	};

	return (
		<Router>
			<div className="container">
				<Header />
        <Routes>

          <Route path="/" exact element={
            <>
            <HeaderTaskAdd handleTaskAdd={handleTaskAdd} />
							<Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}
							/>	
            </>}/>

          <Route path="/:taskTitle" exact element={
            <>
              <TaskDetails/>
            </>
          }/>
        </Routes>  	
			</div>
		</Router>
	);
};

export default App;
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import Tasks from './components/tasks/Tasks';
import HeaderTaskAdd from './components/headerTaskAdd/HeaderTaskAdd';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: 2,
      title: 'Jogar Basquete',
      completed: true
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) 
      return {
        ...task, completed: !task.completed
      }
      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed:false
    }]

    setTasks(newTasks)
  }

  return (
    <>
    <div className='container'>
      <HeaderTaskAdd handleTaskAdd={handleTaskAdd} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
    </div> 
    </> 
  )
}

export default App
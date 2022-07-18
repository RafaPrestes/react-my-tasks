import React from 'react'
import TaskItem from '../taskItem/TaskItem'

const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <>
        {tasks.map(task => <TaskItem  task={task}  handleTaskClick={handleTaskClick}/>)}
    </>
  )
}

export default Tasks
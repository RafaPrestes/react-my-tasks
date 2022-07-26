import React from 'react'
import TaskItem from '../taskItem/TaskItem'

const Tasks = ({ tasks, handleTaskClick, handleTaskRemove }) => {

  return (
    <>
        {tasks.map(task => <TaskItem  task={task}  handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>)}
    </>
  )
}

export default Tasks
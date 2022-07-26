import React from 'react'
import './taskItem.css'
import { CgClose } from 'react-icons/cg'
import { CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const TaskItem = ({ task, handleTaskClick, handleTaskRemove }) => {
  const navigate = useNavigate();

  return (
    <div className="task-container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className='buttons-container'>
        <button className="remove-task-button" onClick={() => handleTaskRemove(task.id)}><CgClose/></button>
        <button className="see-task-details-button" onClick={() => navigate(`/${task.title}`)}><CgInfo/></button>
      </div>
    </div>
  )
}

export default TaskItem
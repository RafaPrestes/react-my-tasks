import React from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

import './taskDetails.css'

import Button from '../button/Button'

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    
  return (
    <>
        <div className="back-button-container">
            <Button onClick={() => navigate('/')}>Voltar</Button>        
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Foco na meta!</p>
        </div>
    </>
  )
}

export default TaskDetails
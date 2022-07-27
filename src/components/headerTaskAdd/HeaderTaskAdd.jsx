import React, { useState } from 'react'
import './headerTaskAdd.css'
import Button from '../button/Button'

const HeaderTask = ({ handleTaskAdd }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);    
    }

    const handleAddTaskClick = () => {
        if (inputData == '') {
            alert("Insira uma tarefa!")
        } else {
            handleTaskAdd(inputData)    
            setInputData("")
        }       
    }

  return (
    <>
        <div className='add-task-container'>
            <input onChange={handleInputChange} value={inputData} className='add-task-input' type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>       
        </div>
    </>
  )
}

export default HeaderTask
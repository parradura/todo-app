import React from 'react'
import { Checkbox } from '@mui/material'
import './index.css'

const Todo = ({ todo, completeTodo, deleteTodo }) => {

  const handleCheck = (e, id) => {
    e.preventDefault()
    completeTodo(id)
  }

  const handleClick = (e, id) => {
    e.preventDefault()
    deleteTodo(id)
  }

  return (
    <div key={todo.id} className="todo_root">
      <Checkbox checked={todo.completed} onChange={(e) => handleCheck(e, todo.id)}/>
      <p>{todo.text}</p>
      <button className='deleteButton' type="button" onClick={(e) => handleClick(e, todo.id)}>Delete</button>
    </div>
  )
}

export default Todo

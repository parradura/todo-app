import React from 'react'
import { Checkbox } from '@mui/material'
import './index.css'

const Todo = ({ todo, completeTodo }) => {

  const handleCheck = (e, id) => {
    console.log(id)
    e.preventDefault()
    completeTodo(id)
  }

  return (
    <div key={todo.id} className="todo_root">
      <Checkbox checked={todo.completed} onChange={(e) => handleCheck(e, todo.id)}/>
      <p>{todo.text}</p>
    </div>
  )
}

export default Todo

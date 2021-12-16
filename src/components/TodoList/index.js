import React from 'react'
import "./index.css"
import Todo from '../Todo'

const TodoList = ({ todos, completeTodo }) => {

  return (
    <div className="todoList_root">
      <p>Todo List</p>
      {todos.map( todo => (
        <Todo 
          todo={todo} 
          key={todo.id} 
          completeTodo={completeTodo}
        />
      ))}
    </div>
  )
}

export default TodoList

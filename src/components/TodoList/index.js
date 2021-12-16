import React, { useState } from 'react'
import "./index.css"
import Todo from '../Todo'
import { Button, Menu, MenuItem, Fade } from '@mui/material'

const SelectMode = ({mode, setMode}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMode = (mode) => {
    setMode(mode)
    handleClose()
  }

  const renderMode = (mode) => {
    if(mode === "ALL") return "Todos"
    if(mode === "COMPLETED") return "Realizados"
    if(mode === "UNCOMPLETED") return "No realizados"
  }

  return (

      <div>
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {renderMode(mode)}
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => handleMode("ALL")}>Todos</MenuItem>
          <MenuItem onClick={() => handleMode("COMPLETED")}>Realizados</MenuItem>
          <MenuItem onClick={() => handleMode("UNCOMPLETED")}>No realizados</MenuItem>
        </Menu>
      </div>
  )
}


const TodoList = ({ filterTodos, completeTodo, deleteTodo }) => {

  const [mode, setMode] = useState("ALL")

  return (
    <div className="todoList_root">
      <div className="titleContainer">
        <p>Todo List</p>
        <SelectMode mode={mode} setMode={setMode}/>
      </div>
      {filterTodos(mode).map( todo => (
        <Todo 
          todo={todo} 
          key={todo.id} 
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList

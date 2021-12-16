import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import "./index.css";
import TodoList from "../TodoList";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0)
  const [todos, setTodos] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  });

  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(input)
    if(input !== "") {
      setTodos([...todos, {id: index, text: input, completed: false}])
      setIndex(index + 1)
      setInput("")
    }
  }

  const handleChange = e => {
    setInput(e.target.value)
  }
  
  const completeTodo = (id) => {
    let updatedTodos = todos.map( todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  
  const deleteTodo = (id) => {
    console.log("REMOVING TODO: ", id)
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const filterTodos = (mode) => {
    if(mode === "ALL") return todos
    if(mode === "COMPLETED") return todos.filter(e => e.completed)
    if(mode === "UNCOMPLETED") return todos.filter(e => !e.completed)
  }
  

  return (
    <Grid item className="todoForm_root">
      <form onSubmit={handleSubmit} className="form">
        <div className="formContainer">
          <h1>To do list</h1>
          <p>¿Qué cosas tenés que terminar hoy?</p>
          <input 
            ref={inputRef}
            value={input}
            placeholder="Escribí un item" 
            onChange={handleChange}
          />
        </div>
        {
          todos.length 
            ? <TodoList 
                filterTodos={filterTodos}
                completeTodo={completeTodo} 
                deleteTodo={deleteTodo}
              /> 
            : null
        }
        <div className="buttonContainer">
          <button type="submit" className="submitButton">Agregar</button>
        </div>
      </form>
    </Grid>
  );
};

export default TodoForm;

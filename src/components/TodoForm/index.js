import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import "./index.css";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = e => {
    e.preventDefault()
    console.log(input)
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <Grid item className="todoForm_root">
      <form onSubmit={handleSubmit} className="form">
        <div className="formContainer">
          <h1>To do list</h1>
          <p>¿Qué cosas tenés que terminar hoy?</p>
          <input 
            ref={inputRef}
            placeholder="Escribí un item" 
            onChange={handleChange}
          />
        </div>
        <div className="buttonContainer">
          <button type="submit">Agregar</button>
        </div>
      </form>
    </Grid>
  );
};

export default TodoForm;

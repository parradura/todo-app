import React from 'react'
import TodoForm from './components/TodoForm'
import { Grid } from '@mui/material'
import './index.css'

const App = props => {
  return (
    <div className='root'>
      <Grid container xs={12} sm={10} md={8} lg={6} xl={6} className="app_root">
        <TodoForm/>
      </Grid>
    </div>
  );
}

export default App;

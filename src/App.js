// App.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, taskName]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='main-container'>
      <div className='center-container'>
        <h2 className='app-heading'>Todo App</h2>
        
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;

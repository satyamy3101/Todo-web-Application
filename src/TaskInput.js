// TaskInput.js
import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask(taskName);
      setTaskName('');
    }
  };

  const handleClick = () => {
    addTask(taskName);
    setTaskName('');
  };

  return (
    <div className='input-container'>
      <input className='input-box-todo'
        type="text"
        value={taskName}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button className='add-btn' onClick={handleClick}>Add Task</button>
    </div>
  );
}

export default TaskInput;

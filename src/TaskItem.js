// TaskItem.js
import React from 'react';

function TaskItem({ task, index, deleteTask }) {
  const handleClick = () => {
    deleteTask(index);
  };

  return (
    <li className='list-item'>
      {task}
      <button className='delete-btn' onClick={handleClick}>Delete</button>
    </li>
  );
}

export default TaskItem;

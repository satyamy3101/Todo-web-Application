// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} index={index} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;

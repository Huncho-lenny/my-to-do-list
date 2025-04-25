import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task..."
      />
      <button className="add-button" type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;

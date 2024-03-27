import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    const newTask = { id: Date.now(), name: taskInput, status: 'Incomplete' };
    setTasks([newTask, ...tasks]);
    setTaskInput('');
  };

  const handleFinishTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: task.name, status: 'Completed' } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="save-btn" onClick={handleAddTask}>Save</button>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Todo Item</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id} className={task.status === 'Completed' ? 'finished-task' : ''}>
              <td>{index + 1}</td>
              <td>{task.status === 'Completed' ? <strike>{task.name}</strike> : task.name}</td>
              <td>{task.status}</td>
              <td>
                <button className='finished-btn' onClick={() => handleFinishTask(task.id)}>Finished</button>
                <button className='delete-btn' onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
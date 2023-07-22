// Import necessary hooks and components from React
import React, { useState, useEffect } from 'react';

// Define the App component
const App = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to store the text of a new task
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage on initial mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle input change for new task
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handle form submission to add a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the new task is not empty
    if (newTask.trim() !== '') {
      // Add the new task to the tasks array
      setTasks([...tasks, { text: newTask, completed: false }]);
      // Clear the input field after adding the task
      setNewTask('');
    }
  };

  // Handle task deletion
  const handleDeleteTask = (index) => {
    // Create a new tasks array excluding the task at the given index
    const updatedTasks = tasks.filter((task, i) => i !== index);
    // Update the tasks state with the new array
    setTasks(updatedTasks);
  };

  // Handle task completion toggle
  const handleToggleComplete = (index) => {
    // Create a new tasks array with the completion status of the task at the given index toggled
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    // Update the tasks state with the new array
    setTasks(updatedTasks);
  };

  // Render the component
  return (
    <div>
      <h1>Todo List</h1>
      {/* Form to add a new task */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      {/* List of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Checkbox to toggle task completion */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
            />
            {/* Display task text with line-through style if completed */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            {/* Button to delete the task */}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

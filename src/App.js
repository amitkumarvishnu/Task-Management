import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Task Management</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;

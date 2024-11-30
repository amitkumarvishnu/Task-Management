import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, setFilter } from '../redux/action';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'PENDING') return !task.completed;
    return true;
  });

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange({ target: { value: 'ALL' } })}>All</button>
        <button onClick={() => handleFilterChange({ target: { value: 'COMPLETED' } })}>Completed</button>
        <button onClick={() => handleFilterChange({ target: { value: 'PENDING' } })}>Pending</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <span 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggle(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

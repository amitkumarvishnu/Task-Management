import { createStore } from "redux";
import taskReducer from "./reducer";

// Load tasks from local storage
const loadTasksFromLocalStorage = () => {
  try {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (e) {
    return [];
  }
};

const store = createStore(
  taskReducer,
  { tasks: loadTasksFromLocalStorage() }
);

// Save tasks to local storage on change
store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
});

export default store;


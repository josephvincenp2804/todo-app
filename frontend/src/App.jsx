import React, { useState, useEffect } from "react";
import axios from "./services/api";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./styles.css";


function App() {
  const [todos, setTodos] = useState([]);

  // Fetch tasks on load
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch tasks from API
  const fetchTodos = async () => {
    const res = await axios.get("/todos");
    setTodos(res.data);
  };

  // Add new task
  const addTodo = async (todo) => {
    const res = await axios.post("/todos", todo);
    setTodos([...todos, res.data]);
  };

  // Delete task
  const deleteTodo = async (id) => {
    await axios.delete(`/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  // Toggle task status
  const toggleTodo = async (id, status) => {
    await axios.put(`/todos/${id}`, { status: status });
    fetchTodos();
  };

  return (
    <div className="app-container">
   <h1 style={{ color: "black" }}>To-Do List Dashboard</h1>

      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;

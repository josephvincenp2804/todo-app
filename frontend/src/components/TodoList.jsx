import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

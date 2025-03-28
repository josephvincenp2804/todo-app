import React from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo._id, todo.status === "completed" ? "ongoing" : "completed");
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.status === "completed"}
        onChange={handleToggle}
      />
      <span
        className={todo.status === "completed" ? "completed" : ""}
      >
        {todo.description}
      </span>
      <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
  ❌ Delete
</button>

    </div>
  );
};

export default TodoItem;

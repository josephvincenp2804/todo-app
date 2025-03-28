import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    addTodo({ description, status: "ongoing" });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodoForm;

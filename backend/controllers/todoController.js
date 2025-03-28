const Todo = require("../models/Todo");

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new todo
const addTodo = async (req, res) => {
  const { description, status } = req.body;

  if (!description) {
    return res.status(400).json({ message: "Description is required" });
  }

  try {
    const newTodo = new Todo({ description, status });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update todo status
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };

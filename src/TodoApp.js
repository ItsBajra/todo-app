import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoInput("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
      <div className="max-w-md mx-auto p-4 bg-gray-800 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (todoInput.trim()) {
              addTodo(todoInput);
            }
          }}
          className="mb-4"
        >
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Add a new todo"
          />
          <button
            type="submit"
            className="w-full mt-2 p-2 bg-blue-600 rounded hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            Add Todo
          </button>
        </form>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;

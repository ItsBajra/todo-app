import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-800 rounded my-2">
      <div
        className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-white'}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:text-red-700">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;

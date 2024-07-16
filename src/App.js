import React from 'react';
import './App.css';
import Navbar from './Navbar';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-8">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;

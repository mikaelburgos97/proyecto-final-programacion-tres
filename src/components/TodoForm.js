import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../TodoForm.css';

function TodoForm({ setTodos }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    const newTodo = {
      id: uuidv4(), // Genera un ID único
      text: input,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
        data-testid="todo-input"
      />
      <button type="submit" className="todo-button" data-testid="add-button">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
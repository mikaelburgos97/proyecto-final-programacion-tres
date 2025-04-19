import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import '../TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`} data-testid="todo-item">
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            data-testid="edit-input"
          />
          <button onClick={handleEdit} className="save-btn" data-testid="save-btn">
            <FaCheck />
          </button>
          <button onClick={() => setIsEditing(false)} className="cancel-btn" data-testid="cancel-btn">
            <FaTimes />
          </button>
        </div>
      ) : (
        <>
          <div 
            className={`todo-text ${todo.completed ? 'completed-text' : ''}`}
            onClick={() => toggleComplete(todo.id)}
            data-testid="todo-text"
          >
            {todo.text}
          </div>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn" data-testid="edit-btn">
              <FaEdit />
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn" data-testid="delete-btn">
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
import React from 'react';
import '../TodoStats.css';

function TodoStats({ todos }) {
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const activeTasks = totalTasks - completedTasks;
  
  return (
    <div className="todo-stats" data-testid="todo-stats">
      <div className="stat-item">
        <span className="stat-label">Total:</span>
        <span className="stat-value">{totalTasks}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Active:</span>
        <span className="stat-value">{activeTasks}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Completed:</span>
        <span className="stat-value">{completedTasks}</span>
      </div>
    </div>
  );
}

export default TodoStats;
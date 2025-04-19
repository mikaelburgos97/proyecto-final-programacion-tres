import React from 'react';
import '../TodoFilter.css';

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="todo-filter" data-testid="todo-filter">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
        data-testid="filter-all"
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
        data-testid="filter-active"
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
        data-testid="filter-completed"
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
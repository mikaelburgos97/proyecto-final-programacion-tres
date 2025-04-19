import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders empty message when no todos', () => {
  render(<TodoList todos={[]} setTodos={() => {}} />);
  expect(screen.getByText(/no tasks found/i)).toBeInTheDocument();
});

test('renders todos when provided', () => {
  const mockTodos = [
    { id: '1', text: 'Test Todo', completed: false },
    { id: '2', text: 'Completed Todo', completed: true }
  ];
  
  render(<TodoList todos={mockTodos} setTodos={() => {}} />);
  
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
  expect(screen.getByText('Completed Todo')).toBeInTheDocument();
});
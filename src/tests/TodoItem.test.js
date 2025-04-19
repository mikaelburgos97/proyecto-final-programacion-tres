import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

test('renders todo item correctly', () => {
  const mockTodo = { id: '1', text: 'Test Todo', completed: false };
  render(
    <TodoItem 
      todo={mockTodo} 
      toggleComplete={() => {}} 
      deleteTodo={() => {}} 
      editTodo={() => {}} 
    />
  );
  
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
  expect(screen.getByTestId('edit-btn')).toBeInTheDocument();
  expect(screen.getByTestId('delete-btn')).toBeInTheDocument();
});

test('calls toggleComplete when text is clicked', () => {
  const mockToggleComplete = jest.fn();
  const mockTodo = { id: '1', text: 'Test Todo', completed: false };
  
  render(
    <TodoItem 
      todo={mockTodo} 
      toggleComplete={mockToggleComplete} 
      deleteTodo={() => {}} 
      editTodo={() => {}} 
    />
  );
  
  fireEvent.click(screen.getByTestId('todo-text'));
  expect(mockToggleComplete).toHaveBeenCalledWith('1');
});

test('enters edit mode when edit button is clicked', () => {
  const mockTodo = { id: '1', text: 'Test Todo', completed: false };
  
  render(
    <TodoItem 
      todo={mockTodo} 
      toggleComplete={() => {}} 
      deleteTodo={() => {}} 
      editTodo={() => {}} 
    />
  );
  
  fireEvent.click(screen.getByTestId('edit-btn'));
  
  // Should now be in edit mode
  expect(screen.getByTestId('edit-input')).toBeInTheDocument();
  expect(screen.getByTestId('save-btn')).toBeInTheDocument();
  expect(screen.getByTestId('cancel-btn')).toBeInTheDocument();
});
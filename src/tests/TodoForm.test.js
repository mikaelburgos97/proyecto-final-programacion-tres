import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

test('renders form elements correctly', () => {
  render(<TodoForm setTodos={() => {}} />);
  
  expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
  expect(screen.getByText(/add task/i)).toBeInTheDocument();
});

test('handles input changes', () => {
  render(<TodoForm setTodos={() => {}} />);
  
  const input = screen.getByTestId('todo-input');
  fireEvent.change(input, { target: { value: 'New Task' } });
  
  expect(input.value).toBe('New Task');
});

test('calls setTodos when form is submitted with valid input', () => {
  const mockSetTodos = jest.fn();
  render(<TodoForm setTodos={mockSetTodos} />);
  
  const input = screen.getByTestId('todo-input');
  fireEvent.change(input, { target: { value: 'New Task' } });
  
  const button = screen.getByTestId('add-button');
  fireEvent.click(button);
  
  expect(mockSetTodos).toHaveBeenCalled();
  expect(input.value).toBe(''); // Input should be cleared
});
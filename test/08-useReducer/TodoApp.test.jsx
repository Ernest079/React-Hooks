import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en TodoApp', () => {

  useTodo.mockReturnValue({
    todos: [
      {id:1, description:'Todo 1', done: false},
      {id:2, description:'Todo 2', done: true},
      {id:3, description:'Todo 3', done: false},
    ],
    todosCount: 3,
    pendingTodosCount: 2,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('Debe de mostrar el componente correctamente', () => {
    render(<TodoApp/>);
    screen.debug();
  });

  test('', () => {

  });

  test('', () => {

  });

  test('', () => {

  });

  test('', () => {

  });
});
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => {

  const todo= {
    id:1,
    description: 'Crear nueva tarea',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( () => jest.clearAllMocks() );
  test('Debe de mostrar el todo pendiente de completar', () => {
    render(
      <TodoItem todo={todo} 
        onToggleTodo={onToggleTodoMock} 
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    // screen.debug();
// 
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
  
    const spanElement = screen.getByLabelText('span');

    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');

  });
  test('Debe de mostrar el todo completado', () => {
    
    todo.done=true;
    
    render(
      <TodoItem todo={todo} 
        onToggleTodo={onToggleTodoMock} 
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).toContain('text-decoration-line-through');

  });

  test('El span debe de llamar el toggleTodo cuando se hace clck', () => {
    render(
      <TodoItem todo={todo} 
        onToggleTodo={onToggleTodoMock} 
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement =  screen.getByLabelText('span');
    fireEvent.doubleClick( spanElement );

    expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);   

  });
  test('El boton debe de llamar al deleteTodo', () => {
    render(
      <TodoItem todo={todo} 
        onToggleTodo={onToggleTodoMock} 
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const deleteButton = screen.getByRole('button', {name:'delete'});
    fireEvent.click(deleteButton);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
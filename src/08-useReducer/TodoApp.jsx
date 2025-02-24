import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del tiempo',
    done: false,
  },
];

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  // const {id, description} = todos;

  const handleNewTodo = (todo) => {
    console.log({todo});
  }

  return (
    <>
      <h1>TodoApp 10, <small>Pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList id = {todos.id} description = {todos.description}/>
          {/* Fin TodoList */}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo(todo)*/}
          {/* {id: new Date() ...} */}
          <form >
            <input type="text" 
              placeholder="Que hay que hacer"
              className="form-control"
            />
            <button type="submit"
              className="btn btn-primary mt-2"
            >
              Agregar
            </button>
          </form>
          {/* FIn TodoAdd */}
        </div>
      </div>
    </>
  )
}

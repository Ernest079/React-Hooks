
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onDoubleClick={()=> onToggleTodo(todo.id)}  
        aria-label="span"
      >
        {todo.description}
      </span>  
      <button className="btn btn-danger"
        onClick={()=>onDeleteTodo(todo.id)}
        aria-label="delete"
      >
        Borrar
      </button>
    </li>
  )
}

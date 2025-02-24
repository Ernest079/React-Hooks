
export const TodoList = ({id, description}) => {
  console.log(id, description);
  return (
    <>
      <ul className="list-group ">
        <li key={id} className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{JSON.stringify(description)}</span>  
            <button className="btn btn-danger">Borrar</button>
          </li>
      </ul>
    </>
  )
}

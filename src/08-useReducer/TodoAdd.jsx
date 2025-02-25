import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {
  
  const {onInputChange, description, onResetForm} =useForm(
    {
      description: '',
    }
  );

  const formSubmit = (event) => {
    event.preventDefault();
    if(description.length <= 1){
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    }
    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <input type="text" 
          placeholder="Que hay que hacer"
          className="form-control"
          name = 'description'
          value={description}
          onChange={onInputChange}
        />
        <button type="submit"
          className="btn btn-primary mt-2"
        >
          Agregar
        </button>
      </form>
    </>
  )
}

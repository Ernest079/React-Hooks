import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Waito',
    email: '',
  });

  const {username, email} = formState;

  const onInputChange = ({target}) => {

    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  useEffect(() => {
    // console.log('useEffect');
  }, []);
  useEffect(() => {
    // console.log('useEffect cambio');
  }, [formState]);
  useEffect(() => {
    // console.log('email cambio');
  }, [email]);

  return (
    <>
      <h1>
        Formulario Simple
      </h1>
      <hr/>
      <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}  
      />
      {
        (username === 'Waito2') && <Message/>
      }
      <input type="email" 
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}

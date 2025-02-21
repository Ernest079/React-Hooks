import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm, username, email, password} = useForm(
    {
      username: '',
      email: '',
      password: '',
    }
  );
  
  // const {username, email, password} = formState;

  // useEffect(() => {
  //   // console.log('useEffect');
  // }, []);
  // useEffect(() => {
  //   // console.log('useEffect cambio');
  // }, [formState]);
  // useEffect(() => {
  //   // console.log('email cambio');
  // }, [email]);

  return (
    <>
      <h1>
        Formulario con Custom Hook
      </h1>
      <hr/>
      <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}  
      />
      <input type="email" 
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input type="password" 
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar Todo</button>
    </>
  )
}

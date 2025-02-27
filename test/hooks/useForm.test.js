import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

describe('Pruebas en el useForm', () => {

  const initialForm = {
    name:'Ernesto',
    email: 'email',
  }

  test('Debe regresar los valores por defecto', () => {
    const {result} = renderHook(()=>useForm(initialForm));
    // const {formState} = result.current;
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('Debe de cambiar el nombre del formulario', () => {
    const newValue = 'José';
    const {result} = renderHook(()=>useForm(initialForm));
    const {formState, onInputChange} = result.current;

    act(() => {
      onInputChange({target: {name: 'name', value: newValue}});
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

  });

  test('Debe de resetear el formulario', () => {
    const newValue = 'José';

    const {result} = renderHook(()=>useForm(initialForm));
    const {formState, onInputChange, onResetForm} = result.current;

    act(() => {
      onInputChange({target: {name: 'name', value: newValue}});
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });
});
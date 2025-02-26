import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

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
});
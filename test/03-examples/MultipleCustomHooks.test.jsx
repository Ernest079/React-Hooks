import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {


  const mockIncrease = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrease,
  });

  beforeEach(()=>{
    jest.clearAllMocks();
  });

  test('Debe de mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks/>);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText('Información de Pókemon'));

    const nextButton = screen.getByRole('button', {name:'Next'});
    expect(nextButton.disabled).toBeFalsy();
    screen.debug();
  });

  test('Debe de mostrar un Pokemon', () => {
    useFetch.mockReturnValue({
      data: {
        id :  1,
        name : 'bulbasaur',
        sprites:{
         img:{
          front_shiny: "https://shiny/1.png",
          front_default: "https://shiny/1.png",
          back_shiny: "https://shiny/1.png",
          back_default: "https://shiny/1.png",
         }
        } 
      },
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks/>);

    expect(screen.getByText('Información de Pókemon')).toBeTruthy();
    const nextButton = screen.getByRole('button', {name: 'Next'});
    expect(nextButton.disabled).toBeFalsy();
  });

  test('Debe de llamar a la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: {
        id :  1,
        name : 'bulbasaur',
        sprites:{
         img:{
          front_shiny: "https://shiny/1.png",
          front_default: "https://shiny/1.png",
          back_shiny: "https://shiny/1.png",
          back_default: "https://shiny/1.png",
         }
        } 
      },
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks/>);

    // expect(screen.getByText('')).toBeTruthy();
    const nextButton = screen.getByRole('button', {name: 'Next'});
    fireEvent.click(nextButton);
    
    expect(mockIncrease).toHaveBeenCalled();
  });
});
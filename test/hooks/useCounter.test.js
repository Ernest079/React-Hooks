import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";

describe('Pruebas en el useCOunter', () => { 
  test('Debe de retornar los valores por defecto', () => {
    const {result} = renderHook(() => useCounter());
    const {counter, decrement, increment, reset} = result.current;

    expect(counter).toBe(1);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  }); 

  test('Debe de generar el counter con el valor de 100', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter, decrement, increment, reset} = result.current;

    expect(counter).toBe(100);
  });

  test('Debe incrementar el contador', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter, increment} = result.current;
    act(()=>{
      increment(2);
    });
    expect(result.current.counter).toBe(102);
  });

  test('Debe decrementar el contador', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter, decrement} = result.current;
    act(()=>{
      decrement();
    });
    expect(result.current.counter).toBe(99);
  });

  test('Debe resetear el contador', () => {
    const initalValue = 10;
    const {result} = renderHook(() => useCounter(initalValue));
    const {counter, reset, increment, decrement} = result.current;
    act(()=>{
      increment();
    });
    expect(result.current.counter).toBe(11);
    act(()=>{
      reset();
    });
    expect(result.current.counter).toBe(initalValue);
    act(()=>{
      decrement();
    });
    expect(result.current.counter).toBe(9);
    act(()=>{
      reset();
    });
    expect(result.current.counter).toBe(initalValue);
  });
});
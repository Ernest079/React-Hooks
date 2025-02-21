import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { PokemonCard } from './PokemonCard';
import { LoadingMessage } from './LoadingMessage';

export const MultipleCustomHooks = () => {

  const {counter, decrement, increment} = useCounter(1);
  const{data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de Pókemon</h1>
      <hr/>

      {
        isLoading ? <LoadingMessage/>
                  // : <p>{data.name}</p>
                  : <PokemonCard 
                      id = {counter} 
                      name = {data.name}
                      sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny
                      ]}  
                    />  
      }

      <button className='btn btn-primary' onClick={() => counter > 1 ? decrement():null}>
        Anterior
      </button>
      <button className='btn btn-primary' onClick={() => increment()}>
        Siguiente
      </button>
    </>
  )
}

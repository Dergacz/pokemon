import React, { FC } from 'react';
import { pokemonApi } from '../../services/PokemonServiceApi';
import { Pokemon } from '../Pokemon/Pokemon';

export const PokemonList: FC = () => {
  const { data: pokemons, isLoading } = pokemonApi.useFetchAllPokemonQuery(100);
  return (
    <div>
      {
        isLoading && (
          <p>Loading...</p>
        )
      }
      {
        !isLoading && pokemons.results.map(pokemon => (
          <Pokemon
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))
      }
    </div>
  );
};



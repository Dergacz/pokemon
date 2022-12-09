import * as React from 'react';
import { pokemonApi } from '../services/PokemonServiceApi';
import { Pokemon } from './Pokemon';
import { FC } from 'react';

const MainPage: FC = () => {
  const { data: pokemons } = pokemonApi.useFetchAllPokemonQuery(100);
  return (
        <div>
            {
                pokemons && pokemons.results.map(pokemon => (
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

export default MainPage;

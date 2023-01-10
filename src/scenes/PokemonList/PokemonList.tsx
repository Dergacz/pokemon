import React, { FC } from 'react';
import { pokemonApi } from '../../services/PokemonServiceApi';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Grid, Loading } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export const PokemonList: FC = () => {
  const { data: pokemons, isLoading } = pokemonApi.useFetchAllPokemonQuery(9);

  return (
    <div className="pokemon-list-wrapper">
      {
        isLoading && (
          <Loading size="xl" />
        )
      }
      <Grid.Container gap={2}>
        {
          !isLoading && pokemons.results.map(pokemon => {
            return (
              <Grid
                xs={4}
                key={pokemon.url}
              >
                <Link to={pokemon.name}>
                  <PokemonCard
                    name={pokemon.name}
                    url={pokemon.url}
                  />
                </Link>
              </Grid>
            );
          })
        }
      </Grid.Container>
    </div>
  );
};



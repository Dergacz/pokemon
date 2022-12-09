import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFetchPokemons } from '../models/models';

export const pokemonApi = createApi({
  reducerPath: 'pokemonAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (build) => ({
    fetchAllPokemon: build.query<IFetchPokemons, number>({
      query: (limit: number = 10) => ({
        url: 'pokemon',
        params: {
          limit,
        },
      }),
    }),
  }),
});
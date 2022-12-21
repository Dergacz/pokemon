import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/PokemonServiceApi';

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
  });
};

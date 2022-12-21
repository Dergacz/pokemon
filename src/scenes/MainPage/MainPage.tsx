import React, { FC } from 'react';
import { PokemonList } from '../PokemonList/PokemonList';
import Header from '../../components/Header/Header';
import { Input, Pagination } from '@nextui-org/react';

export const MainPage: FC = () => {
  return (
    <>
      <Header/>
      <Input
        className="main-page-search"
        width="100%"
        bordered
        placeholder="search pokemon"
      />
      <PokemonList />
      <footer className="main-page-pagination">
        <Pagination total={20} initialPage={1} />
      </footer>
    </>
  );
};

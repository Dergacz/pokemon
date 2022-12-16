import React, { FC } from 'react';
import { IPokemon } from './Pokemon.types';

export const Pokemon: FC<IPokemon> = ({
  name,
}) => {
  return (
    <div>
      {name}
    </div>
  );
};

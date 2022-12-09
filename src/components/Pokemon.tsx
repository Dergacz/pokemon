import * as React from 'react';
import { FC } from 'react';
import { IPokemon } from '../models/models';

export const Pokemon: FC<IPokemon> = ({
  name,
}) => {
  return (
        <div>
            {name}
        </div>
  );
};
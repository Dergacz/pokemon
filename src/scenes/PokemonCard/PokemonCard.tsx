import React, { FC } from 'react';
import { IPokemon } from './PokemonCard.types';
import { Card } from '@nextui-org/react';

export const PokemonCard: FC<IPokemon> = ({
  name,
}) => {
  return (
    <Card
      className="pokemon-card-wrapper"
      isPressable
    >
      <Card.Header className="pokemon-card-id-wrapper">
        <span>#001</span>
      </Card.Header>
      <Card.Body style={{ width: 'auto' }}>
        <Card.Image
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Card.Body>
      <Card.Footer className="pokemon-card-footer">
        <span className="pokemon-card-name">{name}</span>
      </Card.Footer>
    </Card>
  );
};

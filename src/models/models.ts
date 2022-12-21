
interface IPokemon {
  name: string;
  url: string;
}
export interface IFetchPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

import { Item } from "../types/common";

export type GetPokemonDetails = {
  name: string;
  id: number;
  sprites: {
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: Item
  }[];
};

export type GetPokemon = Item;

export type GetPokemons = GetPokemon[];

import { Item } from "../types/common";
import { GetPokemons } from "./pokemon.dto";

type Name = {
  language: Item;
  name: string;
};

export type GetGeneration = {
  id: number;
  name: string;
  names: Name[];
  version_groups: Item[];
  pokemon_species: GetPokemons
};

export type GetGenerations = GetGeneration[]
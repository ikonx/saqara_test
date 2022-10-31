import axios from "axios";
import { GetGeneration, GetGenerations } from "../dto/generation.dto";
import { GetPokemonDetails, GetPokemons } from "../dto/pokemon.dto";

export const getPokemonDetails = (id: number | string): Promise<GetPokemonDetails> =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({ data }) => data);

export const getPokemons = (): Promise<GetPokemons> =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon`)
    .then(({ data }) => data.results);

export const getPokemonGeneration = (id: number): Promise<GetGeneration> =>
  axios
    .get(`https://pokeapi.co/api/v2/generation/${id}`)
    .then(({ data }) => data);

export const getAllGenerations = (): Promise<GetGenerations> => {
  const MAX_GEN = 8;
  const promises: Promise<GetGeneration>[] = [];

  for (let index = 0; index < MAX_GEN; index++) {
    promises[index] = getPokemonGeneration(index + 1);
  }

  return Promise.all(promises);
};

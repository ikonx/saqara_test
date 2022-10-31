// "use client";
import React from "react";
import {
  getAllGenerations,
  getPokemonDetails,
  getPokemonGeneration,
} from "../../../api";
import PokemonCard from "../../../ui/molecules/PokemonCard/PokemonCard";
import { getGenerationNameByLang } from "../../../utils/getGenerationNameByLang";

export default async function Page({ params }: { params: { id: number } }) {
  const generation = await getPokemonGeneration(params.id);
  const { pokemon_species } = generation;
  const promises = await Promise.all(
    pokemon_species.map(async (pokemon) => {
      try {
        return await getPokemonDetails(pokemon.name);
      } catch (error) {
        // fallback if API doesn't have the pokemon case
        return null;
      }
    })
  );

  const generationName = getGenerationNameByLang("en", generation);

  return (
    <div>
      <div className="flex items-center justify-center py-10">
        <h1 className="font-bold text-white text-6xl">
          Pokemons in {generationName}
        </h1>
      </div>

      <div
        className="px-2 pb-2 grid grid-flow-dense grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2"
      >
        {promises.map((pokemon) => {
          if (!pokemon) return;
          let details = pokemon.types.map((type) => type.type.name).join(" - ");
          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              details={details}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const generations = await getAllGenerations();
  return generations.map((generation) => ({
    id: generation.id.toString(),
  }));
}

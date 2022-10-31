import React from "react";
import { getAllGenerations } from "../api";
import GenerationCard from "../ui/molecules/GenerationCard/GenerationCard";
import { getGenerationNameByLang } from "../utils/getGenerationNameByLang";

export default async function Page() {
  const generations = await getAllGenerations();

  return (
    <div className="home text-white text-center">
      <div className="flex items-center justify-center py-10">
        <h1 className="font-bold text-white text-6xl">
          Search Pokemons by generation
        </h1>
      </div>

      <div className="px-2 pb-2 grid grid-flow-dense grid-cols-[repeat(1,auto)] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-2 max-w-4xl mx-auto">
        {generations.map((generation) => (
          <GenerationCard
            key={generation.id}
            name={getGenerationNameByLang("en", generation)}
            href={`/generation/${generation.id}`}
          />
        ))}
      </div>
    </div>
  );
}

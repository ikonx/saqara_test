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

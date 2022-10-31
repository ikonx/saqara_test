import { GetGeneration } from "../dto/generation.dto";

export const getGenerationNameByLang = (
  lang: string,
  generation: GetGeneration
): string=> generation.names.filter((name) => name.language.name === lang)[0].name;

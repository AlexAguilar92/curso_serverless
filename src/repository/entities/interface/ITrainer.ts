import IPokemonByTrainer from "./IPokemonByTrainer";

export default interface ITrainer {
  name: string,
  city: string,
  image: string,
  pokemonByTrainer: IPokemonByTrainer[]
}
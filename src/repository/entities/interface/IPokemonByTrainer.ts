import IPokemon from "./IPokemon";
import ITrainer from "./ITrainer";

export default interface IPokemonByTrainer {
  trainer: ITrainer,
  pokemon: IPokemon
}
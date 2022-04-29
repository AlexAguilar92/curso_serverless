import IPokemonByTrainer from "./IPokemonByTrainer";
import IType from "./IType";

export default interface IPokemon {
  name: string,
  image: string,
  type: IType,
  pokemonByTrainer: IPokemonByTrainer[]
}
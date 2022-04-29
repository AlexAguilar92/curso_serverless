import { Entity, ManyToOne } from "typeorm";
import IPokemon from "../interface/IPokemon";
import IPokemonByTrainer from "../interface/IPokemonByTrainer";
import ITrainer from "../interface/ITrainer";
import BaseEntity from "./BaseEntity";
import Pokemon from "./Pokemon";
import Trainer from "./Trainer";

@Entity({ schema: "public" })
export default class PokemonByTrainer extends BaseEntity implements IPokemonByTrainer {

  @ManyToOne(() => Trainer, trainer => trainer)
  trainer: ITrainer;

  @ManyToOne(() => Pokemon, pokemon => pokemon)
  pokemon: IPokemon;
  
}
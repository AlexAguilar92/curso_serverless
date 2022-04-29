import { Column, Entity, OneToMany } from "typeorm";
import IPokemonByTrainer from "../interface/IPokemonByTrainer";
import ITrainer from "../interface/ITrainer";
import BaseEntity from "./BaseEntity";
import PokemonByTrainer from "./PokemonByTrainer";

@Entity()
export default class Trainer extends BaseEntity implements ITrainer {
  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { length: 50 })
  city: string;

  @Column("varchar", { length: 200 })
  image: string;
  
  @OneToMany(() => PokemonByTrainer, pokemonByTrainer => pokemonByTrainer)
  pokemonByTrainer: IPokemonByTrainer[]
}
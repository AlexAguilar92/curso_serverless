import "reflect-metadata"
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import IPokemon from "../interface/IPokemon";
import IPokemonByTrainer from "../interface/IPokemonByTrainer";
import IType from "../interface/IType";
import BaseEntity from "./BaseEntity";
import PokemonByTrainer from "./PokemonByTrainer";
import Type from "./Type";

@Entity({ schema: "public" })
export default class Pokemon extends BaseEntity implements IPokemon  {
  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { length: 250 })
  image: string;

  @ManyToOne(() => Type, type => type.pokemon)
  type: IType;

  @OneToMany(() => PokemonByTrainer, pokemonByTrainer => pokemonByTrainer)
  pokemonByTrainer: IPokemonByTrainer[]
}
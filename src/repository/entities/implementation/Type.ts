import "reflect-metadata"
import { Column, Entity, OneToMany } from "typeorm";
import IPokemon from "../interface/IPokemon";
import IType from "../interface/IType";
import BaseEntity from "./BaseEntity";
import Pokemon from "./Pokemon";

@Entity({ schema: "public" })
export default class Type extends BaseEntity implements IType {
  @Column("varchar", { length: 50 })
  name: string;

  @OneToMany(() => Pokemon, pokemon => pokemon.type)
  pokemon: IPokemon[]
}
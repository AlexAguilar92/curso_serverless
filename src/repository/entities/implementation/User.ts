import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
import Todo from "./Todo";
import IUser from "../interface/IUser";

@Entity({ schema: 'public' })
export default class User implements IUser {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @Column('bool', { default: true })
  status: boolean;

  @OneToMany(() => Todo, todo => todo.user)
  todos: Todo[];
}
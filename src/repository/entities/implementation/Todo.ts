import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import "reflect-metadata"

@Entity({ schema: "public" })
export default class Todo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column('varchar', { length: 255 })
  description: string;

  @Column('bool', { default: true })
  active: boolean

  @ManyToOne(() => User, user => user.todos)
  user: User;
}
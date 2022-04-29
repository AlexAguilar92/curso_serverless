import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import IBaseEntity from "../interface/IBaseEntity";

@Entity()
export default class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("bool", { default: true })
  active: boolean;
}
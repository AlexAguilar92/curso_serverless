import "reflect-metadata";
import { SelectQueryBuilder } from "typeorm";
import { IDBConnectionManager } from "../../../shared";
import User from "../../entities/implementation/User";
import IUserRepository from "../interface/IUserRepository";
import { inject, injectable } from "inversify";
import TYPES from "src/types";

@injectable()
export default class UserRepository implements IUserRepository {
  private iDBConnectionManager: IDBConnectionManager;

  constructor(
    @inject(TYPES.DBConnectionManager) iDBConnectionManager: IDBConnectionManager,
  ) {
    this.iDBConnectionManager = iDBConnectionManager;
  }

  async findById(id: string): Promise<User> {
    throw new Error("Not implemented yet.")
    // await this.iDBConnectionManager.connect();
    // try {
    //   const query: SelectQueryBuilder<IUser> = this.iDBConnectionManager.connection
    //   .getRepository(User).createQueryBuilder("user")
    //   .where("user.id = :id", { id });

    //   const user: IUser = await query.getOne();

    //   return user;
    // } catch (error) {
    //   // tslint:disable-next-line:no-console
    //   console.error("UserRepository.findById", error)
    //   throw error;
    // } finally {
    //   // tslint:disable-next-line:no-console
    //   await this.iDBConnectionManager.disconnect();
    // }
    
  }

  async find(): Promise<User[]> {
    await this.iDBConnectionManager.connect();
    try {
      const query: SelectQueryBuilder<User> = this.iDBConnectionManager.connection
      .getRepository(User).createQueryBuilder("user");
      query.
      leftJoinAndSelect("user.todos", "todo");
      const users: User[] = await query.getMany();
      return users;
    } catch (error) {
      throw error;
    } finally {
      await this.iDBConnectionManager.disconnect()
    }
  }

  findByName(name: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async create(user: Partial<User>): Promise<User> {
    throw new Error("Method not implemented.");
    // await this.iDBConnectionManager.connect();

    // try {
    //   const createdUser: User = await this.iDBConnectionManager.connection
    //   .getRepository(User).save(user);
    //   // tslint:disable-next-line:no-console
    //   console.log("UserRepository.create", createdUser)
    //   return createdUser;
    // } catch (error) {
    //   throw error;
    // } finally {
    //   // tslint:disable-next-line:no-console
    //   console.log("disconnected");
    //   await this.iDBConnectionManager.disconnect();
    // }
  }

  async update(user: User): Promise<User> {
    throw new Error("Not implemented yet.")
    // return true;
  }

  async delete(id: string): Promise<void> {
    throw new Error("Not implemented yet.")
    // return true;
  }
}
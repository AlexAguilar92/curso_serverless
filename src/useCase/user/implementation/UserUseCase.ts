import IUser from "../../../repository/entities/interface/IUser";
import IUserUseCase from "../interface/IUserUseCase";
import { hash } from '../../../shared/utils/hasher/hasher'
import { IUserRepository } from "../../../repository";
import { inject, injectable } from "inversify";
import TYPES from "src/types";

@injectable()
export default class UserUseCase implements IUserUseCase {
  private iUserRepository: IUserRepository;

  constructor(
    @inject(TYPES.UserRepository) iUserRepository: IUserRepository,
  ) {
    this.iUserRepository = iUserRepository;
  }

  async create(user: IUser): Promise<IUser> {
    user.password = hash(user.password);
    const createdUser: IUser = await this.iUserRepository.create(user);
    return createdUser;
  }
}
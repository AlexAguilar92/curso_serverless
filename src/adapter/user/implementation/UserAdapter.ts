import "reflect-metadata";
import IUser from "../../../repository/entities/interface/IUser";
import { IUserRepository } from "../../../repository";
import IUserAdapter from "../interface/IUserAdapter";
import IUserDTO from "../../DTO/IUserDTO";
import { IMapperService } from "../../../shared";
import { inject, injectable } from "inversify";
import TYPES from "../../../types";

@injectable()
export default class UserAdapter implements IUserAdapter {
  private iUserRepository: IUserRepository;
  private iUserMapperService: IMapperService<IUser, IUserDTO>;

  constructor(
    @inject(TYPES.UserRepository) iUserRepository: IUserRepository,
    @inject(TYPES.UserMapperService) iUserMapperService: IMapperService<IUser, IUserDTO>,
  ) {
    this.iUserRepository = iUserRepository;
    this.iUserMapperService = iUserMapperService;
  }

  async find(): Promise<IUserDTO []> {
    const users: IUser [] = await this.iUserRepository.find();
    const usersDTO: IUserDTO [] = this.iUserMapperService.transform(users);
    return usersDTO;
  }

  async findById(id: string): Promise<IUserDTO> {
    const user: IUser = await this.iUserRepository.findById(id);
    const userDTO: IUserDTO = this.iUserMapperService.transform(user);
    return userDTO;
  }
}
import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "./types";

/**
 * Inversify container
 * @function {Container} container
 */

//#region DBConnectionManager
import { DBConnectionManager, IDBConnectionManager } from "./shared";
//#endregion

//#region User imports
import { UserAdapter, IUserAdapter, UserMapperService } from "./adapter";
import { UserUseCase, IUserUseCase } from "./usecase";
import { UserRepository, IUserRepository } from "./repository";
//#endregion

const container: Container = new Container();

//#region DBConnectionManager
container.bind<IDBConnectionManager>(TYPES.DBConnectionManager).to(DBConnectionManager).inSingletonScope();
//#endregion

//#region User bindings
container.bind<IUserAdapter>(TYPES.UserAdapter).to(UserAdapter);
container.bind<IUserUseCase>(TYPES.UserUseCase).to(UserUseCase);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<UserMapperService>(TYPES.UserMapperService).to(UserMapperService);
//#endregion

export default container;

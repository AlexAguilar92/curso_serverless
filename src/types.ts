const TYPES = {
  //#region DBConnectionManager
  DBConnectionManager: Symbol.for("DBConnectionManager"),
  //#endregion
  
  //#region User
  UserRepository: Symbol.for('UserRepository'),
  UserUseCase: Symbol.for('UserUseCase'),
  UserAdapter: Symbol.for('UserAdapter'),
  UserMapperService: Symbol.for('UserMapperService'),
  //#endregion
}

export default TYPES;
import "reflect-metadata";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { IUserAdapter } from 'src/adapter';
import IUserDTO from 'src/adapter/DTO/IUserDTO';
import container from 'src/inversify.config';
import TYPES from 'src/types';

const getUsersHandler = async (event) => {
  const iUserAdapter: IUserAdapter = container.get<IUserAdapter>(TYPES.UserAdapter);
  const users: IUserDTO[] = await iUserAdapter.find();
  return formatJSONResponse({
    users
  });
};

export const getUsers = middyfy(getUsersHandler);
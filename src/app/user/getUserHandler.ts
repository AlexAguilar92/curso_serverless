import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { IUserAdapter } from "src/adapter";
import IUserDTO from "src/adapter/DTO/IUserDTO";
import container from "src/inversify.config";
import TYPES from "src/types";
import "reflect-metadata"

const getUserHandler = async (event) => {
  const iUserAdapter: IUserAdapter = container.get<IUserAdapter>(TYPES.UserAdapter);
  const user: IUserDTO = await iUserAdapter.findById(event.pathParameters.id);
  return formatJSONResponse({
    user
  });
};

export const getUser = middyfy(getUserHandler);
import "reflect-metadata";
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/getUsersHandler.getUsers`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user',
      },
    },
  ],
};

import { handlerPath } from '@libs/handler-resolver';
import "reflect-metadata"

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'hello',
      },
    },
  ],
};

import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
import { errorMiddleware } from "src/middleware/errors/errorHandler"

export const middyfy = (handler) => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .use(errorMiddleware())
}

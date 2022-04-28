import { formatJSONResponse } from "@libs/api-gateway";

export const errorMiddleware = () => {
  console.log("errorMiddleware")

  const errorHandler = (request) => {
    console.log("request", request)
    const { error, response } = request;
    console.log("error handler", error, response);

    return formatJSONResponse({ message: "error"}, 500)
  }
  
  return {
    onError: errorHandler,
  }
}
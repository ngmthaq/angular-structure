import { environment as privateEnvironment } from "./environment.private";

const HTTP_STATUS_CODE = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  error: 500,
  unavailable: 503,
};

export const environment = {
  ...privateEnvironment,
  env: "development",
  appPaths: {},
  apiEndpoints: {},
  apiBaseUrl: "",
  apiTimeOut: 60000,
  httpStatusCode: HTTP_STATUS_CODE,
};

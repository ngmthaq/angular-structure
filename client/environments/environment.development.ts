import { environment as privateEnvironment } from "./environment.private";

export const environment = {
  ...privateEnvironment,
  env: "development",
  enableLog: true,
  appPaths: {},
  apiEndpoints: {},
  storageKeys: {
    language: "language",
    accessToken: "accessToken",
  },
  eventBusEvents: {},
  apiBaseUrl: "",
  apiTimeOut: 60000,
  httpStatusCode: {
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
  },
};

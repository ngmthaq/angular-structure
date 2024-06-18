import { environment as devEnvironment } from "./environment.development";

export const environment = {
  ...devEnvironment,
  env: "production",
  enableLog: false,
};

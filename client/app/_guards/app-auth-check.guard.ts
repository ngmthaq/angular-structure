import { CanActivateFn } from "@angular/router";

export const appAuthCheckGuard: CanActivateFn = (route, state) => {
  return true;
};

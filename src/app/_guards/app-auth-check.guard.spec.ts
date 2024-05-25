import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { appAuthCheckGuard } from "./app-auth-check.guard";

describe("appAuthCheckGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => appAuthCheckGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});

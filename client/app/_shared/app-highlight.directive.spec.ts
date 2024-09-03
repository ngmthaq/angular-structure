import { ElementRef } from "@angular/core";
import { AppHighlightDirective } from "./app-highlight.directive";

describe("AppHighlightDirective", () => {
  it("should create an instance", () => {
    const elementRef = new ElementRef(document.createElement("p"));
    const directive = new AppHighlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});

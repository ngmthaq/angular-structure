import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appAppHighlight]",
})
export class AppHighlightDirective {
  public constructor(public elementRef: ElementRef) {
    elementRef.nativeElement.style.background = "red";
  }
}

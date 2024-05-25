import { NgModule } from "@angular/core";

import { AppHighlightDirective } from "./app-highlight.directive";
import { AppFormatDatePipe } from "./app-format-date.pipe";

@NgModule({
  declarations: [AppHighlightDirective, AppFormatDatePipe],
  imports: [],
  exports: [AppHighlightDirective, AppFormatDatePipe],
})
export class SharedModule {}

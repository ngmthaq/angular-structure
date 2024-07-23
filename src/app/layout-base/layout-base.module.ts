import { NgModule } from "@angular/core";
import { LayoutBaseComponent } from "./layout-base.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [LayoutBaseComponent],
  imports: [AppCommonModule],
  exports: [LayoutBaseComponent],
})
export class LayoutBaseModule {}

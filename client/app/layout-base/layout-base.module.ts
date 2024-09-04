import { NgModule } from "@angular/core";
import { LayoutBaseComponent } from "./layout-base.component";
import { AppCommonModule } from "../app-common/app-common.module";
import { ComponentCircularLoadingModule } from "../component-circular-loading/component-circular-loading.module";
import { ComponentSnackbarModule } from "../component-snackbar/component-snackbar.module";

@NgModule({
  declarations: [LayoutBaseComponent],
  imports: [AppCommonModule, ComponentCircularLoadingModule, ComponentSnackbarModule],
  exports: [LayoutBaseComponent],
})
export class LayoutBaseModule {}

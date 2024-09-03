import { NgModule } from "@angular/core";
import { ComponentSnackbarComponent } from "./component-snackbar.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [ComponentSnackbarComponent],
  imports: [AppCommonModule],
  exports: [ComponentSnackbarComponent],
})
export class ComponentSnackbarModule {}

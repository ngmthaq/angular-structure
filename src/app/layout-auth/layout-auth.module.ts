import { NgModule } from "@angular/core";
import { LayoutAuthComponent } from "./layout-auth.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [LayoutAuthComponent],
  imports: [AppCommonModule],
  exports: [LayoutAuthComponent],
})
export class LayoutAuthModule {}

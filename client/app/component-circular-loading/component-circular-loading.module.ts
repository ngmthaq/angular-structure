import { NgModule } from "@angular/core";
import { ComponentCircularLoadingComponent } from "./component-circular-loading.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [ComponentCircularLoadingComponent],
  imports: [AppCommonModule],
  exports: [ComponentCircularLoadingComponent],
})
export class ComponentCircularLoadingModule {}

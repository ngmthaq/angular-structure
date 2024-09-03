import { NgModule } from "@angular/core";

import { PageHomeRoutingModule } from "./page-home-routing.module";
import { PageHomeComponent } from "./page-home.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [PageHomeComponent],
  imports: [AppCommonModule, PageHomeRoutingModule],
})
export class PageHomeModule {}

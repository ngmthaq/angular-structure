import { NgModule } from "@angular/core";

import { PageHomeRoutingModule } from "./page-home-routing.module";
import { PageHomeComponent } from "./page-home.component";
import { AppCommonModule } from "../app-common/app-common.module";
import { LayoutBaseModule } from "../layout-base/layout-base.module";

@NgModule({
  declarations: [PageHomeComponent],
  imports: [AppCommonModule, PageHomeRoutingModule, LayoutBaseModule],
})
export class PageHomeModule {}

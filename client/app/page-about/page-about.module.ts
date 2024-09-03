import { NgModule } from "@angular/core";

import { PageAboutRoutingModule } from "./page-about-routing.module";
import { PageAboutComponent } from "./page-about.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [PageAboutComponent],
  imports: [AppCommonModule, PageAboutRoutingModule],
})
export class PageAboutModule {}

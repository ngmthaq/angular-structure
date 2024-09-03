import { NgModule } from "@angular/core";

import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";
import { PageNotFoundComponent } from "./page-not-found.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [AppCommonModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
